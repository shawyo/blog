---
title: Chrome 跨域设置
date: 2017-10-09 17:35:35
tags:
categories: "笔记"
keywords: 跨域,Chrome跨域设置
banner: https://s1.ax2x.com/2018/01/30/ZjPfJ.jpg
---
利用 `--disable-web-security` 参数，这个参数可以降低Chrome的安全性，禁止同源策略，方便本地开发调试
<!-- more -->

---
##### 1.在 `C:\` 中新建 `MyChromeDevUserData` 文件用来储存个人信息，不在使用默认目录

##### 2.新建一个Chrome快捷方式，在其属性目标位置`...\chrome.exe"`后添加 ` --disable-web-security --user-data-dir=C:\MyChromeDevUserData` 注意`--`之前必须要有一个空格
![新建一个Chrome快捷方式](https://s1.ax2x.com/2018/01/30/ZV3LJ.png)

##### 3.关闭属性面板,打开chrome浏览器，会看到 `--disable-web-security` 安全性提示，说明Chrome可以跨域工作了
![打开新建的chrome快捷方式](https://s1.ax2x.com/2018/01/30/ZV5RB.png)