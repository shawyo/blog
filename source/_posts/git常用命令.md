---
title: git常用命令
date: 2017-12-08 18:34:14
categories:
- 笔记
tags: 
- git
banner: /gallery/math.jpg
---
git 常用命令
<!-- more -->
### git仓库初始化
```js
$ git init
```
### 克隆项目
```js
$ git clone [URL]
```
### 查看状态
```js
$ git status
```
### 添加文件
```js
$ git add .
```
### 本地提交
```js
$ git commit -m "描述"
```
### 添加远程地址
```js
$ git remote add origin [URL]
```
### 提交到远程仓库
```js
$ git push -u origin master
```
### 查看远程分支
```js
$  git branch -a 
```
### 查看本地分支
```js
$  git branch 
```
### 创建分支
```js
$ git branch [name]
```
### 切换到分支
```js
$ git checkout [branch name]
```