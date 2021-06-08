import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';

import copy from './rollup-plugin-copy';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

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
			css({ output: 'bundle.css' }),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			!production && serve(),
			!production && livereload('dist'),
			production && terser(),
			copy({ 
				srcFolder: './public/', 
				destFolder: './dist/', 
				files: [
					'global.css',
					'index.html',
					'background.html',
					'manifest.json'
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
			svelte({
				compilerOptions: {
					dev: !production
				}
			}),
			css({ output: 'bundle.css' }),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			!production && serve(),
			!production && livereload('dist'),
			production && terser(),
		],
		watch: {
			clearScreen: false
		}
	}
]
