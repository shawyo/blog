---
title: ESLint&VSCode自动化配置
date: 2018-02-22 11:47:23
categories: '笔记'
keywords: eslint,vscode eslint,eslint自动校验
banner: http://image.nicebp.com/blog/banner/TB1xJN9QXXXXXbXXpXXXXXXXXXX-900-500.jpg?imageView2/1/w/690/h/295/q/75
---

eslint 配合 vscode 一劳永逸的处理办法

<!-- more -->

### VS Code 插件

```js
  ESLint
  Vetur
  Prettier - Code formatter
```

### VS Code Settings 相关设置

```js
{
    //制表符符号eslint
    "editor.tabSize": 2,
    // 每次保存的时候自动格式化
    "editor.formatOnSave": true,
    // 每次保存的时候将代码按eslint格式进行修复
    "eslint.autoFixOnSave": true,
    // 添加 vue 支持
    "eslint.validate": [
        "javascript",
        {
            "language": "vue",
            "autoFix": true
        },
        "html",
        "vue"
    ],
    //eslint 选项
    "eslint.options": {
        "extensions": [".js", ".vue"]
    },
    //让prettier使用eslint的代码格式进行校验
    "prettier.eslintIntegration": true,
    //去掉代码结尾的分号
    "prettier.semi": false,
    //使用带引号替代双引号
    "prettier.singleQuote": true,
    //让函数(名)和后面的括号之间加个空格
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    //格式化.vue中html
    "vetur.format.defaultFormatter.html": "js-beautify-html",
}
```

### 项目 package.json 中安装 eslint 相关依赖

```js
"eslint": "^4.19.1",
"eslint-friendly-formatter": "^4.0.1",
"eslint-loader": "^2.0.0",
"eslint-plugin-html": "^4.0.3",
```

### npm 安装方法

```js
npm install eslint -g
or
npm install eslint --dev
```
