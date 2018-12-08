const express=require("express");
const bodyParser=require("body-parser");
let model=require("./db");
let recruit=model.getModel('recruit');
let recFirRole=model.getModel('recFirRole');
let recsecrole=model.getModel('recsecrole');
let router=express.Router();





//recFirRole.create({id:"1",firstrole:"移动开发"},
//{id:"2",firstrole:"后端开发"},
//{id:"3",firstrole:"前端开发"},
//{id:"4",firstrole:"运维人员"},
//{id:"5",firstrole:"DBA"},
//{id:"6",firstrole:"视觉设计"},
//{id:"7",firstrole:"交互设计"},
//{id:"8",firstrole:"产品经理"},
//{id:"9",firstrole:"运营人员"},
//{id:"10",firstrole:"测试人员"},
//{id:"11",firstrole:"其他"},
//	
//	(err,data)=>{
//     console.log(data);
// });

//recsecrole.create({firid:"3",secid:"1",secrole:"Web前端"},
//	{firid:"3",secid:"2",secrole:"Flash"},
//	{firid:"3",secid:"3",secrole:"html5"},
//	{firid:"3",secid:"4",secrole:"JavaScript"},
//	{firid:"3",secid:"5",secrole:"U3D"},
//	{firid:"3",secid:"6",secrole:"COCOS2D-X"},
//	{firid:"3",secid:"7",secrole:"前端开发其他"},
//	
//	{firid:"4",secid:"1",secrole:"运维工程师"},
//	{firid:"4",secid:"2",secrole:"运维开发工程师"},
//	{firid:"4",secid:"3",secrole:"网络工程师"},
//	{firid:"4",secid:"4",secrole:"系统工程师"},
//	{firid:"4",secid:"5",secrole:"IT支持"},
//	{firid:"4",secid:"6",secrole:"IDC"},
//	{firid:"4",secid:"7",secrole:"CDN"},
//	{firid:"4",secid:"8",secrole:"F5"},
//	{firid:"4",secid:"9",secrole:"系统管理员"},
//	{firid:"4",secid:"10",secrole:"病毒分析"},
//	{firid:"4",secid:"11",secrole:"WEB安全"},
//	{firid:"4",secid:"12",secrole:"网络安全"},
//	{firid:"4",secid:"13",secrole:"系统安全"},
//	{firid:"4",secid:"14",secrole:"运维经理"},
//	{firid:"4",secid:"15",secrole:"运维其他"},
//	
//	{firid:"5",secid:"1",secrole:"MySQL"},
//	{firid:"5",secid:"2",secrole:"SQL"},
//	{firid:"5",secid:"3",secrole:"Server"},
//	{firid:"5",secid:"4",secrole:"Oracle"},
//	{firid:"5",secid:"5",secrole:"DB2"},
//	{firid:"5",secid:"6",secrole:"MongoDB"},
//	{firid:"5",secid:"7",secrole:"ETL"},
//	{firid:"5",secid:"8",secrole:"Hive"},
//	{firid:"5",secid:"9",secrole:"数据仓库"},
//	{firid:"5",secid:"10",secrole:"DBA其他"},
//
//	{firid:"6",secid:"1",secrole:"网页设计师"},
//	{firid:"6",secid:"2",secrole:"Flash设计师"},
//	{firid:"6",secid:"3",secrole:"APP设计师"},
//	{firid:"6",secid:"4",secrole:"UI设计师"},
//	{firid:"6",secid:"5",secrole:"美术设计师（2D/3D）"},
//	{firid:"6",secid:"6",secrole:"广告设计师"},
//	{firid:"6",secid:"7",secrole:"多媒体设计师"},
//	{firid:"6",secid:"8",secrole:"原画师"},
//	{firid:"6",secid:"9",secrole:"游戏特效"},
//	{firid:"6",secid:"10",secrole:"视觉设计师"},
//	
//	{firid:"7",secid:"1",secrole:"网页交互设计师"},
//	{firid:"7",secid:"2",secrole:"交互设计师"},
//	{firid:"7",secid:"3",secrole:"无线交互设计师"},
//	{firid:"7",secid:"4",secrole:"硬件交互设计师"},
//	
//	{firid:"8",secid:"1",secrole:"产品经理"},
//	{firid:"8",secid:"2",secrole:"网页产品经理"},
//	{firid:"8",secid:"3",secrole:"移动产品经理"},
//	{firid:"8",secid:"4",secrole:"数据产品经理"},
//	{firid:"8",secid:"5",secrole:"电商产品经理"},
//	{firid:"8",secid:"6",secrole:"游戏策划"},
//	
//	{firid:"9",secid:"1",secrole:"内容运营"},
//	{firid:"9",secid:"2",secrole:"产品运营"},
//	{firid:"9",secid:"3",secrole:"数据运营"},
//	{firid:"9",secid:"4",secrole:"用户运营"},
//	{firid:"9",secid:"5",secrole:"活动运营"},
//	{firid:"9",secid:"6",secrole:"商家运营"},
//	{firid:"9",secid:"7",secrole:"品类运营"},
//	{firid:"9",secid:"8",secrole:"游戏运营"},
//	{firid:"9",secid:"9",secrole:"网络推广运营"},
//	{firid:"9",secid:"10",secrole:"专员网店运营"},
//	{firid:"9",secid:"11",secrole:"新媒体运营"},
//
//	{firid:"10",secid:"1",secrole:"测试工程师"},
//	{firid:"10",secid:"2",secrole:"自动化测试"},
//	{firid:"10",secid:"3",secrole:"功能测试"},
//	{firid:"10",secid:"4",secrole:"性能测试"},
//	{firid:"10",secid:"5",secrole:"测试开发"},
//	{firid:"10",secid:"6",secrole:"游戏测试"},
//	{firid:"10",secid:"7",secrole:"白盒测试"},
//	{firid:"10",secid:"8",secrole:"灰盒测试"},
//	{firid:"10",secid:"9",secrole:"黑盒测试"},
//	{firid:"10",secid:"10",secrole:"手机测试"},
//	{firid:"10",secid:"11",secrole:"测试其他"},
//	
//	{firid:"11",secid:"1",secrole:"人力资源"},
//	{firid:"11",secid:"2",secrole:"财务"},
//	{firid:"11",secid:"3",secrole:"其他"},
//	
//	(err,data)=>{
//     console.log(data);
// });
// 
//
//
//recsecrole.find((err,data)=>{
//	console.log(data)
//})
//recruit.remove((err,data)=>{
//	
//})


