# 侧边工具栏开发实践


## koala 编译scss不支持中文解决方案

```
cd /Applications/Koala.app/Contents/Resources/app.nw/rubygems/gems/sass-3.4.9/lib/sass
vim engine.rb
```

在require 最下面 加入以下代码 即可解决:

`Encoding.default_external = Encoding.find('utf-8')`

## RequireJs

1、有效地防止命名冲突
2、声明不同js文件之间的依赖
3、让代码以模块化的方式组织

常用方法：

1、`requirejs.config`  指定别名
2、`requirejs` 
3、`define` 编写模块
