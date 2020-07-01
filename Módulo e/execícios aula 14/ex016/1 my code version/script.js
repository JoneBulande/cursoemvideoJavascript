function contar() {
	let n1 = Number(document.querySelector("#n1").value),
		n2 = Number(document.querySelector("#n2").value),
		n3 = Number(document.querySelector("#n3").value),
		res = document.querySelector("#res");
		if (n1!=0 && n2!=0 && n3!=0) {
			res.innerHTML = "";
			if (n1<n2) {
				for(i = n1; i<=n2; i+=n3){
					res.innerHTML += `${i} &#128073;`;
				}
			}else{
				for(i = n1; i>=n2; i-=n3){
					res.innerHTML += `${i} &#128073;`;
				}
			}
			res.innerHTML += `\u{1F3C1}`;
		}else{
			alert("[erro], preencha os campos corretamente e volte a tentar.");
		}
}
