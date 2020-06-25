function calcular() {
	var txtvel = document.querySelector("#txtvel");
	var res = document.querySelector("#res");
	var vel = Number(txtvel.value);
	res.innerHTML = `Sua velocidade atual é de <strong>${vel}km/h</strong>`;
	if (vel > 60) {
		res.innerHTML += `<br>Voce Está <strong>multado</strong> por excesso de velocidade`;
	}
	res.innerHTML += `<br>Dirija sempre com <strong>cinto de seguraça</strong>`
}