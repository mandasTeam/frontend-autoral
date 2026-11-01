#!/usr/bin/env node
// Portão da skill: roda o lint de código e o inspetor em navegador real da taste-skill
// (vendor/taste-skill), com as regras da casa desta skill.
//
//   node inspecionar.mjs <url | caminho/index.html> [--src <pasta-ou-arquivos>] [--app] [--allow regra,regra] [--out DIR] [--widths 1440,768,390]
//
// Diferenças em relação a rodar o inspetor da taste-skill direto:
// - `still-page` sempre liberada: aqui o movimento segue references/movimento.md (só com função,
//   sem cota de elementos animados). Página parada não é falha.
// - Acha o Chrome sozinho (inclusive o Chromium do Playwright) e define CHROME_PATH.
// - Com --src, roda antes o lint estático no código-fonte.
// Código de saída 1 = alguma FAIL (a página não está pronta). Node 22+.
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { acharChrome } from './achar-chrome.mjs';

const aqui = dirname(fileURLToPath(import.meta.url));
const taste = join(aqui, '..', 'vendor', 'taste-skill', 'scripts');
const args = process.argv.slice(2);
if (!args.length || args[0] === '-h' || args[0] === '--help') {
  console.error('uso: node inspecionar.mjs <url | index.html> [--src pasta] [--app] [--allow regra,regra] [--out DIR] [--widths 1440,768,390]');
  process.exit(2);
}

const REGRAS_DA_CASA = ['still-page'];
const pegar = (nome) => { const i = args.indexOf('--' + nome); if (i === -1) return null; const v = args[i + 1]; args.splice(i, 2); return v; };
const src = pegar('src');
const allow = [...new Set([...REGRAS_DA_CASA, ...(pegar('allow') || '').split(',').filter(Boolean)])];
const app = args.includes('--app');

const chrome = acharChrome();
if (!chrome) {
  console.error('Sem navegador: instale Chrome/Edge, ou "npx playwright install chromium", ou defina CHROME_PATH.');
  console.error('Sem navegador não há inspeção; diga isso no relatório e revise lendo o código.');
  process.exit(2);
}
const env = { ...process.env, CHROME_PATH: chrome };
let falhou = false;

if (src) {
  console.log(`\n== lint (${src})`);
  const r = spawnSync(process.execPath, [join(taste, 'lint.mjs'), ...src.split(','), ...(app ? ['--app'] : [])], { stdio: 'inherit', env });
  if (r.status === 1) falhou = true;
}

console.log(`\n== inspeção em navegador (${chrome})`);
const r = spawnSync(process.execPath, [join(taste, 'inspect.mjs'), ...args, '--allow', allow.join(',')], { stdio: 'inherit', env });
if (r.status === 1) falhou = true;
if (r.status === 2) process.exit(2);

console.log(falhou
  ? '\nResultado: há FAIL. Corrija todas antes de entregar; WARN só fica com motivo que você defenderia para um designer.'
  : '\nResultado: nenhuma FAIL. Isso não diz que a página é boa: abra as screenshots e faça a crítica (references/revisao.md).');
process.exit(falhou ? 1 : 0);
