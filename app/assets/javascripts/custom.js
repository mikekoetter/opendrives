$(document).on('turbolinks:load', function() {

	$(".full-height").css("min-height", $(window).height());
	$(".full-height-twice").css("min-height", ($(window).height() * 2));

	

	// SmoothScrolling
	$(function() {
	  $('.smooth-scroll').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top - 100
				}, 1000);
				return false;
			  }
			}
	  });
	});
	

	// Clients Carousel set up
	var owl = $(".clients-carousel");
	owl.owlCarousel({
		loop: true,
		autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    margin: 100,
    responsive: {
    	0: {
    		items: 3,
    		slideBy: 3,
    		margin: 30
    	},
    	768: {
    		items: 3,
    		slideBy:3,
    		margin: 50
    	},
    	992: {
    		slideBy: 4,
    		items: 4
    	}
    }
	});
	// Employee Carousel set up
	var owlEmployee = $(".employee-carousel");
	owlEmployee.owlCarousel({
		loop: true,
		center: true,
	});
	$('.carousel-left-arrow').click(function() {
	    owl.trigger('prev.owl.carousel');
	    owlEmployee.trigger('prev.owl.carousel');
	})
	$('.carousel-right-arrow').click(function() {
	    owl.trigger('next.owl.carousel');
	    owlEmployee.trigger('next.owl.carousel');
	})
	$('.carousel-arrow').hover(function() {
		TweenMax.to($('.carousel-arrow'), 2, { opacity: 1 });
	}, function() {
		TweenMax.to($('.carousel-arrow'), 2, { opacity: 0.4 });
	});


	
	

	
	// Nav menu animation
	function hideMenu() {
		TweenMax.to($('.nav-menu'), 0.5, { right: -300, opacity: 0, zIndex: -5 });
		TweenMax.to($('.hide-on-menu'), 0.5, { opacity: 1 });
	}
	$(".bars-nav").click(function(e) {
		e.preventDefault();
		TweenMax.to($('.nav-menu'), 0.5, { right: 0, opacity: 1, zIndex: 5 });
		TweenMax.to($('.hide-on-menu'), 0.5, { opacity: 0 });
	});
	$(".close-menu").click(function(e) {
		e.preventDefault();
		hideMenu();
	});
	$(window).scroll(function() {
		hideMenu();
	});
	// $(document).click(function(e) {
	// 	if (e.target.id != 'nav-menu' ) {
	// 		e.preventDefault();
	// 		hideMenu();
	// 	}
	// })
		
	
	


	var $tm = TweenMax;
	var downArrow = $('#home-section-1 i');
	$tm.from(downArrow, 2, { opacity: 0, bottom: '6%', ease: Elastic.easeOut.config(2.5, 0.3), repeat: -1 });


	// Init ScrollMagic Home Controller
	var homeController = new ScrollMagic.Controller();
	// Navigation Bar Scene
	var navTween = $tm.to($('nav'), 0.5, { backgroundColor: '#000' });
	var navScene = new ScrollMagic.Scene({ offset: 100 })
									.setTween(navTween)
									.addTo(homeController);

	// Animation home section 2 on scroll
	var fromLeft = $tm.from($(".from-left"), 3, { left: -50, top: 50,  opacity: 0, ease: Power4.easeOut });
	var fromRight = $tm.from($(".from-right"), 3, { right: -50, top: -50, opacity: 0, ease: Power4.easeOut });
	var homeSection2Scene = new ScrollMagic.Scene({triggerElement: "#home-section-2", offset: 100})
													.setTween([fromLeft, fromRight])
													.addTo(homeController);





	// Shadow animation
	$(".shadow-animation").hover(function() {
	  	$tm.to($(this), 0.3, { boxShadow: "10px 10px 5px #444" });
	  	$tm.to($(this), 0.3, { left: 10, top: 10 });
	}, function() {
	  	$tm.to($(this), 0.3, { boxShadow: "0px 0px 0px" });
	  	$tm.to($(this), 0.3, { left: 0, top: 0 });
	});


	// Products Overlay Animation
	$(".link-with-border").click(function(e){
		e.preventDefault();
	  $tm.to($($(this).data("target")), 0.3, { opacity: 1, zIndex: 5 });
	});
	$(".close-overlay").click(function(e) {
		e.preventDefault();
	  $tm.to($(".product-overlay"), 0.3, { opacity: 0, zIndex: -1 });
	});


});

