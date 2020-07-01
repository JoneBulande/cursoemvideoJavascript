function a() {
	let valores = [5,8,9,3];
	valores.sort();
	/*
	for(let pos = 0; pos < valores.length; pos++){
		console.log(`A posição ${pos} tem o valor: ${valores[pos]}`);
	}
	*/
	for(let pos in valores){
		//console.log(`A posição ${pos} tem o valor: ${valores[pos]}`);
	}
	let verValor = valores.indexOf(3)
	if (verValor == -1) {
		console.log("valor não econtrado")
	}else{
		console.log(`valor esta na posição ${verValor}`);
	}
	

}