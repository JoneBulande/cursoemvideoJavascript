/**/
function somar() {
    var n1 = Number(document.getElementById('n1').value);
    var n2 = Number(document.getElementById('n2').value);
    var resultado = document.querySelector("p#resultado");
    if (n1 && n2 != "") {
        var soma = n1+n2;
        resultado.innerHTML = `A soma entre ${n1} e ${n2} é ${soma}`;
    }else{
        alert("preencha os campos para somar!");
    }
}
