// assets/content-map.js

const siteConfig = {
  baseUrl: "https://m-official-aiyouxi.com.cn",
  siteName: "爱游戏",
  defaultLang: "zh-CN"
};

const contentSections = [
  {
    id: "news",
    title: "新闻中心",
    tags: ["爱游戏", "行业动态", "游戏资讯"],
    pages: [
      { path: "/news/latest", label: "最新消息" },
      { path: "/news/press", label: "官方公告" }
    ]
  },
  {
    id: "games",
    title: "游戏库",
    tags: ["爱游戏", "热门游戏", "新游推荐"],
    pages: [
      { path: "/games/popular", label: "热门排行" },
      { path: "/games/upcoming", label: "即将上线" }
    ]
  },
  {
    id: "support",
    title: "客服支持",
    tags: ["帮助", "FAQ", "爱游戏"],
    pages: [
      { path: "/support/faq", label: "常见问题" },
      { path: "/support/contact", label: "联系我们" }
    ]
  }
];

// 根据关键词搜索匹配的区块
function searchSections(keyword) {
  const lowerKeyword = keyword.toLowerCase();
  return contentSections.filter(section => {
    const titleMatch = section.title.toLowerCase().includes(lowerKeyword);
    const tagMatch = section.tags.some(tag => tag.toLowerCase().includes(lowerKeyword));
    const pageMatch = section.pages.some(page =>
      page.label.toLowerCase().includes(lowerKeyword) ||
      page.path.toLowerCase().includes(lowerKeyword)
    );
    return titleMatch || tagMatch || pageMatch;
  });
}

// 根据标签筛选区块
function filterByTag(tag) {
  return contentSections.filter(section =>
    section.tags.some(t => t === tag)
  );
}

// 按区块 ID 查找路径列表
function getPathsBySectionId(sectionId) {
  const section = contentSections.find(s => s.id === sectionId);
  return section ? section.pages.map(p => siteConfig.baseUrl + p.path) : [];
}

// 汇总所有路径（可用于站点地图）
function getAllPaths() {
  const paths = [];
  contentSections.forEach(section => {
    section.pages.forEach(page => {
      paths.push(siteConfig.baseUrl + page.path);
    });
  });
  return paths;
}

// 示例使用（可直接运行）
console.log("=== 站点内容映射 ===");
console.log("站点名称:", siteConfig.siteName);
console.log("基础URL:", siteConfig.baseUrl);
console.log("区块总数:", contentSections.length);
console.log("所有路径:", getAllPaths());
console.log("关键词搜索 '爱游戏':", searchSections("爱游戏"));
console.log("按标签 'FAQ' 筛选:", filterByTag("FAQ"));
console.log("新闻区块路径:", getPathsBySectionId("news"));