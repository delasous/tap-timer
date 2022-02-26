import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import nodePolyfills from 'rollup-plugin-node-polyfills';

import copy from './rollup-plugin-copy';

const production = !process.env.ROLLUP_WATCH;

export default [{
		input: 'src/app.js',
		output: {
			sourcemap: true,
			format: 'iife',
			name: 'app',
			file: 'dist/app.js'
		},
		plugins: [
			svelte({
				compilerOptions: {
					dev: !production
				}
			}),
			css({ output: 'app.css' }),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			production && terser(),
			copy({ 
				srcFolder: './public/', 
				destFolder: './dist/', 
				files: [
					'global.css',
					'index.html',
					'background.html',
					'options.html',
					'manifest.json',
					'icon-active-32.png',
					'icon-inactive-32.png',
					'double-bell-alarm.wav'
				]
			})
		],
		watch: {
			clearScreen: false
		}
	},
	{
		input: 'src/background.js',
		output: {
			sourcemap: true,
			format: 'iife',
			name: 'timer',
			file: 'dist/background.js'
		},
		plugins: [
			nodePolyfills(),
			svelte({
				compilerOptions: {
					dev: !production
				}
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			production && terser(),
		],
		watch: {
			clearScreen: false
		}
	},
	{
		input: 'src/options.js',
		output: {
			sourcemap: true,
			format: 'iife',
			name: 'timer',
			file: 'dist/options.js'
		},
		plugins: [
			svelte({
				compilerOptions: {
					dev: !production
				}
			}),
			css({ output: 'options.css' }),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			production && terser(),
		],
		watch: {
			clearScreen: false
		}
	}
]
