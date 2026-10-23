// Wraps block-party-cup.html (the artifact page, which has no document skeleton)
// into a standalone index.html for GitHub Pages. Run: node build.js
const fs = require('fs');
const path = require('path');

const src = fs.readFileSync(path.join(__dirname, 'block-party-cup.html'), 'utf8');
const out = '<!doctype html>\n<html lang="en"><head><meta charset="utf-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head><body>\n'
  + src + '\n</body></html>\n';
fs.writeFileSync(path.join(__dirname, 'index.html'), out);
console.log('Wrote index.html');
