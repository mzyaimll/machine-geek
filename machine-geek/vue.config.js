const path = require('path')
// const webpack = require('webpack')
// const createThemeColorReplacerPlugin = require('./config/plugin.config')

function resolve (dir) {
    return path.join(__dirname, dir)
}

// function isProd () {
//     return process.env.NODE_ENV === 'production'
// }

const vueConfig = {
    outputDir: "dist", // 输出文件目录
    lintOnSave: false, // eslint 是否在保存时检查
    assetsDir: 'static', // 配置js、css静态资源二级目录的位置  
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('static', resolve('./src/static'))
            .set('components', resolve('./src/components'))

    },

    lintOnSave: true,
    devServer: {
        port: 8088,
        proxy: {
            '/api': {
                target: 'http://nat.machine-geek.cn/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
}

// if (isProd()) {
//     vueConfig.configureWebpack = {
//         plugins: [
//             new webpack.optimize.LimitChunkCountPlugin({
//                 maxChunks: 5,
//                 minChunkSize: 100
//             })
//         ],
//         performance: {
//             hints: 'warning',
//             //入口起点的最大体积
//             maxEntrypointSize: 50000000,
//             //生成文件的最大体积
//             maxAssetSize: 30000000,
//             //只给出 js 文件的性能提示
//             assetFilter: function (assetFilename) {
//                 return assetFilename.endsWith('.js');
//             }
//         },
//     }
// } else {
//     vueConfig.configureWebpack = {
//         plugins: [
//             // Ignore all locale files of moment.js
//             new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
//         ]
//     }
// }

module.exports = vueConfig