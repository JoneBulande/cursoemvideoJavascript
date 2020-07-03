let amigo = {
	nome: "Jone",
	idade: 20,
	peso: 70,
	engordar(p=0){
		console.log("engordou!");
		this.peso += p;
	}
};
amigo.engordar(2);
console.log(`${amigo.nome}, pesa ${amigo.peso}kg`);