module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: '@zyf2e/capui-mobile',
        libraryDirectory: 'es',
        style: name => `${name}/style/less`
      },
      '@zyf2e/capui-mobile'
    ]
  ]
};
