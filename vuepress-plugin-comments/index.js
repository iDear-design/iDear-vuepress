const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  define () {
    return {
      COMMENTS_OPTIONS: options || null
    }
  },
  name: '@idear-vuepress/vuepress-plugin-comments',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})
