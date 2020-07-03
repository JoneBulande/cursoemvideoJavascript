let num = document.querySelector("#fnum");
let lista = document.querySelector("#flista");
let res2 = document.querySelector("#res2");
let valores = [];

function isNumero(n) {
	if (Number(n) >= 1 && Number(n) <= 100) {
		return true;
	}else{
		return false;
	}
}
function inLista(n, l) {
	if (l.indexOf(Number(n)) != -1 )  {
		return true;
	}else{
		return false;
	}
}
function adicionar() {
	if (isNumero(num.value) && !inLista(num.value, valores)) {
		valores.push(Number(num.value));
		let item = document.createElement("option");
		item.text = `valore ${num.value} adicionado.`;
		lista.appendChild(item);
		res2.innerHTML = "";
	}else{
		alert('valor inválido ou já encontrado na lista.');
	}
	num.value = "";
	num.focus();
}
function finalizar() {
	if (valores.length == 0) {
		alert("adicone valores antes de finalizar!");
	} else {
		let soma = 0;
		let media = 0;
		let maior = valores[0];
		let menor = valores[0];
		let tot = valores.length;
		for(let pos in valores){
			soma += valores[pos];
			if (valores[pos] > maior) 
				maior = valores[pos]
			if (valores[pos]<menor) 
				menor = valores[pos]
		}
		media = soma / tot;
		res2.innerHTML = "";
		res2.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.</p>`;
		res2.innerHTML += `<p> O maior valore informado é ${maior}.</p>`;
		res2.innerHTML += `<p> O menor valore informado é ${menor}.</p>`;
		res2.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`;
		res2.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
	}
}