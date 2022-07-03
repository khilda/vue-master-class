const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  outputDir: 'docs',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/helpers/variables.scss";
          @import "@/assets/scss/helpers/mixin.scss";
          @import "@/assets/scss/helpers/func.scss";
        `
      }
    }
  }
})
