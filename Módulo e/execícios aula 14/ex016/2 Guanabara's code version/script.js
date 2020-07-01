function ler() {
	let ini = document.getElementById('txti');
	let fim = document.getElementById('txtf');
	let passo = document.getElementById('txtp');
	let res = document.getElementById("res");

	if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
		res.innerHTML = "Impossivel contar!";
		window.alert("[ERRO], faltam dados!");
	} else {
		res.innerHTML = "Contando: <br/>";
		let i = Number(ini.value);
		let	f = Number(fim.value);
		let	p = Number(passo.value);
		if (p<=0) {
			window.alert("Passo inválido! considerando PASSO 1!");
			p = 1;
		}
		if (i<f) {
			//Contagem Crescente
			for(let c = i; c <= f; c += p) {
				res.innerHTML += `${c} &#128073;`;
			}
		} else {
			//Contagem Regressiva
			for(let c = i; c >= f; c -= p) {
				res.innerHTML += `${c} &#128073;`;
			}
		}
		res.innerHTML += `\u{1F3C1}`;
	}
}