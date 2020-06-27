function carregar() {
	var msg = document.getElementById('msg');
	var img = document.getElementById('img');	
	var hora = new Date().getHours();
	msg.innerHTML = `Agora são ${hora} horas`;
	if (hora  >= 0 && hora < 12 ) {
		img.src = "img/manha.png";
		document.body.style.background = "#e0b379";
	}else if(hora  >= 12 && hora < 18 ){
		img.src = "img/tarde.png";
		document.body.style.background = "#be5d1d";
	}else{
		img.src = "img/noite.png";
		document.body.style.background = "#484f55";
	}
}

