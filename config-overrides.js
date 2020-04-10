const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
    fixBabelImports('import', { // 根据import进行打包（使用babel-plugin-import)
        libraryName: 'antd', // 针对antd实现按需打包
        libraryDirectory: 'es',
        style: true //自动打包关联的样式
    }),
    // 定制主题
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#1DA57A' // 修改全局主色
        }
    })
)