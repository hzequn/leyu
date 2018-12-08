window.onload = function() {
	let sub_btn = document.querySelector('#sub_btn');
	//	console.log(sub_btn)
	let index = document.cookie.indexOf('=')
	let username = document.cookie.slice(index + 1);
	sub_btn.onclick = function() {
		
		let type = document.querySelector('#type').value;
		let area =document.getElementById('area').value;
		let address = document.querySelector('#address').value;
//		address=area.parent.parent+area.parent+area+address;
		let description = document.querySelector('#description').value;
		let per_diem = document.querySelector('#per_diem').value;
		let working_hourse = document.querySelector('#working_hourse').value;
		let startDate = document.querySelector('.startDate').value;
		let product_intro = document.querySelector('#product_intro').value;
		let team_intro = document.querySelector('#team_intro').value;

		//		console.log(product_intro)
		//		console.log(team_intro)
		//		console.log(username)
//		console.log(type + ',' + city + ',' + address + ',' + description + ',' + per_diem + ',' + working_hourse + ',' + startDate);
		let xhr = new XMLHttpRequest();
		xhr.open('post', '/recruit/demand');
		xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
		let rr = `type=${type}&city=${city}&address=${address}&description=${description}&per_diem=${per_diem}&working_hourse=${working_hourse}&startDate=${startDate}&team_intro=${team_intro}&product_intro=${product_intro}&username=${username}`
		xhr.send(rr);
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {
				let data = JSON.parse(xhr.responseText);
			}
		}
	}
	let submit = document.getElementById('submit');
	submit.onclick = function() {
		window.location.href = './Recruit'
	}

	let lianxi = document.getElementById('username');
	//	console.log(username);
	lianxi.innerHTML = username;
	//调用日期插件
	laydate({
		elem: '#kaishiriqi',
		min: laydate.now()
	});
	
	let inde = document.cookie.indexOf('=');
	let login = document.getElementById('login');
	let register = document.getElementById('register');
	let recruit = document.getElementById('recruit');
	let goindex = document.getElementById('goindex');
	let outlogin = document.getElementById('outlogin');
	goindex.onclick = function() {
		window.location.href = './'
	}

	login.onclick = function() {
		window.location.href = '/login';
	}
	register.onclick = function() {
		window.location.href = '/register';
	}
	recruit.onclick = function() {
		window.location.href = '/Recruit'
	}

	function showusename() {
		if(login.innerHTML = document.cookie.slice(inde + 1)) {
			outlogin.style.display = "block";
			login.innerHTML = document.cookie.slice(inde + 1)
		} else {
			login.innerHTML = '登录'
		}
	}
	showusename();

	function clearAllCookie() {
		var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
		if(keys) {
			for(var i = keys.length; i--;)
				document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
		}

	}
	//点击退出登录
	outlogin.onclick = function() {
		clearAllCookie();
		showusename();
		outlogin.style.display = "none";
	}
//	日薪与支付金额的随时变更
	let payprice=document.getElementById('payprice');
	let working_hourse=document.getElementById('working_hourse');
	let per_diem=document.getElementById('per_diem');
	working_hourse.onkeyup=function(){
		payprice.innerHTML=working_hourse.value*per_diem.value;
	}
	per_diem.onkeyup=function(){
		payprice.innerHTML=working_hourse.value*per_diem.value;
	}
	
	//	三级联动
	var pro=document.getElementById("province");
		
		function loadProvince()
		{
			for(var i=0;i<provinceJson.length;i++)
			{
				var opt=document.createElement("option");
				opt.innerHTML=provinceJson[i].province;
				opt.setAttribute("value",provinceJson[i].id);
				pro.appendChild(opt);
			}
			loadCity();
		}
		pro.onchange=function(){
			loadCity();
		}
		var city=document.getElementById("city");
		function loadCity()
		{
			city.options.length=0;
			var pid=pro.value;
			for(var i=0;i<cityJson.length;i++)
			{
				if(pid==cityJson[i].parent){
				var opt=document.createElement("option");
				
				opt.innerHTML=cityJson[i].city;
				//key value
				opt.setAttribute("value",cityJson[i].id);
				city.appendChild(opt);
				}
				
				
			}
			loadArea();
		}
		city.onchange=function(){
			loadArea();
		}
		
		var area=document.getElementById("area");
		function loadArea(){
			area.options.length=0;
			var cid=city.value;
			for(var i=0;i<countyJson.length;i++){
				if(cid==countyJson[i].parent)
				{
					var opt=document.createElement("option");
					opt.innerHTML=countyJson[i].county;
				  
				    area.appendChild(opt);
				}
			}
		}
		loadProvince();

}