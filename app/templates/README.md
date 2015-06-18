# Amaze UI <%= pluginName %>
---

[![NPM version](https://img.shields.io/npm/v/amazeui-<%= pluginName %>.svg?style=flat-square)](https://www.npmjs.com/package/amazeui-<%= pluginName %>)
[![Dependency Status](https://img.shields.io/david/amazeui/<%= pluginName %>.svg?style=flat-square)](https://david-dm.org/amazeui/<%= pluginName %>)
[![devDependency Status](https://img.shields.io/david/dev/amazeui/<%= pluginName %>.svg?style=flat-square)](https://david-dm.org/amazeui/<%= pluginName %>#info=devDependencies)

Amaze UI <%= pluginName %> 插件。

- [使用示例](http://amazeui.github.io/<%= pluginName %>/docs/demo.html)
- [API 文档](http://amazeui.github.io/<%= pluginName %>/docs/api.html)

**使用说明：**

1. 获取 Amaze UI <%= pluginName %>

  - [直接下载](https://github.com/amazeui/<%= pluginName %>/archive/master.zip)
  - 使用 NPM: `npm install amazeui-<%= pluginName %>`

2. 在 Amaze UI 样式之后引入 <%= pluginName %> 样式（`dist` 目录下的 CSS）：

  Amaze UI <%= pluginName %> 依赖 Amaze UI 样式。

  ```html
  <link rel="stylesheet" href="path/to/amazeui.min.css"/>
  <link rel="stylesheet" href="path/to/amazeui.<%= pluginName %>.min.css"/>
  ```

3. 引入 <%= pluginName %> 插件（`dist` 目录下的 JS）：

  ```html
  <script src="path/to/jquery.min.js"></script>
  <script src="path/to/amazeui.<%= pluginName %>.min.js"></script>
  ```

4. 初始化 <%= pluginName %>:

  ```js
  $(function() {
      $('#my-<%= pluginName %>').<%= pluginName %>();
  });
  ```
