/*
 * @Author: your name
 * @Date: 2020-09-15 14:26:47
 * @LastEditTime: 2020-10-19 20:50:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \insurance-h5\vue.config.js
 */
const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [resolve('./src/styles/variables.less')]
    });
}
module.exports = {
  publicPath: './',
  devServer: {
    disableHostCheck: true,
    port: 1024
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 直接覆盖变量
          green: '#3296FA'
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.symlinks(true);
    config.optimization.minimizer('terser').tap((...args) => {
      const terser = args[0][0];
      terser.terserOptions.keep_fnames = true;
      terser.terserOptions.compress.keep_fnames = true;
      return [terser];
    });
    config.resolve.alias.set('@', resolve('src'));
    config.resolve.alias.set('adapt', resolve('src/adapt'));
    config.resolve.extensions.add('.vue');

    const types = ['vue-modules', 'vue', 'normal-modules', 'normal', '@zyf2e/capui-mobile'];
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));
  }
};
