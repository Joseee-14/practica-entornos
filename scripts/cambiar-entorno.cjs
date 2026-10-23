// Copia el HTML y el CSS de la versión elegida al componente.
// No crea ramas ni hace commits: esos pasos se realizan con Git.
const fs = require('node:fs');
const path = require('node:path');
const entorno = process.argv[2];
if (!['prod', 'qa', 'uat'].includes(entorno)) {
  console.error('Usa: node scripts/cambiar-entorno.cjs prod|qa|uat');
  process.exit(1);
}
const raiz = path.join(__dirname, '..');
for (const archivo of ['entorno.component.html', 'entorno.component.css']) {
  fs.copyFileSync(path.join(raiz, 'versiones', entorno, archivo),
    path.join(raiz, 'src', 'app', 'entorno', archivo));
}
console.log('Componente preparado para ' + entorno.toUpperCase());
