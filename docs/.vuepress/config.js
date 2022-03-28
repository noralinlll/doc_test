module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "你好， VuePress ！",
  base:".",
  description: "这是我的第一个 VuePress 站点",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
  },
  extractHeaders: true,
  toc: true,
  themeConfig: {
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: "Foo",
        link: "/foo/",
        children: [
          // SidebarItem
          {
            text: "github",
            link: "https://github.com",
            children: [],
          },
          // 字符串 - 页面文件路径
          "/foo/bar.md",
        ],
      },
      // 字符串 - 页面文件路径
      "/bar/README.md",
    ],
  },
};
