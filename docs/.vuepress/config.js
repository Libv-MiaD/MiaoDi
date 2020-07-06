module.exports = {
  base: '/guide/',
  title: '喵滴',
  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap'
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Noto+Sans+SC:400,500,700&display=swap'
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,500,700&display=swap'
    }],
    ],
  locales: {
    '/': {
      lang: 'zh-Hans',
      description: '记录点滴生活'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: '语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        sidebar: {
          '/guide/': getSidebar()
        },
        nav: getNavbar('/', '指南', '更新日志', '下载'),
        lastUpdated: '最后更新'
      }
    },
    displayAllHeaders: true,
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: true
    },
    repo: 'https://github.com/Libv-MiaD/Libv-MiaD.github.io',
    docsRepo: 'https://github.com/Libv-MiaD/Libv-MiaD.github.io',
    docsDir: 'docs',
    editLinks: true
  },
}

function getSidebar() {
  return ['', 'about', 'main',]
}

function getNavbar(prefix, guide, changelog, download) {
  return [
    { text: guide, link: `${prefix}guide/` },
    { text: changelog, link: `${prefix}changelog.html` },
    { text: download, link: `${prefix}download.md` },
  ]
}