leyu
---

运行
---
* <p>git clone git@github.com:hzequn/leyu.git</p>
* <p>node server.js</p>

###项目说明

<p>该项目是一个招聘网站，用户可以登录注册并且查看需求简历。项目使用nodejs编写后台，MongoDB数据库支持数据的渲染。可实现页面数据即时更新，做到了前后端交互</p>

项目演示
---

注册登录

![](https://github.com/hzequn/leyu/blob/master/pic/register.gif)

<p>Tips:该注册数据是存在MongoDB数据中，注册的时候会首先校验用户名是否已注册，没有注册过才可以注册。</p>

用户数据存取代码如下：

	router.post('/register', bodyParser(), (req, res) => {
	console.log(req.body);
	let {
		username,
		password
	} = req.body;
	//从前端拿过来的数据是空的
	if(username == "" && password == "") {
		res.json({
			code: 0,
			msg: "注册失败"
		});
	} else {
		userinfo.find({
			username
		}, (err, data) => {

			if(data.length) {
				//已有注册账号
				res.json({
					code: 0,
					msg: "该用户已被注册"
				});
			} else {
				userinfo.create({
					username: username,
					password: password
				}, (err, data) => {
					if(err) {
						console.log(err);
						return;
					}
					console.log(data)
				});
				res.json({
					code: 1
				})
			}
		})
	}	
	})	
	router.post('/login', bodyParser(), (req, res) => {
	let {
		username,
		password
	} = req.body;
	userinfo.find({
		username: username,
		password: password
	}, (err, data) => {
		if(err) {
			console.log(err);
			return;
		}
		if(!data.length) {
			res.json({
				code: 0,
				msg: "用户名或密码失败"
			});
			return;
		}
		res.json({
			code: 1
		})
	})	
	})
