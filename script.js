	var bnt = document.querySelector('#mostrar');
	var hidden = document.querySelector('.hidden');


bnt.addEventListener('click', function() {

	if(hidden.style.display === 'block') {
		hidden.style.display = 'none';
	} else {
		hidden.style.display = 'block';
	}		 
});	
