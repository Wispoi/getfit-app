document.addEventListener("DOMContentLoaded", function() {
	AOS.init( {
		once: true
	});
	var $document = $(document),
		$element = $('header'),
		className = 'scroll';
	$document.scroll(function() {
		AOS.refresh();
		if ($document.scrollTop() >= 50) {
		    $element.addClass(className);
		} else {
			$element.removeClass(className);
		}
	});
	function mobileSlider() {
		$('.why-slider ul').slick({
			autoplay: true,
			autoplaySpeed: 7000,
			slidesToShow: 1,
			arrows: false,
			dots: true,
			infinite: true,
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			}]
		});
	} 
	$document.resize(function() {
		if ($document.width() <= 991) {
			mobileSlider();
		}
	});
	if ($document.width() <= 991) {
		mobileSlider();
	}

	$('.hero-tabs__nav ul li').click(function() {
		$(this).parent().find('.active').removeClass('active');
		$(this).addClass('active')
		var fullprice = $(this).attr('data-fullprice');
		var discount = $(this).attr('data-discount');
		console.log($('.hero-tabs__content .hero-tabs__item').eq(0).find('.hero-tabs__plan--price value'))
		$('.hero-tabs__content .hero-tabs__item').eq(0).find('.hero-tabs__plan--price .value').html(fullprice);
		$('.hero-tabs__content .hero-tabs__item').eq(1).find('.hero-tabs__plan--price .value').html(discount);
	});
	$('.accordion-item').click(function() {
		if ($(this).hasClass('active')) {
			$(this).parent().find('.active').removeClass('active');
			$(this).removeClass('active')			
		} else {
			$(this).parent().find('.active').removeClass('active');
			$(this).addClass('active')				
		}

	})
	$('.stories-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				arrows: false,
				dots: true
			},
			breakpoint: 769,
			settings: {
				slidesToShow: 1,
				arrows: false,
				centerMode: true,
				centerPadding: '0',
				dots: true
			}
		}]
	});
	$('.reviews-slider').slick({
		autoplay: true,
		autoplaySpeed: 7000,
		slidesToShow: 1,
		arrows: false,
		vertical: true,
		infinite: true,
		verticalSwiping: true,
		centerMode: true,
		centerPadding: '250px',
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				arrows: false,
				dots: true,
				vertical: false,
				verticalSwiping: false
			},
			breakpoint: 769,
			settings: {
				slidesToShow: 1,
				arrows: false,
				centerMode: true,
				centerPadding: '20px',
				dots: true,
				vertical: false,
				verticalSwiping: false
			}
		}]

	});
	$('.burger-icon').click(function() {
		$('header').toggleClass('active')
	});
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	    anchor.addEventListener('click', function (e) {
	        e.preventDefault();
	        $('header').removeClass('active');
	        document.querySelector(this.getAttribute('href')).scrollIntoView({
	            behavior: 'smooth'
	        });
	    });
	});
});
