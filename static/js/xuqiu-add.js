window.onload = function() {
	let Firrole = document.querySelector('.firrole');
	let FirroleUl = Firrole.querySelector('ul');
	//	console.log(FirroleUl)
	firroleshow();
	setTimeout(secroleshow, 100);

	function firroleshow() {
		let xhr = new XMLHttpRequest();
		xhr.open('get', '/recruit/firrole');
		xhr.send();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {
				let data = JSON.parse(xhr.responseText);
				for(let i in data) {
					let li = `<li data-id=${data[i].id}><a href="javascript:void(0)">${data[i].firstrole}</a><span class="glyphicon glyphicon-chevron-right"></span></li>`;
					FirroleUl.innerHTML += li;
				}
			}
		}

	}

	function secroleshow() {
		let aLis = FirroleUl.getElementsByTagName("li");
		let Secrole_con = document.querySelector('.secrole_cont');
		let secH2 = document.querySelector('.secrole_cont h2');
		let secUl = document.querySelector('.secrole_cont ul');
		for(i = 0; i < aLis.length; i++) {
			//				console.log(aLis[i].attributes[0].value)
			aLis[i].onmouseenter = function() {
				secUl.innerHTML='';
				let li=Secrole_con.getElementsByTagName('li');
				secH2.innerHTML = this.querySelector('a').innerHTML;
				let xhr = new XMLHttpRequest();
				let Secrole = this.attributes[0].value;
//				console.log(Secrole)
				xhr.open('get', `/recruit/secrole?firid=${Secrole}`);
				xhr.send();
				xhr.onreadystatechange = function() {
					if(xhr.readyState == 4 && xhr.status == 200) {
//						console.log(JSON.parse(xhr.responseText))
						let data = JSON.parse(xhr.responseText);
						for(let i in data) {
							li = `<li><a href="javascript:void(0)">${data[i].secrole}</a></li>`;
							secUl.innerHTML += li;
						}

					}
				}
//				secUl.innerHTML +='';
			}

		}
	}
}