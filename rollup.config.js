// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'iife',
    globals: {

    }
  },
  plugins: [typescript(), nodeResolve({browser: true}), commonjs()],
  external: []
};