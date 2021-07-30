var bnt = document.querySelector('#mostrar');
var hidden = document.querySelector('.hidden');
var bntform = document.querySelector('#botao-discussoes')
var form = document.querySelector('#form')
var discussoes = document.querySelector('#discussoes')
var bntenviar = document.querySelector('#botao-form')
var enviaddos = document.querySelector('.enviado')
var bntnovotopico = document.querySelector('#novotopico')


/*ver mais*/
bnt.addEventListener('click', function() {

if(hidden.style.display === 'block') {
	hidden.style.display = 'none';
} else {
	hidden.style.display = 'block';
}
	 
});

/*aparecer formulário*/
bntform.addEventListener('click', function exibir(){
	document.getElementById("form").style.display = "block";
	document.getElementById("discussoes").style.display = "none";

});

/*sair do formulário para criar novo topico*/

bntenviar.addEventListener('click', function(){
	document.getElementById("enviado").style.display = "block";
	document.getElementById("discussoes").style.display = "none";
	document.getElementById("form").style.display = "none";
	document.getElementById("hiddenperguntas").style.display = "none";
	
});

bntnovotopico.addEventListener('click', function(){
	document.getElementById("form").style.display = "block"
	document.getElementById("enviado").style.display = "none"
	document.getElementById("hiddenperguntas").style.display = "block";
})