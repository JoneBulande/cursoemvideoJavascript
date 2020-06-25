function calcular() {
	var vel = Number(document.querySelector("#txtvel").value);
	var res = document.querySelector("#res");
	res.innerHTML = `Sua velocidade atual é de <strong>${vel}km/h</strong>`;
	if (vel > 60) {
		res.innerHTML += `<br>Voce Está <b>multado</b> por excesso de velocidade.`;
	}
	res.innerHTML += `<br>Dirija sempre com <strong>cinto de seguraça</strong>`
}