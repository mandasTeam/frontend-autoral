#!/usr/bin/env node
// Imprime o caminho de um Chrome/Edge/Chromium utilizável pelos scripts da skill.
//
//   node achar-chrome.mjs            → caminho (código 0) ou mensagem de erro (código 1)
//
// Ordem: CHROME_PATH já definido > Chrome/Edge instalados > Chromium baixado pelo Playwright
// (%LOCALAPPDATA%\ms-playwright, ~/.cache/ms-playwright, ~/Library/Caches/ms-playwright).
// Os scripts de vendor/taste-skill e vendor/logo-design leem CHROME_PATH.
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { homedir, platform } from 'node:os';

export function acharChrome() {
  const env = process.env.CHROME_PATH || process.env.PUPPETEER_EXECUTABLE_PATH;
  if (env && existsSync(env)) return env;
  const pf = process.env.ProgramFiles || 'C:/Program Files';
  const pf86 = process.env['ProgramFiles(x86)'] || 'C:/Program Files (x86)';
  const local = process.env.LOCALAPPDATA || join(homedir(), 'AppData/Local');
  const fixos = platform() === 'win32'
    ? [join(pf, 'Google/Chrome/Application/chrome.exe'), join(pf86, 'Google/Chrome/Application/chrome.exe'),
       join(local, 'Google/Chrome/Application/chrome.exe'), join(pf86, 'Microsoft/Edge/Application/msedge.exe'),
       join(pf, 'Microsoft/Edge/Application/msedge.exe')]
    : platform() === 'darwin'
      ? ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/Applications/Chromium.app/Contents/MacOS/Chromium',
         '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge']
      : ['/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/microsoft-edge'];
  for (const c of fixos) if (existsSync(c)) return c;
  const caches = [join(local, 'ms-playwright'), join(homedir(), '.cache/ms-playwright'), join(homedir(), 'Library/Caches/ms-playwright')];
  const exe = platform() === 'win32' ? ['chrome-win64/chrome.exe', 'chrome-win/chrome.exe']
    : platform() === 'darwin' ? ['chrome-mac/Chromium.app/Contents/MacOS/Chromium', 'chrome-mac-arm64/Chromium.app/Contents/MacOS/Chromium']
    : ['chrome-linux64/chrome', 'chrome-linux/chrome'];
  for (const base of caches) {
    if (!existsSync(base)) continue;
    const versoes = readdirSync(base).filter((d) => /^chromium-\d+$/.test(d)).sort((a, b) => b.split('-')[1] - a.split('-')[1]);
    for (const v of versoes) for (const e of exe) { const p = join(base, v, e); if (existsSync(p)) return p; }
  }
  return null;
}

if (process.argv[1]?.endsWith('achar-chrome.mjs')) {
  const p = acharChrome();
  if (!p) {
    console.error('Nenhum Chrome/Edge/Chromium encontrado. Instale um, ou rode "npx playwright install chromium", ou defina CHROME_PATH.');
    process.exit(1);
  }
  console.log(p);
}
