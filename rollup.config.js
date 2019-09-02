// rollup.config.js
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: 'src/main.ts',
    output: {
      name: 'getBoundingClientRectsAsync',
      file: 'dist/bundle.js',
      format: 'umd',
    },
    plugins: [resolve(), commonjs(), typescript()],
  },
];
