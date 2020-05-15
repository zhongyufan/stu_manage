# 信息管理
## 技术栈
- 前端
  - Bootstrap 4.4.1
  - jQuery 3.5.1
  - Vue 2.6.11
- 后端
  - node.js 12.16.3
  - Express 4.17.1
- 数据库
  - MongoDB 4.3.6
- 打包
  - gulp 4.0.2

## 实现功能
支持自适应PC端、移动端  
支持对学生信息的添加、修改、删除操作  
支持识别客户端用户  
支持用户登陆，添加、修改  
支持用户状态管理  
支持用户权限管理  

## 运行
数据库默认使用test集合  
首次运行需要在根目录安装包 `npm install`  
在config.js中修改数据库连接集合

## 文件目录
```
.
├── app.js
├── config.js
├── model
│   ├── connect.js
│   ├── student.js
│   └── user.js
├── package-lock.json
├── package.json
├── public
│   ├── css
│   │   ├── bootstrap.css
│   │   ├── list.css
│   │   ├── login.css
│   │   └── main.css
│   └── js
│       ├── axios.js
│       ├── bootstrap.js
│       ├── jquery.js
│       ├── popper.js
│       └── vue.js
├── route
│   ├── route-log.js
│   ├── route-stu.js
│   └── route-user.js
└── views
    ├── log
    │   └── login.html
    ├── student
    │   ├── add.html
    │   ├── list.html
    │   └── updata.html
    └── user
        ├── add.html
        └── list.html
```
## 版本比较
### 学生信息收集表 v2.0.0
>Bootstrap + jQuery + Node + Express + Mongodb + gulp
- 服务端使用Express框架
- 实现用户管理模块
### 学生信息收集表 v1.0.0
>Bootstrap + jQuery + Node + Mongodb + gulp
- 支持学生信息添加删除修改
- 支持PC端、移动端
