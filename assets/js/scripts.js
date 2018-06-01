$(document).ready( function (){
	$('.card').on('click', function(event){
		$(this).toggleClass('card--open');
	});
});