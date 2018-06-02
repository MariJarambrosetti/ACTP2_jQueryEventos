$(document).ready( function (){


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

	});

//para cambiar el autor lo mismo de arriba, diferentes links y variebles
	$('#author').on('change', function(event){
		var autor = 'assets/images/profiles/'
		var autor__valor = $(event.target).val();
		$('.create__profile img').attr('src', autor + autor__valor);
		
	});


// click para abrir 
	$('.cards').on('click', '.card', function(event){
		$(this).toggleClass('card--open');
	});

// click para like 
	$('.cards').on('click', '.card__like', function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).toggleClass('card__like--red');
	});

// click para seguir 
	$('.cards').on('click','.card__follow-btn', function(event){
		event.stopPropagation();
		$(this).toggleClass('card__follow-btn--following');

		if ($(this).hasClass('card__follow-btn--following')){
			$('.card__follow-btn').text('Siguiendo');
		} else {
			$('.card__follow-btn').text('Seguir');
		};
	});

	// VARIABLES PARA LA CUSTIONSSS 

	var newimage ='x'
	var imagen_selec ='x'
	var nuevoautor = 'x'
	var autor_selec = 'x'
	var nombre = 'x'
	var seguidores = 'x'
	var megusta = 'x'
	var siguiend = 'x'

	$('#image').on('change', function(){
		newimage = $('.create__image img').attr('src');
		imagen_selec = $('#image').children(':selected').text();
	});

	$('#author').on('change', function(){
		nuevoautor = $('.create__profile img').attr('src');
		autor_selec = $('#author').children(':selected').text();
	});

	// saca el valor de nombre 
	$('#name').on('change', function(){
		nombre = $(this).val();
		console.log(nombre);
		// $('#name').children(':selected').text();
	});

	// saca el valor de followers
	$('#followers').on('change', function(){
		seguidores = $(this).val();
		console.log(seguidores);
		// $('#followers').children(':selected').text();
	});

	// saca el valor de likes 
	$('#likes').on('change', function(){
		megusta = $(this).val();
		console.log(megusta); 
		// $('#likes').children(':selected').text();
	});

	// saca el valor de following 
	$('#following').on('change', function(){
		siguiend = $(this).val();
		console.log(siguiend);
		// $('#following').children(':selected').text();
	});

	$('.create__submit').on('click', function (event){
		event.preventDefault();
		$('.cards').append(
			'<li class="card">'+
				'<div class="card__highlight">'+
					'<img class="card__img" src="'+ newimage +'" alt="">'+
				'</div>'+
				'<div class="card__content">'+
					'<div class="card__profile-container">'+
					'<img class="card__profile" src="'+ nuevoautor +'" alt="">'+
					'</div>'+
					'<a class="card__like" href="#">'+
						'<i class="fas fa-heart"></i>'+
					'</a>'+
					'<div class="card__title">'+
						'<h2>'+ nombre +'</h2>'+
					'</div>'+
					'<div class="card__author">'+
						'<h3 class="card__author-name">'+ autor_selec +'</h3>'+
					'</div>'+
					'<div class="card__hidden">'+
						'<ul class="social">'+
							'<li class="social__element">'+
								'<div class="social__number">'+ seguidores +'</div>'+
								'<div class="social__text">Followers</div>'+
							'</li>'+
							'<li class="social__element">'+
								'<div class="social__number">'+ megusta +'</div>'+
								'<div class="social__text">Likes</div>'+
							'</li>'+
							'<li class="social__element">'+
								'<div class="social__number">'+ siguiend +'</div>'+
								'<div class="social__text">Following</div>'+
							'</li>'+
						'</ul>'+
						'<div class="card__follow"><button class="card__follow-btn">Seguir</button></div>'+
					'</div>'+
				'</div>'+
			'</li>'

		);
	});



});