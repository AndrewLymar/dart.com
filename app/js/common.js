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
});
