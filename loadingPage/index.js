const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  name: '@idear-vuepress/loading-page',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})
