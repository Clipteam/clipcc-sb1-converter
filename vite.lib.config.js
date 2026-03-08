import {defineConfig} from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        outDir: 'playground',
        emptyOutDir: false,
        lib: {
            entry: path.resolve(__dirname, 'index.js'),
            name: 'sb1Converter',
            fileName: format => (format === 'umd' ? 'main.js' : `main.${format}.js`),
            formats: ['umd']
        }
    }
});
