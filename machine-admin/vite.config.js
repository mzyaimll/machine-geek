
export default {
  cssPreprocessOptions: {
    sass: {
      data: `@import "./src/style/global.scss";`
    }
  },
  proxy: {
    '/api': {
      target: 'http://nat.machine-geek.cn/',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  },
}