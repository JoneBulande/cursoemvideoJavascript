let numeros = [];
function add() {
	let numero = Number(document.querySelector("#numero").value),
		res = document.querySelector("#res"),
		btn2 = document.querySelector("#btn2");
	if (numero > 0 && numero < 100 && numeros.indexOf(numero) == -1) {
		res.style.display = "block";
		res2.style.display = "none";
		btn2.style.display = "block";
		numeros.push(numero);
		res.innerHTML += `Número <b>${numero}</b> adicionado <br/>`;
	}else{
		alert("[ERRO], Tens de adicionar números maiores que 0 e menores que 100, ou o numero que tentaste adicionar ja foi adicionado.");
	}
	document.getElementById("numero").value = "";
	soma = 0;
	for ( var i = 0; i < numeros.length; i++ ){
   		soma += numeros[i];
	}
	media = soma/soma;
}
function finalizar() {
	if (numeros !== "" && numeros != 0 && res.innerHTML !== "") {
		numeros.sort(function (a, b) {
			return a - b;
		});
		let totalNumeros = numeros.length,
			numeroMaior = numeros.pop(),
			numeroMenor = numeros.shift(),
			res2 = document.querySelector("#res2");		
		res2.style.display = "block";
		res2.innerHTML = `O total de números adicionados é <b>${totalNumeros}</b> <br/>`;
		res2.innerHTML += `O maior número adicionado é <b>${numeroMaior}</b> <br/>`;
		if (numeroMenor != undefined) {
			res2.innerHTML += `O menor número adicionado é <b>${numeroMenor}</b> <br/>`;
		}else{
			res2.innerHTML += `O menor número adicionado é <b>${numeroMaior}</b> <br/>`;
		}
		res2.innerHTML += `A soma dos números adicionados é <b>${soma}</b> <br/>`;
		res2.innerHTML += `A média dos números adicionados é <b>${media}</b> <br/>`;
		res.innerHTML = "";
		res.style.display = "none";
		btn2.style.display = "none";
		numeros = [];
	}
}