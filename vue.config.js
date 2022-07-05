const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/styles.scss"`,
      },
      scss: {
        additionalData: `@import "~@/assets/styles.scss";`,
      },
    },
  },
 });
