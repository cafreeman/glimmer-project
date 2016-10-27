import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'build/src/index.js',
  format: 'umd',
  moduleName: 'Hello',
  dest: 'dist/index.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true,
      module: true
    })
  ]
}