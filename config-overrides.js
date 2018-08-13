// 注意：config-overrides.js 文件的作用，就是 配合 react-app-rewired 包，来实现自定义 webpack 配置项的
const { injectBabelPlugin } = require('react-app-rewired');
const path = require('path')

// 注意：这个 通过 module.exports 向外暴露的方法，作用就是 进行自定义 webpack 配置的
// 方法形参中的 config， 就是默认的 webpack 配置对象
module.exports = function override(config, env) {
  // 这一行代码，是用来配置 antd-mobile 按需导入的
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  // do stuff with the webpack config...
  // 新建自己的 alias 节点，新增 @ 别名，指向 项目根目录中 src
  config.resolve.alias['@'] = path.join(__dirname, './src')
  // console.log(config.resolve.alias)
  return config;
};