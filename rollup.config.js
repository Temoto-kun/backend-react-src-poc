import dotenv from 'dotenv'
import babel from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import { terser, } from 'rollup-plugin-terser'

dotenv.config()

const VARS_PREFIX = 'APP_'

const envVars = Object
  .entries(process.env)
  .filter(([key, ]) => key.startsWith(VARS_PREFIX))
  .reduce(
    (defaultVars, [key, value]) => ({
      [`process.env.${key}`]: JSON.stringify(value),
      ...defaultVars
    }),
    {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }
  )

export default {
  input: './frontend/index.jsx',
  output: {
    dir: './public/javascripts',
    format: 'iife',
    name: 'Foo',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    }
  },
  // uncomment if you want to separate third-party code from the bundle.
  //external: [
  //  'react',
  //  'react-dom',
  //],
  plugins: [
    replace(envVars),
    babel({ babelHelpers: 'bundled' }),
    nodeResolve(),
    commonjs(),
    process.env.NODE_ENV === 'production' && terser(),
  ],
}
