$(document).ready( function (){

	$('.card').on('click', function(event){
		$(this).toggleClass('card--open');
	});

	$('.card__like').on('click', function(event){
		event.stopPropagation();
		event.preventDefault();
		$(this).toggleClass('card__like--red');
	});

	$('.card__follow-btn').on('click', function(event){
		event.stopPropagation();
		$(this).toggleClass('card__follow-btn--following');

		if ($(this).hasClass('card__follow-btn--following')){
			$('.card__follow-btn').text('Siguiendo');
		} else {
			$('.card__follow-btn').text('Seguir');
		};
	});

// PARA HACER CAMBIAR LA IMAGEN 
// Llamo al selector con su id en este caso, y le decimos que al cambiar la funcion, se gatille el evento 
	$('#image').on('change', function(event){
		// guardamos en una variable el src base
		var link = 'assets/images/squared/'
		// sacar el valor del evento gatillado 
		var valor = $(event.target).val();
		// asignadas las dos variables, ahora llamaremos a la clase '.create__image img'
		// y le asignaremos atributo de las dos variables.
		$('.create__image img').attr('src', link + valor);

	})

//para cambiar el autor lo mismo de arriba, diferentes links y variebles
	$('#author').on('change', function(event){
		var autor = 'assets/images/profiles/'
		var autor__valor = $(event.target).val();
		$('.create__profile img').attr('src', autor + autor__valor);
	})

});