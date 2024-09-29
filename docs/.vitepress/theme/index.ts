import Theme from 'vitepress/dist/client/theme-default/index.js';
import HelloWorld from '../../../src/components/HelloWorld.vue';
import Test from '../../../src/components/Test';


export default {
  ...Theme,
  /**
   * 增强应用程序的功能
   * @param {Object} app - 应用程序实例
   * @param {Object} router - 路由实例
   * @param {Object} siteData - 站点数据
   */
  enhanceApp({ app, router, siteData }) {
    app.component('HelloWorld', HelloWorld)
    app.component('Test', Test)

  }
};
