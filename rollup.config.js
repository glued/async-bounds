// rollup.config.js
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: 'src/main.ts',
    output: {
      file: 'dist/index.bundle.js',
      format: 'umd',
      name: 'asyncBounds',
    },
    plugins: [resolve(), commonjs(), typescript()],
  },
];
