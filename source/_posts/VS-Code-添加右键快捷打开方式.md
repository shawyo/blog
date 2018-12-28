---
title: VS Code 添加右键快捷打开方式
date: 2017-09-29 14:35:35
tags:
categories: "笔记"
keywords: vs code快捷键,Visual Studio Code,sublime Text3,Sublime添加到右键菜单,将程序添加到右键菜单
banner: http://image.nicebp.com/blog/banner/vscode.jpg
---
Windows软件编辑器及阅读软件，安装后没有出现在右键快捷菜单中使用极为不便，以Visual Studio Code为例添加右键快捷打开方式，快速打开文件及文件夹
<!-- more -->


---
## 快速打开文件
##### 1. `Win+R` 输入 `regedit` 打开运行注册表
![打开注册表](https://s1.ax2x.com/2018/01/29/JAUmQ.png)
##### 2. 打开注册表找到 `HKEY_CLASSES_ROOT\*\shell` 分支右键新建`项` Open with VSCode (名字随意)
![新建 Open with VSCode](https://s1.ax2x.com/2018/01/29/JAcnK.png)
##### 3. 在右侧窗口的“默认”键值栏内输入`open with VS Code`，这是单击鼠标右键时VisualCode启动程序的显示值。项的名称和键值可以任意，以含义明确为好。其中键值将显示在右键菜单中。新建字符串值`Icon`值 为软件的安装路径如下图： 
![设置值](https://s1.ax2x.com/2018/01/29/JALiE.png)
##### 4. 在 `Open with VSCode` 文件下新建 `Command` 项，在右侧窗口的“默认”键值栏内输入程序所在的路径 如：`D:\sort\Microsoft VS Code\Code.exe %1` 其中的%1表示要打开的文件参数。
![新建 Command 设置值](https://s1.ax2x.com/2018/01/29/JAaK3.png)
##### 5. 关闭注册表即刻生效

---
## 快速打开文件夹

##### 1. 打开注册表找到 `HKEY_CLASSES_ROOT\Directory\shell` 新建`项` Open with VSCode 在其下新建字符串值 `Icon` 值为软件安装路径如图：
![新建 Open with VSCode，新建 Icon](https://s1.ax2x.com/2018/01/29/JAPbp.png)
##### 2. 在 `Open with VSCode` 文件下新建 `Command` 项 设置值为软件安装路径 如：`D:\sort\Microsoft VS Code\Code.exe %1`
![新建 Command 设置值](https://s1.ax2x.com/2018/01/29/JACWG.png)
##### 3.关闭注册表即刻生效
![右键生效](https://s1.ax2x.com/2018/01/29/JAPbp.png)


