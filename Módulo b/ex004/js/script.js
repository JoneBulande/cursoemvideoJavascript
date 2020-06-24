var nome = prompt("Qual é o seu nome?");
if (nome === "" || nome === " ") {
alert("ja que nao digitou o nome entao...");
	nome = "Jone";
}
document.write(`<b>${nome}</b>, seu nome tem ${nome.length} letras <br/>`);
document.write(`<b>${nome}</b>, seu nome em minúsculo é ${nome.toLowerCase()}<br/>`);
document.write(`<b>${nome}</b>, seu nome em maiúsculo é ${nome.toUpperCase()}`);
