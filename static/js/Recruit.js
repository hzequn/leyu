window.onload = function() {
	let show = document.querySelector('.show');
	let address = document.querySelector('.address');
	let isok = true;
	show.onclick = function() {
		if(isok) {
			address.style.display = "block"
		} else {
			address.style.display = "none"
		}
		isok = !isok;
	}

	let index = document.getElementById('index');
	let goxuqiu = document.getElementById('goxuqiu');
	let login = document.getElementById('login');
	let register = document.getElementById('register');

	index.onclick = function() {
		window.location.href = '/';
	}
	goxuqiu.onclick = function() {
		window.location.href = '/xuqiu_add';
	}
	login.onclick = function() {
		window.location.href = './login'
	}
	register.onclick = function() {
		window.location.href = './register'
	}
	//console.log(document.cookie)
	let inde = document.cookie.indexOf('=');

	function showusename() {
		//	console.log(123)
		if(login.innerHTML = document.cookie.slice(inde + 1)) {
			login.innerHTML = document.cookie.slice(inde + 1)
		} else {
			login.innerHTML = '登录'
		}
	}
	showusename();

	//显示数据
	function showdata(data) {
		for(let i in data) {
			let div = '<div class="span4 project_li col-lg-4 col-md-6 col-sm-12" style="min-width:310px;margin:0px 8px 20px 8px;">' +
				'<a style="text-decoration: none;">' +
				'</a>' +
				'<dl>' +
				'<a style="text-decoration: none;">' +
				'<dt style="margin-bottom: 20px;min-height:150px;">' +
				'<div style="height:42px;overflow: hidden;margin-bottom: 20px;font-size:16px">' +
				'<span class="label label-warning pull-left" style="padding: .4em;" title="未托管佣金">未</span>&nbsp;  <strong>' + data[i].type + '</strong>  </div>' +
				'<div class="clearfix">' +
				'<div><b style="font-size: 16px;color: rgb(244, 69, 60);">' + data[i].per_diem + '</b> 元 / 8小时</div>' +
				'<p>预估工时： ' + data[i].working_hourse + '天</p>' +
				'<p>预估金额： ' + (data[i].per_diem * data[i].working_hourse) + '元</p>' +
				'<p>开工时间： ' + data[i].startDate + '</p>' +
				'<p>兼职地址： ' + data[i].address + '</p>' +
				'</div>' +
				'</dt>' +
				'</a>' +
				'<dd>' +
				'<a style="text-decoration: none;">' +
				'<div style="padding-right: 10px;">' +
				'<p style="padding: 0px 20px;  line-height: 24px; min-height:120px; border-bottom: solid 1px #DDDDDD;">' +
				'<b>描述</b><br> ' + data[i].description +
				'</p>' +
				'</div>' +
				'</a>' +
				'<div class="dl-bottom">' +
				'<a style="text-decoration: none;">' +
				'<div class="yc_left pull-left">' +
				'<span class="pull-left" style="background: url(http://www.leyu.net/api/avatar/show.php?username=t154103927178&amp;size=small) no-repeat center / cover; border-radius: 100px; width: 25px; height: 25px;"></span>&nbsp;' +
				'<span style="padding: .5em 0em;">' + data[i].username + '</span>' +
				'<div style="padding-top:20px;">' + data[i].time + '发布</div>' +
				'</div>' +
				'</a>' +
				'<div style="float: right;  padding-right: 15px;  margin-bottom:20px; padding-top: 20px;text-align:center;">' +
				'<a style="text-decoration: none;"> </a>' +
				'<a class="btn re-btn btn-danger" style="padding: .5em 1em;">投递简历</a>' +

				'<p style="padding-top:10px;">已投递<b style="color: rgb(244, 69, 60);">0</b>人</p>' +
				'</div>' +
				'</div>' +
				'</dd>' +
				'</dl>' +
				'</div>';
			zpcon.innerHTML+=div;
		}
	}

	//动态加载招聘需求数据
	let zpcon = document.getElementById('zpcon');
	var xhr = new XMLHttpRequest();
	xhr.open('get', 'recruit/show');
	xhr.send();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			let data = JSON.parse(xhr.responseText);
			console.log(data);
			showdata(data);
		}
	}
	//搜索功能
	$(document).keydown(function (event)  {        
		if (event.keyCode  ==  13)  {
			let search = document.getElementById('search').value;               
			let xhr = new XMLHttpRequest();
			xhr.open('get', `/recruit/Recruit/?kw=${search}`);
			xhr.send();
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					let data = JSON.parse(xhr.responseText);
					console.log(data)
					zpcon.innerHTML = "";
					if(data) {
						showdata(data);
					}
					if(data.length == 0) {
						alert("您查找的简历不存在")
					}

				}
			}            
		}        
	});
	//分页功能
	let pagination = document.getElementById('pagination');
	let alis = pagination.querySelectorAll('li>a');
	//	console.log(alis)
	for(let i = 0; i < alis.length; i++) {
		alis[i].index = i
		alis[i].onclick = function() {
			let a = alis[this.index].innerHTML;
			console.log(a);
			let xhr = new XMLHttpRequest();
			xhr.open('get', 'recruit/page?page='+a);
			xhr.send();
			xhr.onreadystatechange = function() {
				if(xhr.status == 200 && xhr.readyState == 4) {
					let data = JSON.parse(xhr.responseText);
					console.log(data);
					zpcon.innerHTML = '';
					if(data) {
						showdata(data);
					} else if(data.length == 0) {
						alert("没有更多数据了");
					}
				}
			}

		}
	}
	//按需求时间显示数据
	let demand_time=document.getElementById('demand_time');
	let demand_time_a=demand_time.getElementsByTagName('a');
	for(let i=0;i<demand_time_a.length;i++){
		//console.log(demand_time_a[i].innerHTML)
		demand_time_a[i].index=i;
		demand_time_a[i].onclick=function(){
			current=demand_time_a[this.index].innerHTML;
			console.log(current)
			let xhr = new XMLHttpRequest();
			xhr.open('get', '');
			xhr.send();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					let data = JSON.parse(xhr.responseText);
					zpcon.innerHTML = '';
						showdata(data);
					 
				}
			}
			
			
		}
	}
	//按兼职角色显示数据
	let part_role=document.getElementById('part_role');
	let part_role_a=part_role.getElementsByTagName('a');
	for(let i=0;i<part_role_a.length;i++){
		//console.log(part_role_a[i].innerHTML)
		part_role_a[i].index=i;
		part_role_a[i].onclick=function(){
			current=part_role_a[this.index].innerHTML;
			console.log(current)
			let xhr = new XMLHttpRequest();
			xhr.open('get', '');
			xhr.send();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					let data = JSON.parse(xhr.responseText);
					zpcon.innerHTML = '';
						showdata(data);
					 
				}
			}
			
			
		}
	}
}