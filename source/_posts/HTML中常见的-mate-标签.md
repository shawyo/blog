---
title: HTML中常见的<mate>标签
date: 2017-03-09 11:53:48
tags: html5+css3
categories: 笔记
keywords: mate标签,常见的mate,html mate,
banner: http://image.nicebp.com/blog/banner/TB1xJN9QXXXXXbXXpXXXXXXXXXX-900-500.jpg?imageView2/1/w/690/h/295/q/75
---
HTML中常见不常见的 `<mate>`标签
<!-- more -->

在编写代码的时候经常会有个别一时想不起来，索性记录一下
---

网页编码 
```html
<meta charset="UTF-8">
```
网页自适应
```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```
以最新内核加载
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<meta name="renderer" content="webkit">
```
禁止识别邮箱电话号码
```html
<meta content="telephone=no" name="format-detection" />
<meta content="email=no" name="format-detection" />
```
禁止浏览器读取缓存
```html
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache, must-revalidate">
<meta http-equiv="expires" content="0">
```
关键词
```html
<meta name="keywords" content="KEYWORD1,KEYWORD2,KEYWORD3">
```
网页描述
```html
<meta name="description" itemprop="description" content="DESCRIPTION">
```
作者信息
```html
<meta name="author"content="Shaw,519208248@qq.com">
```
避免IE使用兼容模式
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```
启用360浏览器的极速模式(webkit)
```html
<meta name="renderer" content="webkit">
```
网页小图标
```html
<link rel="icon" type="image/ico" href="favico.ico">
```
Ios设备
```html
<!-- 添加到主屏后的标题（iOS 6 新增） -->
<meta name="apple-mobile-web-app-title" content="标题"> 
<!-- 是否启用 WebApp 全屏模式 -->
<meta name="apple-mobile-web-app-capable" content="yes" /> 
<!-- 设置状态栏的背景颜色，只有在 "apple-mobile-web-app-capable" content="yes" 时生效 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> 
<!-- iPhone 和 iTouch，默认 57x57 像素，必须有 -->
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png" /> 
<!-- iPad，72x72 像素，可以没有，但推荐有 -->
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/apple-touch-icon-72x72-precomposed.png" /> 
<!-- Retina iPhone 和 Retina iTouch，114x114 像素，可以没有，但推荐有 -->
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114-precomposed.png" /> 
<!-- Retina iPad，144x144 像素，可以没有，但推荐有 -->
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144x144-precomposed.png" /> 
```
> content 参数：
> * default 默认值
> * black 状态栏背景是黑色
> * black-translucent 状态栏背景是黑色半透明

Android 主题颜色
```html
<meta name="theme-color" content="#db5945">
```