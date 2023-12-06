const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    resolve: {
      alias: {
        'govuk': path.resolve(__dirname, 'public/govuk/'),
        'services': path.resolve(__dirname, 'src/services/'),
        'components': path.resolve(__dirname, 'src/components/'),
        'public': path.resolve(__dirname, 'public/'),
      }
    }
  }
});
