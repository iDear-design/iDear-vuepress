const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  name: '@iu-design/vuepress-plugin-screenfull',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})
