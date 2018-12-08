const express=require("express");
const bodyParser=require("body-parser");
let model=require("./db");
let userinfo=model.getModel('userinfo');
let router=express.Router();



//显示所有用户
router.get('/show',(req,res)=>{
	userinfo.find((err,data)=>{
		if(err){
			console.log(err);
			res.json({code:0})
			return;
		}
		res.json(data);
	})
})
//删除所有用户
router.get('/remove',(req,res)=>{
    userinfo.remove({},()=>{
    	res.json({code:0,msg:"删除成功"})
    })
})

router.post('/register',bodyParser(),(req,res)=>{
	console.log(req.body);
	let {username,password}=req.body;
	//从前端拿过来的数据是空的
	if(username==""&&password==""){
		res.json({code:0,msg:"注册失败"});
	}else{
		userinfo.find({username},(err,data)=>{
		
			if(data.length){
				//已有注册账号
				res.json({code:0,msg:"该用户已被注册"});
			}else{
				userinfo.create({username:username,password:password},(err,data)=>{
					if(err){
						console.log(err);
						return;
					}
					console.log(data)
				});
				res.json({code:1})
					
			}
		})
	}
	

})
router.post('/login',bodyParser(),(req,res)=>{
	let {username,password}=req.body;
	userinfo.find({username:username,password:password},(err,data)=>{
		if(err){
			console.log(err);
			return;
		}
		if(!data.length){
			res.json({code:0,msg:"用户名或密码失败"});
			return;
		}
		res.json({code:1});
	})
})


//导出模块
module.exports={
	router
}
