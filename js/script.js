// SCRIPT START :)

// slick slider
$(document).ready(function(){
  $('.img-slider').slick({
    infinity: true,
    autoplay :true,
    autoplaySpeed : 2500,
    arrows : false,
	});
});

 /* Counter - CountTo */
	var a = 0;
	$(window).scroll(function() {
		if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
			var oTop = $('#counter').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
				countNum: $this.text()
				}).animate({
					countNum: countTo
				},
				{
					duration: 2000,
					easing: 'swing',
					step: function() {
					$this.text(Math.floor(this.countNum));
					},
					complete: function() {
					$this.text(this.countNum);
					//alert('finished');
					}
				});
			});
			a = 1;
			}
		}
    });


new WOW().init();

        	var scroll = new SmoothScroll('a[href*="#home"]', {
				speed: 1300
			});
        	var scroll = new SmoothScroll('a[href*="#about"]', {
				speed: 1300
			});
			var scroll = new SmoothScroll('a[href*="#service"]', {
				speed: 1300
			});
			var scroll = new SmoothScroll('a[href*="#contact"]', {
				speed: 1300
			});