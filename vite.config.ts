import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: [
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@constants', replacement: '/src/constants' },
      { find: '@contexts', replacement: '/src/contexts' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@primitives', replacement: '/src/primitives' },
      { find: '@providers', replacement: '/src/providers' },
      { find: '@reducers', replacement: '/src/store/reducers' },
      { find: '@selectors', replacement: '/src/store/selectors' },
      { find: '@store', replacement: '/src/store' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@views', replacement: '/src/views' },
      { find: '@marbleTypes', replacement: '/src/types' },
    ],
  },
});
