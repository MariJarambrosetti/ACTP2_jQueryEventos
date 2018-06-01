$(document).ready( function (){
	$('.card').on('click', function(event){
		$(this).toggleClass('card--open');
	});

	$('.card__like').on('click', function(event){
		event.stopPropagation();
		event.preventDefault();
		$(this).toggleClass('card__like--red');
	});
});