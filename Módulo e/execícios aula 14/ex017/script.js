function ler(){
	document.getElementById("res").style.display = "none";
}
function gerar() {
	let n1 = Number(document.querySelector("#n1").value);
	res = document.getElementById("res");
	res.style.display = "block";;
	res.innerHTML = "";
	if (n1 != 0 && n1 != "") {
		for(var i= 1; i<=12; i++){
			res.innerHTML += `<laber>${n1} x ${i} = ${n1*i}<laberl> <br/>`;
		}
	}else{
		alert("[erro] - Preencha corretamente o campo e volte a tentar");
	}
}