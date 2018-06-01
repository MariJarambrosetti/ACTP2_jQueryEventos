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



});