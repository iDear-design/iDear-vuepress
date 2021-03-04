const {path} = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  name: '@idear-vuepress/vuepress-plugin-screenfull',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})
