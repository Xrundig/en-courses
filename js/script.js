/*$(".hero-button").click( function(event){
	alert('hi');
})*/


/*Запускаем карусель с учителями*/

$(document).ready(function(){
	
	// Находим блок карусели
	var carousel = $("#carousel");

	// Запускаем плагин карусели
	carousel.owlCarousel({
		/*singleItem: true*/
	});

});