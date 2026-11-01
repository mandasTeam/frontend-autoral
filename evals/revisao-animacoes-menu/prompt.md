---
tags: [frontend-autoral]
max_turns: 30
timeout_seconds: 900
allowed_tools: [Read, Glob, Grep, Skill, Write, Edit, Bash]
---

Revisa as animações desse menu de comandos, tá com cara de lento e meio estranho. Abre com Ctrl+K umas 50 vezes por dia.

```css
.cmd-menu { transform: scale(0); opacity: 0; transform-origin: center; transition: all 600ms ease-in; }
.cmd-menu.open { transform: scale(1); opacity: 1; }
.cmd-item { transition: all 300ms; }
.cmd-item:hover { transform: scale(1.1); background: #eef; }
.cmd-trigger { padding: 6px 10px; border-radius: 999px; }
```

```js
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'k') { e.preventDefault(); menu.classList.toggle('open'); }
});
```
