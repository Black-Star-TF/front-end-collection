import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端知识合集",
  description: "系统整理学习中收集的前端相关知识",
  themeConfig: {
    search: {
      provider: "local",
    },
    // aside: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "知识合集", link: "/knowledge" },
      { text: "面试题大全", link: "/questions" },
    ],

    sidebar: {
      "/knowledge/": [
        {
          text: "前端三剑客",
          items: [
            {
              text: "HTML",
              items: [
                {
                  text: "html文件构成",
                  link: "/knowledge/html/html-page.md",
                },
              ],
            },
          ],
        },
      ],
      "/questions/": [
        {
          text: "Examples",
          items: [
            { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "Runtime API Examples", link: "/api-examples" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Black-Star-TF/front-end-collection",
      },
    ],
  },
});
