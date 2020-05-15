"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),express=require("express"),log=express.Router(),us=require("../model/user"),bodyParser=require("body-parser"),path=require("path"),bcrypt=require("bcrypt"),saltRounds=10;log.use(bodyParser.urlencoded({extended:!1})),log.use(bodyParser.json());var root=path.resolve(__dirname,"..");log.get("/login",function(e,r){r.sendFile(path.join(root,"views","log","login.html"))}),log.post("/login",function(){var t=(0,_asyncToGenerator2.default)(_regenerator.default.mark(function e(r,t){var o,n,s,a,i;return _regenerator.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.body,n=o.email,s=o.password,e.next=3,us.findOne({email:n});case 3:if(a=e.sent)return i=Boolean,e.next=8,bcrypt.compare(s,a.password).then(function(e){i=e}).catch(function(e){i=!1,console.log("密码比对错误----"+e)});e.next=11;break;case 8:i&&a.state?(r.session.userid=a._id,r.session.name=a.username,r.session.image=a.image,r.session.role=a.role,t.send({state:1,msg:"登陆成功"})):i?t.send({state:2,msg:"账户已禁用"}):t.send({state:3,msg:"密码错误"}),e.next=12;break;case 11:t.send({state:4,msg:"该邮箱尚未注册"});case 12:case"end":return e.stop()}},e)}));return function(e,r){return t.apply(this,arguments)}}()),log.get("/logout",function(e,r){e.session.destroy(function(){r.clearCookie("connect.sid"),r.redirect(301,"/log/login")})}),module.exports=log;