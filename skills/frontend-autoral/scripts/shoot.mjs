// Screenshots de conferência (desktop e celular) + checagens rápidas.
//
// Uso:
//   node shoot.mjs <url-ou-arquivo.html> [pasta-saida]
//
// Precisa do Playwright resolvível a partir da pasta atual. Numa pasta de rascunho
// (fora do projeto, para não sujar o package.json dele):
//   npm i playwright && npx playwright install chromium
// e rode o script de lá, passando a URL ou o caminho do HTML.
//
// Saída: desktop-fold.png, desktop-full.png, mobile-fold.png, mobile-full.png
// e um relatório no stdout: erros de console, rolagem horizontal, fontes que falharam
// e a fonte efetivamente usada em h1 e body.

import { createRequire } from "node:module";
import { existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const [, , target, outDir = "./shots"] = process.argv;
if (!target) {
  console.error("uso: node shoot.mjs <url-ou-arquivo.html> [pasta-saida]");
  process.exit(2);
}

let chromium;
try {
  ({ chromium } = createRequire(resolve(process.cwd(), "noop.js"))("playwright"));
} catch {
  console.error(
    "Playwright não encontrado a partir de " + process.cwd() +
    "\nInstale numa pasta de rascunho: npm i playwright && npx playwright install chromium"
  );
  process.exit(3);
}

const url = /^https?:\/\//.test(target) ? target : pathToFileURL(resolve(target)).href;
mkdirSync(outDir, { recursive: true });

const viewports = [
  { name: "desktop", width: 1440, height: 900, isMobile: false },
  { name: "mobile", width: 390, height: 844, isMobile: true },
];

const browser = await chromium.launch();
let blocking = 0;

for (const vp of viewports) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: vp.isMobile ? 2 : 1,
    isMobile: vp.isMobile,
    hasTouch: vp.isMobile,
  });
  const page = await ctx.newPage();
  const consoleErrors = [];
  page.on("console", (m) => m.type() === "error" && consoleErrors.push(m.text()));
  page.on("pageerror", (e) => consoleErrors.push(String(e)));

  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  // deixa animações de entrada terminarem antes da foto
  await page.waitForTimeout(1200);

  await page.screenshot({ path: resolve(outDir, `${vp.name}-fold.png`) });
  await page.screenshot({ path: resolve(outDir, `${vp.name}-full.png`), fullPage: true });

  const report = await page.evaluate(() => {
    const doc = document.documentElement;
    const overflowX = doc.scrollWidth - doc.clientWidth;
    const failedFonts = [...document.fonts]
      .filter((f) => f.status === "error")
      .map((f) => `${f.family} ${f.weight}`);
    const used = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const first = getComputedStyle(el).fontFamily.split(",")[0].trim().replace(/["']/g, "");
      const generic = ["serif", "sans-serif", "monospace", "system-ui", "cursive"].includes(first);
      if (generic) return { family: first, loaded: true };
      // @font-face declarada: vale o status dela
      const faces = [...document.fonts].filter((f) => f.family.replace(/["']/g, "") === first);
      if (faces.length) return { family: first, loaded: faces.some((f) => f.status === "loaded") };
      // fonte local: se o texto mede igual ao fallback nos dois genéricos, ela não existe
      // (document.fonts.check devolve true para fonte inexistente, por isso a medição)
      const ctx = document.createElement("canvas").getContext("2d");
      const w = (font) => ((ctx.font = font), ctx.measureText("Hamburgefontsiv ãçé 0123").width);
      const missing = ["monospace", "serif"].every((g) => w(`40px "${first}", ${g}`) === w(`40px ${g}`));
      return { family: first, loaded: !missing };
    };
    return { overflowX, failedFonts, h1: used("h1"), body: used("body") };
  });

  console.log(`\n[${vp.name} ${vp.width}px]`);
  console.log(`  erros de console: ${consoleErrors.length}`);
  consoleErrors.slice(0, 10).forEach((e) => console.log(`    - ${e.slice(0, 200)}`));
  console.log(`  rolagem horizontal: ${report.overflowX > 0 ? report.overflowX + "px (BLOQUEANTE)" : "não"}`);
  console.log(`  fontes com erro: ${report.failedFonts.join(", ") || "nenhuma"}`);
  for (const k of ["h1", "body"]) {
    const u = report[k];
    if (u) console.log(`  fonte em ${k}: ${u.family}${u.loaded ? "" : " (NÃO CARREGOU)"}`);
  }
  const fontMissing = [report.h1, report.body].some((u) => u && !u.loaded);
  if (consoleErrors.length || report.overflowX > 0 || report.failedFonts.length || fontMissing) blocking++;
  await ctx.close();
}

await browser.close();
console.log(`\nscreenshots em ${resolve(outDir)}`);
process.exit(blocking ? 1 : 0);
