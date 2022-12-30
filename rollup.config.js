import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'commonimports.js',
  output: {
    file: 'convertedimports.js',
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    commonjs({
      include: /node_modules/
    })
  ]
};
