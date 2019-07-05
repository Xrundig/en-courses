



$(document).ready(function(){
	
	/*Запускаем карусель с учителями*/
	$("#carousel").slick({
		slidesToShow: 4,
		infinite: true,
		dots: false,
		arrows: false,
		responsive:[
			{
				breakpoint: 1200,
				settings:{
					slidesToShow: 3,
					dots: true,
				}
			},
			{
				breakpoint: 992,
				settings:{
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings:{
					slidesToShow: 1
				}

			}
		]
	});

	/*Запускаем карусель с ценами*/

	$(".price-carousel").slick({
		slidesToShow: 3,
		infinite: true,
		dots: false,
		responsive:[
			{
				breakpoint: 992,
				settings:{
					slidesToShow: 2,
					dots: true,
				}
			},
			{
				breakpoint: 768,
				settings:{
					slidesToShow: 1,
				}
			}
			
		]


	});

	/*Плавный скролл для навигации*/
	$(".header").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({scrollTop: top}, 1000);
    });


});