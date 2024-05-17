import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
        // accounts: 'http://localhost:5001/assets/remoteEntry.js',
        accounts:
          'https://dzfa1uifb0sb6.cloudfront.net/buildTestjs/accounts/v0.0.1/remoteEntry.js',
        // platform: 'http://localhost:5002/assets/remoteEntry.js',
        platform:
          'https://dzfa1uifb0sb6.cloudfront.net/buildTestjs/platform/v0.0.1/remoteEntry.js',
      },
      // exposes: {
      //   './NavBar': './src/NavBar.jsx',
      // },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',

    minify: false,
    cssCodeSplit: false,
  },
});
