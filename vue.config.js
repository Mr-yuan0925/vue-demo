const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          // 兼容 less3 到 less4 的语法变动问题 https://github.com/vueComponent/ant-design-vue/issues/3665
          math: 'always'
        }
      }
    }
  },
})
