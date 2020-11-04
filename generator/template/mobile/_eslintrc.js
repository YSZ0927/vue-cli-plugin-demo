/*
 * @Author: your name
 * @Date: 2020-09-01 10:00:42
 * @LastEditTime: 2020-09-07 18:21:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \insurance-h5\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/prettier'],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'node_modules/@vue/cli-service/webpack.config.js'
      }
    }
  }
};
