## 插件是什么

VuePress 自 `1.0` 版本开始对插件进行了支持，这使得我们不仅可以应用一个喜欢的主题，而且可以自己去选择一些插件来丰富你的博客或者文档内容，搭建一个属于你自己的静态网站。

主题也开始进行插件化，将能够独立的功能或组件封装成插件，精简核心代码，方便维护和扩展。

## 插件的来源有哪些

### vuepress-plugin-idear 组织下的插件

我们开发了一些能够帮助你丰富网站内容的小插件，你可以根据自己的喜好去启用它们。

::: tip

我们的插件均发布在 `npm` 的组织 `vuepress-idear` 下，所以以下插件默认全称为 `@idear-vuepress/vuepress-plugin-<name>` （比如 `backToTop`
的完整名称为 `@idear-vuepress/vuepress-plugin-backToTop`） ，下面将简写组织内插件名称。

:::

<table>
  <tr>
    <th style="width:100px">名称</th>
    <th style="width:60px">版本</th>
    <th style="width:20px">是否内置</th>
    <th style="width:20px">是否主题独占</th>
    <th style="width:100px">描述</th>
  </tr>
  <tr>
    <td>
      <a>notification</a>
    </td>
    <td>
      <NpmLink pkg="@idear-vuepress/vuepress-plugin-notification"/>
    </td>
    <td>✔</td>
    <td>✖</td>
    <td>提示插件</td>
  </tr>
  <tr>
    <td>
      <a>backToTop</a>
    </td>
    <td>
      <NpmLink pkg="@idear-vuepress/vuepress-plugin-backToTop"/>
    </td>
    <td>✔</td>
    <td>✖</td>
    <td>返回顶部插件</td>
  </tr>
  <tr>
    <td>
      <a>pagation</a>
    </td>
    <td>
      <NpmLink pkg="@idear-vuepress/vuepress-plugin-pagation"/>
    </td>
    <td>✔</td>
    <td>✖</td>
    <td>分页插件，帮助你快速跳转到任意页面</td>
  </tr>
  <tr>
    <td>
      <a>loadingPage</a>
    </td>
    <td>
      <NpmLink pkg="@idear-vuepress/vuepress-plugin-loadingPage"/>
    </td>
    <td>✔</td>
    <td>✖</td>
    <td>页面加载时过渡动画插件</td>
  </tr>
  <tr>
    <td>
      <a>comments</a>
    </td>
    <td>
      <NpmLink pkg="@idear-vuepress/vuepress-plugin-comments"/>
    </td>
    <td>✔</td>
    <td>✖</td>
    <td>评论插件，集成了 Valine 与 Vssue 两种评论系统</td>
  </tr>
  <tr>
    <td>
      <a>rssProduce</a>
    </td>
    <td>
      <NpmLink pkg="@idear-vuepress/vuepress-plugin-rssProduce"/>
    </td>
    <td>✖</td>
    <td>✔</td>
    <td>RSS 生成插件</td>
  </tr>
  <tr>
      <td>
        <a>bgmPlayer</a>
      </td>
      <td>
        <NpmLink pkg="@idear-vuepress/vuepress-plugin-bgmPlayer"/>
      </td>
      <td>✖</td>
      <td>✖</td>
      <td>背景音乐播放器</td>
  </tr>
  <tr>
    <td>
      <a>extractCode</a>
    </td>
    <td>
      <NpmLink pkg="@idear-vuepress/vuepress-plugin-extractCode"/>
    </td>
    <td>✖</td>
    <td>✖</td>
    <td>代码展示插件，可以方便地帮你展示多种代码组合</td>
  </tr>
  <tr>
    <td>
    <a>visibleRecord</a>
    </td>
    <td>
    <NpmLink pkg="@idear-vuepress/vuepress-plugin-visibleRecord"/>
    </td>
    <td>✖</td>
    <td>✖</td>
    <td>看板娘插件，为你的网站添加一个萌萌哒看板娘~</td>
  </tr>
  <tr>
    <td>
    <a>screenfull</a>
    </td>
    <td>
    <NpmLink pkg="@idear-vuepress/vuepress-plugin-screenfull"/>
    </td>
    <td>✖</td>
    <td>✖</td>
    <td>全屏按钮插件</td>
  </tr>
</table>

::: warning 注意

- 只有**内置插件**是在安装主题时安装并配置好的，非内置插件（比如 visibleRecord 插件）需要你自行安装并配置。
- 为了使得主题更加定制化，我们开发了一些本**主题独占**的插件（比如 rss 插件），由于和主题之间存在强耦合，所以这些插件**在其他主题可能不会正常工作**。

### npm 中的 VuePress 插件生态

如果你想额外添加一些自己喜欢的插件，你可以[在 npm 中搜索 `vuepress-plugin`](https://www.npmjs.com/search?q=vuepress-plugin) 前缀来查看当前 VuePress
社区中已经开发的插件，之后使用 npm 或者 yarn [下载](#插件的下载)并在 `.vuepress/config.js` 中[配置](#简单使用插件)以启用它们。

## 插件怎么用

> [关于插件的使用的详细文档](https://vuepress.vuejs.org/zh/plugin/using-a-plugin.html)

### 插件的下载

如果你有一个已经发布在 `npm` 的喜欢的插件，你可以使用以下命令来下载并安装它

```bash
yarn add <pagkageName> -D
# or
npm i <packageName> -D
```

::: warning 注意

这里的包名需要全称，并不能省略 `vuepress-plugin-`

:::

### 简单使用插件

在下载插件后，你可以通过在 `.vuepress/config.js` 中做一些配置来使用插件

```javascript
module.exports = {
  plugins: ["vuepress-plugin-xxx"]
};
```

你甚至可以省略掉 `vuepress-plugin-`

```javascript
module.exports = {
  plugins: ["xxx"]
};
```

### 为插件配置选项

如果你选择的插件支持 Options ，那么你可以通过以下两种方式添加

#### 1. Babel 式

```javascript
module.exports = {
  plugins: [
    [
      "vuepress-plugin-xxx",
      {
        /* options */
      }
    ]
  ]
};
```

#### 2. 对象式

```javascript
module.exports = {
  plugins: {
    xxx: {
      /* options */
    }
  }
};
```

::: tip

你可以通过这种方式来对主题内置插件的配置进行覆盖，甚至禁用一个内置插件

只需将 Options 设置成 `false` 便可禁用该插件

就像这样

```javascript
module.exports = {
  plugins: [
    ["@idear-vuepress/vuepress-plugin-backToTop", false] // disabled.
  ]
};
```

:::
