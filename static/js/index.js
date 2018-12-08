let login = document.getElementById('login');
let register = document.getElementById('register');
let recruit = document.getElementById('recruit');

login.onclick = function() {
	window.location.href = '/login';
}
register.onclick = function() {
	window.location.href = '/register';
}
recruit.onclick = function() {
	window.location.href = '/Recruit'
}
let index = document.cookie.indexOf('=');
let outlogin = document.getElementById('outlogin');
//console.log(document.cookie.slice(index+1));
function showusename() {
	if(login.innerHTML = document.cookie.slice(index + 1)) {
		outlogin.style.display = "block";
		login.innerHTML = document.cookie.slice(index + 1)
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