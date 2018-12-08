window.onload = function() {
	let loginxw = document.querySelectorAll('.login_xw');
	let loginzh =document.querySelectorAll('.login_zh');
	console.log(loginxw)
	for(var i = 0; i < loginxw.length; i++) {
		loginxw[i].index = i;
		loginxw[i].onclick = function() {
			for(var i = 0; i < loginxw.length; i++) {
				loginxw[i].classList.remove('current');
				loginzh[i].style.display = 'none';

			}
			this.classList.add('current');
			loginzh[this.index].style.display = 'block';
		}

	}
	let loginstus=document.getElementById('loginstus');
	let username=document.getElementById('username');
	let password=document.getElementById('password');
	loginstus.onclick=function(){
		let uservalue=username.value;
		let passvalue=password.value;
		
		let xhr=new XMLHttpRequest();
		xhr.open('post','/user/login');
		xhr.setRequestHeader('Content-Type',"application/x-www-form-urlencoded");
		xhr.send(`username=${uservalue}&password=${passvalue}`)
		xhr.onreadystatechange=function(){
			if(xhr.status==200&&xhr.readyState==4){
				console.log(xhr.responseText);
				if(JSON.parse(xhr.responseText).code){
					window.location.href='/';
					document.cookie=`username=${uservalue}`;
				}else{
					alert(JSON.parse(xhr.responseText).msg)
				}
			}
		}
	}
	let goregister=document.getElementById('goregister');
	goregister.onclick=function(){
		window.location.href='/register';
	}

}