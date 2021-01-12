/*
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-07 20:29:41
 * @LastEditTime: 2021-01-12 16:41:13
 * @Email: GeekMzy@out-look.com
 * @FilePath: /machine-geek/vite.config.ts
 * @Environment: big sur Js
 * @Description: 
 */
// const fs = require("fs")
// const path = require("path")

// // Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
// const dotenv = require("dotenv")

// const envFiles = [
//   /** default file */ `.env`,
//   /** mode file */ `.env.${process.env.NODE_ENV}`
// ]

// for (const file of envFiles) {
//   const envConfig = dotenv.parse(fs.readFileSync(file))
//   for (const k in envConfig) {
//     process.env[k] = envConfig[k]
//   }
// }

// module.exports = {
//   alias: {
//     '/@/': path.resolve(__dirname, './src')
//   },
//   hostname: process.env.VITE_HOST,
//   port: process.env.VITE_PORT,
//   // 引用全局 scss
//   cssPreprocessOptions: {
//     scss: {
//       // additionalData: '@import "./src/assets/style/index.scss";'
//     }
//   },
//   // 压缩
//   minify: 'esbuild',
//   // 是否自动在浏览器打开
//   open: false,
//   // 是否开启 https
//   https: false,
//   // 服务端渲染
//   ssr: false,
//   /**
//    * Base public path when served in production.
//    * @default '/'
//    */
//   base: process.env.VITE_BASE_URL,
//   /**
//    * Directory relative from `root` where build output will be placed. If the
//    * directory exists, it will be removed before the build.
//    * @default 'dist'
//    */
//   outDir: process.env.VITE_OUTPUT_DIR,
//   // 反向代理
//   proxy: {
//     api: {
//       target: "http://4pikm7.natappfree.cc/",
//       changeOrigin: true,
//       rewrite: path => path.replace(/^\/api/, "")
//     }
//   }
// }

import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

module.exports = {
  alias: {
    "/@/": pathResolve("src"),
  },
  optimizeDeps: {
    include: ["@ant-design/icons-vue"],
  },
  // otherwise, may assets 404 or visit with index.html
  base: "",
  assetsDir: "",
  proxy: {
    '/api': {
      target: 'http://nat.machine-geek.cn',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
};