$(function () {
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
	$('.slider').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 3,
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
});
