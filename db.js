//引入模块
const mongoose=require("mongoose");

//链接数据库
mongoose.connect("mongodb://localhost:27017/Leyu");
//创建表
let db={
	"userinfo":{
		username:String, 
		password:String
	},
	"recruit":{
		username:String,
		type:String,
		address:String,
		description:String,
		per_diem:String,
		working_hourse:String,
		startDate:String,
		product_intro:String,
		team_intro:String,
		firid:String,
		secid:String,
		time:String,
	},
	'recFirRole':{
		id:String,
		firstrole:String
	},
	'recsecrole':{
		firid:String,
		secid:String,
		secrole:String
	}
	
};
//循环遍历每一个表
for(key in db){
	mongoose.model(key,mongoose.Schema(db[key]));
}
//导出每一张表
module.exports={
	'getModel':function(modelName){
		return mongoose.model(modelName);
	}
}
