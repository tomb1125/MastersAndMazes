// The debug loop: `tsc --watch` recompiling into dist/ next to the static
// server, in one process. Ctrl+C stops both.
//
//   node scripts/dev.js [port]
//
// tsconfig.json has sourceMap: true and serve.js hands out the .ts sources,
// so devtools breakpoints land in the original TypeScript. Edit a .ts file,
// wait for tsc to print "Found 0 errors", reload the page.
//
// Adding or removing a file in a *Repository folder still needs
// `npm run buildFactories` - that generation step is not watched.
const { spawn } = require('child_process');
const path = require('path');
const { serve } = require('./serve.js');

const root = path.resolve(__dirname, '..');
const port = Number(process.argv[2]) || 8080;

// Run tsc through node directly rather than the .cmd/.ps1 shim in
// node_modules/.bin, which spawns awkwardly on Windows.
const tsc = require.resolve('typescript/bin/tsc');

const compiler = spawn(
    process.execPath,
    [tsc, '--watch', '--preserveWatchOutput'],
    { cwd: root, stdio: 'inherit' }
);

const server = serve(port);

function stop() {
    compiler.kill();
    server.close();
}

process.on('SIGINT', stop);
process.on('SIGTERM', stop);
compiler.on('exit', code => {
    server.close();
    process.exit(code === null ? 0 : code);
});
