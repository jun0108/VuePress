import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
import { defaultTheme } from '@vuepress/theme-default'

export default {
  title: 'Vuepress 테스트용 페이지입니다.',
  plugins: [
    // 하단 url 참고해서 작업함
    // https://streamls.tistory.com/entry/Vuepress2%EC%97%90%EC%84%9C-vue-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EC%96%B4%EC%84%9C-%EB%93%B1%EB%A1%9D%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'), // 컴포넌트 폴더를 등록하는 방법
      components: {
        Button: path.resolve(__dirname, './components/Button.vue'), // 개별 컴포넌트를 등록하는 방법
      },
    }),
  ],
  theme: defaultTheme({
    sidebar: [
      {
        text: 'page',
        children: ['/page/test1.md', '/page/test2.md'],
        // children: [{ text: 'test',  }],
      },
      {
        text: 'Group',
        children: [
          {
            text: 'SubGroup',
            children: ['/group/foo.md', '/group/bar.md'],
          },
        ],
      },
    ],
    navbar: [
      // nested group - max depth is 2
      {
        text: 'Group',
        children: [
          {
            // text: 'SubGroup',
            children: ['/group/foo.md', '/group/bar.md'],
          },
        ],
      },
      // control when should the item be active
      {
        text: 'Group 2',
        children: [
          {
            text: 'Always active',
            link: '/',
            // this item will always be active
            activeMatch: '/',
          },
          {
            text: 'Active on /foo/',
            link: '/not-foo/',
            // this item will be active when current route path starts with /foo/
            // regular expression is supported
            activeMatch: '^/foo/',
          },
        ],
      },
    ],
  }),
}
