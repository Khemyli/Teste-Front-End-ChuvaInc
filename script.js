	var bnt = document.querySelector('#mostrar');
	var hidden = document.querySelector('.hidden');
	var bntform = document.querySelector('#botao-discussoes')
	var form = document.querySelector('#form')
	var discussoes = document.querySelector('#discussoes')
	var bntenviar = document.querySelector('#botao-form')
	


bnt.addEventListener('click', function() {

	if(hidden.style.display === 'block') {
		hidden.style.display = 'none';
	} else {
		hidden.style.display = 'block';
	}
		 
});

bntform.addEventListener('click',function(){

	if(form.style.display === 'none'){
		form.style.display = 'block'
	} else {
		form.style.display = 'none'
	}
});

bntform.addEventListener('click', function(){

	if(discussoes.style.display === 'block'){
		discussoes.style.display = 'none'
	} else {
		discussoes.style.display = 'block'
	}
})

