$(function () {
	$('nav').mobileMenu({
		menuIconClassName: ".menu",
		mobileResolution: 770,
		menuType: "fixed",
		offsetToSticky: 50,
		closeIconClassName: ".close-menu-icon"
	});

	$(".services-box-top").on('click', function (e) {
		$droppedContent = $(this).next();
		if ($droppedContent.css('display') == 'none') {
			$droppedContent.animate({
				height: 'show'
			}, 500);
			$droppedContent.css('display', 'flex')
		} else {
			$droppedContent.animate({
				height: 'hide'
			}, 500);
		}
	});
	$('.sliderimg').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 3,
		asNavFor: '.slidertext',
		prevArrow: '<img src="img/move-to-prev.svg" alt="prev" class="prev">',
		nextArrow: '<img src="img/move-to-next.svg" alt="prev" class="next">',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					centerMode: false,
					centerPadding: '0px',
					slidesToShow: 1
				}
    		}
  		]

	});
	$('.slidertext').slick({
		slidesToShow: 1,
		asNavFor: '.sliderimg',
		prevArrow: '',
		nextArrow: '',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					centerMode: false,
					centerPadding: '0px',
					slidesToShow: 1
				}
    		}
  		]

	});
	$('.review-slider').slick({
		slidesToShow: 2,
		vertical: true,
		prevArrow: '<img src="img/arrow-up.png" class="arrow-up" alt="arrow-up">',
		nextArrow: '<img src="img/arrow-down.png" class="arrow-down" alt="arrow-down">',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1
				}
    		}
  		]
	});
});
