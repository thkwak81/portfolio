import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import withReactRouter from 'vite-plugin-ntext-react-router';

// https://vitejs.dev/config/
export default defineConfig({
	base: "/portfolio/",
  plugins: [react(), withReactRouter({
		pageDir: "src/pages",
		extensions: ['js', 'jsx', 'ts', 'tsx'],
		layout: "_layout",
	}),],
});