import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly', // Allows using camelCase in JS for hyphenated CSS classes
            // other PostCSS options can be passed here
        },
    },
});
