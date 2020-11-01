
export default {
  proxy: {
    // string shorthand
    // '/foo': 'http://localhost:4567/foo',
    // with options
    '/api': {
      target: 'http://nat.machine-geek.cn/',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  },
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@$', resolve('src'))
  //     .set('static', resolve('./src/static'))
  //     .set('components', resolve('./src/components'))

  // },
}