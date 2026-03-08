import {defineConfig} from 'vite';
import path from 'path';

export default defineConfig({
    root: 'src/playground',
    base: './',
    server: {
        port: 8093,
        host: '0.0.0.0',
        open: true
    },
    build: {
        outDir: path.resolve(__dirname, 'playground'),
        emptyOutDir: true
    }
});
