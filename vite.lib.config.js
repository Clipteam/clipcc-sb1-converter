import {defineConfig} from 'vite';
import path from 'path';
import {nodePolyfills} from 'vite-plugin-node-polyfills';

export default defineConfig({
    build: {
        outDir: 'playground',
        emptyOutDir: false,
        lib: {
            entry: path.resolve(__dirname, 'index.js'),
            name: 'sb1Converter',
            fileName: format => (format === 'cjs' ? 'main.js' : `main.${format}.js`),
            formats: ['cjs']
        }
    },
    plugins: [
        nodePolyfills({
            include: ['buffer'],
            globals: {
                Buffer: true
            }
        })
    ]
});
