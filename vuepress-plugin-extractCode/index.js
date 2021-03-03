const {path} = require('@vuepress/shared-utils')
const extractCodeFromVueSFC = require('./bin/extractCodeFromVueSFC.js')

module.exports = (options, context) => ({
  name: '@idear-vuepress/vuepress-plugin-extractCode',
  chainMarkdown(config) {
    config.plugin('extractCode')
      .use(extractCodeFromVueSFC)
  },
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})
