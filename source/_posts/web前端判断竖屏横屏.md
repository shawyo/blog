---
title: web前端判断竖屏横屏
date: 2017-04-27 17:10:41
tags: html5+css3
categories: 笔记
keywords: Html5判断竖屏横屏,js判断竖屏横屏,前端判断竖屏横屏,竖屏横屏判断
banner: /gallery/math.jpg
---
web前端在移动手持设备中判断横竖屏的几种方式
<!-- more -->

---
* 如果设备横竖屏切换被系统锁掉的话，你怎么搞都是切换不了的
* 如果页面`viewport`是经过缩放的可能会导致 CSS3 @media 判断失效 
  
  
  

### CSS3 `@media`媒体查询判断
```css
@media screen and (orientation:portrait){
    /* 竖屏 css */
}

@media screen and (orientation:landscape){
    /* 横屏 css */
}
```
`PS:`使用CSS3 @media方式做判断需要注意`viewport`必须是未经适配缩放的如下`↓↓↓`
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

```

### HTML `link`标签分别引用
```html
<!-- 竖屏 -->
<link rel="stylesheet" media="all and (orientation:portrait)" href="portrait.css">

<!-- 横屏 -->
<link rel="stylesheet" media="all and (orientation:landscape)" href="landscape.css">
```

### Javascript `onorientationchange`事件判断
```javascript
//判断手机横竖屏状态：
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        if (window.orientation === 180 || window.orientation === 0) { 
            //竖屏
        } 
        if (window.orientation === 90 || window.orientation === -90 ){ 
            //横屏
        }  
    }, false); 
```
`PS:`如果还是解决不了问题，可以尝试一下 [orientationchange-fix](https://github.com/zhansingsong/orientationchange-fix)，是针对`orientationchange`事件不兼容进行的修复
