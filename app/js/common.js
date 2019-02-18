$(function () {
	$('nav').mobileMenu({
		menuIconClassName: ".menu",
		mobileResolution: 770,
		menuType: "fixed",
		offsetToSticky: 50,
		closeIconClassName: ".close-menu-icon"
	});

	$(".services-box").on('click', function (e) {
		$droppedContent = $(this).find(".services-box-dropped");
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

	$('.slider-team-img').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 3,
		autoplay: true,
		asNavFor: '.slider-team-description',
		prevArrow: '<div class="prev"><svg width="32" height="32" viewBox="0 0 32 32"><use xlink: href = "img/sprite.svg#move-to-prev" ></use></svg></div>',
		nextArrow: '<div class="next"><svg width="32" height="32" viewBox="0 0 32 32"><use xlink: href = "img/sprite.svg#move-to-next"></use></svg ></div> ',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: false,
					centerPadding: '0px',
					slidesToShow: 1
				}
    		}
  		]

	});
	$('.slider-team-description').slick({
		slidesToShow: 1,
		asNavFor: '.slider-team-img',
		autoplay: true,
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
	$('.slider-review').slick({
		slidesToShow: 2,
		vertical: true,
		autoplay: true,
		prevArrow: '<div class="arrow-up"><svg width="23" height="14" viewBox="0 0 23 14"><use xlink: href = "img/sprite.svg#arrow-up"></use></svg></div>',
		nextArrow: '<div class="arrow-down"><svg width="23" height="15" viewBox="0 0 23 15"><use xlink: href = "img/sprite.svg#arrow-down"></use></svg ></div>',
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
