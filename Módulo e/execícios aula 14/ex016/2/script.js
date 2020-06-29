function contar() {
	var n1 = Number(document.querySelector("#n1").value),
		n2 = Number(document.querySelector("#n2").value),
		n3 = Number(document.querySelector("#n3").value),
		res = document.querySelector("#res");
		if (n1 != " " && n1 != "") {
			if (n2 != " " && n2 != "") {
				if (n3 != " " && n3 != "") {
					for(i=n1; i<=n2; i+=n3){
						res.innerHTML +=  ${i};
					}
				}
			}
		}else{
			alert("[erro], Prencha os campos corretamente e volte a tentar!");
		}
}