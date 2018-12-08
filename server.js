//引入模块
const express=require("express");
const app=express();
const xtpl=require("xtpl");
//xtpl的设置
app.set("views","./static");
app.set("view engine","html");
app.engine("html",xtpl.renderFile);


//把所有的静态资源都上传到服务器上
app.use('/static',express.static("./static"));

//首页
app.get('/',(req,res)=>{
	res.render("index",{});
})

app.get('/xuqiu_add',(req,res)=>{
	res.render("xuqiu_add",{});
})
app.get('/demand_add',(req,res)=>{
	res.render("demand_add",{});
})
app.get('/login',(req,res)=>{
	res.render("login",{});
})
app.get('/register',(req,res)=>{
	res.render("register",{});
})
app.get('/Recruit',(req,res)=>{
	res.render("Recruit",{});
})
//路由插件
app.use('/user',require('./user').router);
app.use('/recruit',require('./recruit').router);
//监听的端口号
app.listen(8888);
