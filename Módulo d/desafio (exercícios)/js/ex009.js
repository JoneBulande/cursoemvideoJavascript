function verificar() {
	var pais = document.querySelector("#pais").value;
	var res = document.querySelector("#res");
	if (pais == "Moçambique" && "moçambique") {
		res.innerHTML = `Voce nasceu em ${pais}, voce é <i>Moçabicano</i>`;
	}else{
		res.innerHTML = `Voce nasceu em ${pais}, voce é <b>extrangeiro</b>`;
	}
}