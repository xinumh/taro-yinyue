export default {
  pages: [
    'pages/index/index',
    'pages/about/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#7868e6',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom',
  },
  tabBar: {
    list: [
      {
        text: '首页',
        pagePath: 'pages/index/index',
        iconPath: 'assets/tabbar/basics.png',
        selectedIconPath: 'assets/tabbar/basics_cur.png',
      },
      {
        text: '关于',
        pagePath: 'pages/about/index',
        iconPath: 'assets/tabbar/about.png',
        selectedIconPath: 'assets/tabbar/about_cur.png',
      }
    ]
  }
}
// b8b5ff
// 7868e6
// e4fbff