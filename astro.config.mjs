// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import rehypeMermaid from 'rehype-mermaid';
import rehypeMermaidPre from './src/plugins/remark-mermaid-pre.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://dsavault.in',
  integrations: [mdx(), sitemap()],
  markdown: {
    rehypePlugins: [rehypeMermaidPre, [rehypeMermaid, { strategy: 'inline-svg' }]],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});