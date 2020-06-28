function verificar() {
	var ano = new Date().getFullYear(),
		fAno = document.getElementById('txtAno').value,
		res = document.querySelector("#res"),
		idade = (ano - fAno);
		
		if (fAno.length != "" && fAno < ano && fAno.length >= 4) {
			var fSex = document.getElementsByName("radsex"),
				genero = "",
				img = document.createElement("img");
				img.setAttribute("id", "foto");
				if (fSex[0].checked) {
					genero = "Homem";
					if (idade >= 0 && idade < 14) {
						// Criaça
						img.setAttribute("src", "img/crianca-homem.png");
					}else if (idade < 23) {
						img.setAttribute("src", "img/jovem-homem.png");
					}else if (idade < 50) {
						img.setAttribute("src", "img/adulto.png");
					}else{
						img.setAttribute("src", "img/idoso.png");
					}
				}else if (fSex[1]) {
					genero = "Mulher";
					if (idade >= 0 && idade < 14) {
						img.setAttribute("src", "img/crianca-mulher.png");
					}else if (idade < 23) {
						img.setAttribute("src", "img/jovem-mulher.png");
					}else if (idade < 50) {
						img.setAttribute("src", "img/adulta.png");
					}else{
						img.setAttribute("src", "img/idosa.png");
					}
				}
			res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
			res.appendChild(img);
		}else{
			alert("[erro]. verifique os dados e tente novamente.");
	}	
}