//添加招聘需求
router.post('/demand',bodyParser(),(req,res)=>{
	console.log(123);
	
//username=${username}&type=${type}&address=${address}&description=${description}&per_diem=${per_diem}&working_hourse=${working_hourse}&startDate=${startDate}&product_intro=${product_intro}&team_intro=${team_intro}
	let {username,type,address,description,per_diem,working_hourse,startDate,product_intro,team_intro}=req.body;
//	console.log(type);
	
	if(username==""){
		res.json({code:0,msg:"发布失败"});
	}else{
		recsecrole.find((err,data)=>{
			let firid=data[0].firid;
			let secid=data[0].secid;
			let myDate = new Date();
			recruit.create({
				username:username,
				type:type,
				address:address,
				description:description,
				per_diem:per_diem,
				working_hourse:working_hourse,
				startDate:startDate,
				product_intro:product_intro,
				team_intro:team_intro,
				firid:firid,
				secid:secid,
				time:(myDate.getMonth()+1).toString()+'月'+myDate.getDate().toString()+'日'+myDate.getHours().toString()+':'+myDate.getMinutes().toString()
			},(err,data)=>{
				if(err){
					console.log(err);
					res.json({code:0,msg:"发布失败"});
					return;
				}
				
			});
		})
		
		res.json({code:1});
	}
})
//显示所有招聘需求的内容
router.get('/show',(req,res)=>{
	recruit.find((err,data)=>{
		if(err){
			console.log(err);
			res.json({code:0})
			return;
		}
		res.json(data);
	})
})
//删除所有招聘信息的内容
router.get('/remove',(req,res)=>{
    recruit.remove({},()=>{
    	res.json({code:0,msg:"招聘信息删除成功"})
    })
})
//分页,传页数page进来
router.get('/page',(req,res)=>{
	let pageSize=6;
	let pageCount;//总页数
	let page=req.query.page;//当前页
	res.setHeader("Access-Control-Allow-Origin","*");
	recruit.find((err,data)=>{
		pageCount=data.length;
//		console.log(pageCount);
	});
	recruit.find((err,data)=>{
		if(page>pageCount/pageSize){
			res.json({code:0,msg:"参数错误"});
			return;
		}else if(page<=0){
			res.json({code:0,msg:"参数错误"});
			return;
		}
		res.json({data,pageCount,pageSize});
		//(page-1)*pageSize+1
	}).limit(pageSize).skip((page-1)*pageSize+1);
	
})
//把第二大类的角色名称查询到相应的招聘需求,前端传参数过来，参数名是secrole
router.get('/show_demand',(req,res)=>{
	res.setHeader("Access-Control-Allow-Origin","*");
	recsecrole.find({secrole:secrole},(err,data)=>{
		recruit.find({secid:data.secid},(err,data)=>{
			res.json(data);
		})
	})
})


//第一大分类
router.get('/firrole',(req,res)=>{
	res.setHeader("Access-Control-Allow-Origin","*");
	recFirRole.find((err,data)=>{
		if(err){
			console.log(err);
			res.json({code:0,msg:"查询失败"});
			return;
		}
		res.json(data)
	})
})
//第二分类
router.get('/secrole',(req,res)=>{
	res.setHeader("Access-Control-Allow-Origin","*");
	console.log(req.query)
	recsecrole.find({firid:req.query.firid},(err,data)=>{
		if(err){
			console.log(err);
			res.json({code:0,msg:"查询失败"});
			return;
		}
		res.json(data)
	})
})
//通过查询内容找到相对应的招聘需求
router.get('/Recruit',(req,res)=>{
	recruit.find({type:{$regex:req.query.kw}},(err,data)=>{
		if(err){
			console.log(err);
			res.json({code:0,msg:"查询失败"});
			return;
		}
		res.json(data);
	})
})

module.exports={
	router
}
