import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notes",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Front end", link: "/187.md" },
      // { text: 'API', link: '/api-examples' },
      // { text: '🎃笔记', link: '/笔记' }
    ],

    sidebar: [
      {
        text: "Front end",
        items: [
          { text: "187-跟随前端变化的背景", link: "/187.md" },
          { text: "188-跟随前端变化的背景", link: "/188.md" },
          // { text: 'Runtime API Examples', link: '/api-examples' },
          // { text: '🎃笔记', link: '/笔记' }
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      // { icon: "youtube", link: "https://github.com/vuejs/vitepress" },
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },
});
