
function calculaMedia() {

	var valor1 = document.getElementById("nota1")
	var nota1 = valor1.value;
	var primeiraNota = parseFloat(nota1);

	var valor2 = document.getElementById("nota2")
	var nota2 = valor2.value;
	var segundaNota = parseFloat(nota2);

	var valor3 = document.getElementById("nota3")
	var nota3 = valor3.value;
	var terceiraNota = parseFloat(nota3);

	var valor4 = document.getElementById("nota4")
	var nota4 = valor4.value;
	var quartaNota = parseFloat(nota4);		


	var valorMedia = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;
	var elementoValorMedia = document.getElementById("Media")
	var Media = " Sua média é: " + valorMedia;

	elementoValorMedia.innerHTML = Media;

}