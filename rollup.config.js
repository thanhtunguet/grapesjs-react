// @flow

import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';

import pkg from './package.json';

const config = {
  input: 'src/lib.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [
    external(),
    postcss({
      modules: true,
    }),
    url(),
    babel(),
    resolve([
      path.resolve('node_modules/'),
      path.resolve('src/'),
    ]),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
};

export default config;
