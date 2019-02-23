(function($){
	$(function(){

		var body = $('body');

		$('.main-slider').slick({
			arrows:false
		});

		$('.product-card-slider').slick({
			arrows:false,
			asNavFor: '.product-card-slider-nav',
		});

		$('.product-card-slider-nav').slick({
			arrows:false,
			vertical:true,
			verticalSwiping:true,
			slidesToShow: 6,
			slidesToScroll:6,
			asNavFor: '.product-card-slider',
  			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 1199,
					settings: {
				        slidesToShow: 4,
				        slidesToScroll: 4,
				        
				    }
				},
				{
					breakpoint: 991,
					settings: {
						vertical:false,
						verticalSwiping:false,
						slidesToShow: 5,
				        slidesToScroll: 5,
					}
				},
				{
					breakpoint: 480,
					settings: {
				        slidesToShow: 4,
				        slidesToScroll: 4,
				        vertical:false,
						verticalSwiping:false,
				    }
				}
			]
		})

		$('#menu-toggle').click(function(){
			body.toggleClass('menu-open');
		})

		$('.search-button').click(function(){
			body.toggleClass('search-open');
		})

		$('.overlay-closer').click(function(){
			body.removeClass('menu-open');
			body.removeClass('search-open');
		})

		$('.ajax-popup-link').magnificPopup({
		  	type: 'ajax',
		  	fixedContentPos: true
		});

	})
})(jQuery);