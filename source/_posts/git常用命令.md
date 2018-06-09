---
title: git常用命令
date: 2017-02-08 18:34:14
categories:
- 笔记
tags: 
- git
banner: /gallery/math.jpg
keywords: git,github,git常用,git命令,hexo
---
git 常用命令
<!-- more -->
### 查看本机 `SHH key`
```
cat ~/.ssh/id_rsa.pub 
```
### 创建 `SSH key`
```js
$ ssh-keygen -t rsa -C "youremail@example.com"
```
### 配置全局 `name` 和 `email`
```js
$ git config --global user.name "yourname" 
$ git config --global user.email "yourname@example.com" 
```
### `git`仓库初始化
```js
$ git init
```
### 克隆项目
```js
$ git clone URL
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
### 查看远程仓库地址
```js
$ git remote -v
```
### 添加远程地址
```js
$ git remote add origin URL
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
$ git branch branch name
```
### 切换到分支
```js
$ git checkout branch name
```
### 新建本地分支
```js
$ git checkout -b branch
```
### 将新建的分支`push`到远程服务器
```js
$ git push origin branch:branch
```
远程分支与本地分支同名（当然可以随意起名）
### 删除远程分支
```js
# 直接push过去一个空分支到远程，相当于删除远程分支
$ git push origin :branch
# 直接删除
$ git push origin --delete branch
```
### 修改远程仓库地址
1.通过命令直接修改
```
$ git remote set-url origin https://github.com/YOUNAME/ITEMNAME.git
```
2.通过命令先删除后添加
```git
$ git remote -v
$ git remote rm origin 
$ git remote add origin https://github.com/YOUNAME/ITEMNAME.git
```
