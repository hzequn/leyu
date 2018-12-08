window.onload=function(){
	let register = document.getElementById('register');

register.onclick = function() {
	let phone = document.getElementById('phone');
	let password = document.getElementById('password');
	let phonevalue = phone.value;
	let passwordvalue = password.value;
//	console.log(phonevalue);
//	console.log(passwordvalue);
	let xhr = new XMLHttpRequest();
	
	xhr.open('post','/user/register');
	
	xhr.setRequestHeader('Content-Type',"application/x-www-form-urlencoded");

	xhr.send(`username=${phonevalue}&password=${passwordvalue}`);

	xhr.onreadystatechange = function() {

		if(xhr.readyState == 4 && xhr.status == 200) {
			//步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的　　　　
			console.log(JSON.parse(xhr.responseText).code); //输入相应的内容
			if(JSON.parse(xhr.responseText).code){
				window.location.href='/login'
			}else{
				alert(JSON.parse(xhr.responseText).msg)
			}
			　　
		}
	}

}
let gologin=document.getElementById('gologin');
gologin.onclick=function(){
	window.location.href='/login'
}
}
