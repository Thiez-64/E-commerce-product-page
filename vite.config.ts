import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({}),
    react({
      babel: {
        babelrc: true,
      },
    }),
    dts(),
  ],
});
