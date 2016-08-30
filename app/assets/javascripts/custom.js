$(document).on('turbolinks:load', function() {

	$(".full-height").css("min-height", $(window).height());
	$(".full-height-twice").css("min-height", ($(window).height() * 2));



	// Stop Videos on modal close
	$("#modal-house-cards").on('hidden.bs.modal', function (e) {
	    $("#modal-house-cards iframe").attr("src", $("#modal-house-cards iframe").attr("src"));
	});
	$("#modal-deadpool").on('hidden.bs.modal', function (e) {
	    $("#modal-deadpool iframe").attr("src", $("#modal-deadpool iframe").attr("src"));
	});




	// Tab to Page to Tab
	var hash = window.location.hash;
	hash && $('ul.nav a[href="' + hash + '"]').tab('show');
	$(".link_to_tab").click(function() {
		window.scrollTo(0,1300);
	});
	// $(".link_to_tab_support").click(function() {
	// 	window.location.hash = '#resources-section-5';
	// });



	// Link Icon animation
	// $(".animate-icon").hover(function() {
	// 	TweenMax.to($(".animate-icon i"), 0.5, { left: 5, ease: Elastic.easeOut.config(1, 0.3) })
	// }, function() {
	// 	TweenMax.to($(".animate-icon i"), 0.5, { left: 0 })
	// });
		
	
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
	// owlEmployee.on('changed.owl.carousel', function( event ) {
 //  	TweenMax.to($(".owl-item.active img"), 0.5, { width: "100%", opacity: 0.5, zIndex: 0, left: 0, top: 0 })
 //  	TweenMax.to($(".owl-item.active.center img"), 0.5, { width: "170%", opacity: 1, zIndex: 1, left: -150, top: -150 })
	// });
	// // owlEmployee.on('next.owl.carousel', function( event ) {
 //  	TweenMax.to($(".owl-item.center.active img"), 0.5, { width: "170%", opacity: 1, zIndex: 1, left: -150, top: -150 })
	// });
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
	// Init ScrollMagic Career Controller
	var careerController = new ScrollMagic.Controller();
	// Init ScrollMagic CaseInterior Controller
	var caseInteriorController = new ScrollMagic.Controller();
	// Init ScrollMagic CaseStudies Controller
	var caseStudiesController = new ScrollMagic.Controller();
	// Init ScrollMagic Contact Controller
	var contactController = new ScrollMagic.Controller();
	// Init ScrollMagic Products Controller
	var productsController = new ScrollMagic.Controller();
	// Init ScrollMagic Resources Controller
	var resourcesController = new ScrollMagic.Controller();
	// Init ScrollMagic Why Us Controller
	var whyUsController = new ScrollMagic.Controller();


	// Navigation Bar Scene
	var navTween = $tm.to($('nav'), 0.5, { backgroundColor: '#000' });
	var navScene = new ScrollMagic.Scene({ offset: 100 })
									.setTween(navTween)
									.addTo(homeController);

	// Animation home section 2 on scroll
	var fromLeft = $tm.from($(".from-left"), 3, { left: -50, top: -50,  opacity: 0, ease: Power4.easeOut });
	var fromRight = $tm.from($(".from-right"), 3, { right: -50, top: 50, opacity: 0, ease: Power4.easeOut });
	var smallToBig = $tm.from($(".small-to-big"), 2, { scale: 0, ease: Elastic.easeOut.config(2, 1) });
	// var normalBigNormal = $tm.from($(".normal-big-normal"), 2, { opacity: 0 });
	var fromUp = $tm.from($(".from-up"), 2, { top: -50, opacity: 0 });
	var fromDown = $tm.from($(".from-down"), 2, { top: 50, opacity: 0 });
	var hrTween600 = $tm.to($('.hr-anim-600'), 5, { width: 600 });
	var hrTween550 = $tm.to($('.hr-anim-550'), 5, { width: 550 });
	var hrTween500 = $tm.to($('.hr-anim-500'), 5, { width: 500 });
	var hrTween450 = $tm.to($('.hr-anim-450'), 5, { width: 450 });
	var hrTween400 = $tm.to($('.hr-anim-400'), 5, { width: 400 });
	var hrTweenCareerLife = $tm.to($('.hr-anim-career-life'), 5, { width: 600 });
	var hrTweenCaseStudies = $tm.to($('.hr-anim-case-studies'), 5, { width: 1000 });
	var hrTweenContact = $tm.to($('.hr-anim-contact'), 5, { width: 1000 });
	var hrTweenProductsOpus = $tm.to($('.hr-anim-product-opus'), 5, { width: 700 });
	var hrTweenResourcesForm = $tm.to($('.hr-anim-resources-form'), 5, { width: 1000 });
	var hrTweenResourcesSection4 = $tm.to($('.hr-anim-resources-section-4'), 5, { width: 800 });
	var hrTweenWhyUsSection3 = $tm.to($('.hr-anim-why-us-section-3'), 5, { width: 800 });

	// Home Scene
	var homeSection1Scene = new ScrollMagic.Scene()
													.setTween(smallToBig)
													.addTo(homeController);
	var homeSection2Scene = new ScrollMagic.Scene({triggerElement: "#home-section-2", offset: 100})
													.setTween([fromLeft, fromRight])
													.addTo(homeController);
	var homeSection4Scene = new ScrollMagic.Scene({triggerElement: "#home-section-4-5", offset: 150})
													.setTween([fromUp, fromDown])
													.addTo(homeController);

	// Career Scene
	// var careerSection1Scene = new ScrollMagic.Scene({triggerElement: "#career-section-1", duration: 1000})
														// .setTween(normalBigNormal)
														// .addTo(careerController);
	var careerSection2Scene = new ScrollMagic.Scene({triggerElement: "#career-section-2", duration: 500})
														.setTween(hrTweenCareerLife)
														.addTo(careerController);

	// Case Interior Scene
	var caseInteriorSection2SceneGoneGirl = new ScrollMagic.Scene({triggerElement: "#case-interior-gone-girl-section-2", duration: 500})
													.setTween(hrTween400)
													.addTo(homeController);
	var caseInteriorSection2SceneJoke = new ScrollMagic.Scene({triggerElement: "#case-interior-joke-productions-section-2", duration: 500})
													.setTween(hrTween550)
													.addTo(caseInteriorController);
	var caseInteriorSection3Scene = new ScrollMagic.Scene({triggerElement: ".case-interior-section3", duration: 500})
													.setTween(hrTween600)
													.addTo(caseInteriorController);
	var caseInteriorSection4Scene = new ScrollMagic.Scene({triggerElement: ".case-interior-section4", duration: 500})
													.setTween(hrTween500)
													.addTo(caseInteriorController);
	var caseInteriorSection5Scene = new ScrollMagic.Scene({triggerElement: ".case-interior-section5", duration: 300})
													.setTween(hrTween450)
													.addTo(caseInteriorController);											

	// Case Studies Scene
	var caseStudiesScene = new ScrollMagic.Scene({triggerElement: "#case-studies-section-3", duration: 500})
													.setTween(hrTweenCaseStudies)
													.addTo(caseStudiesController);

	// Contact Scene
	var contactScene = new ScrollMagic.Scene({triggerElement: "#contact-section-3", duration: 500})
													.setTween(hrTweenContact)
													.addTo(contactController);		

	// Products	Scene									
	var productsScene = new ScrollMagic.Scene({triggerElement: "#opus", duration: 500})
													.setTween(hrTweenProductsOpus)
													.addTo(productsController);

	// Resources Scene										
	var resourcesScene = new ScrollMagic.Scene({triggerElement: "#resources-section-3", duration: 500})
													.setTween(hrTweenResourcesForm)
													.addTo(resourcesController);
	var resourcesSceneSection4 = new ScrollMagic.Scene({triggerElement: "#resources-section-4", duration: 500})
													.setTween(hrTweenResourcesSection4)
													.addTo(resourcesController);

	// Why Us Scene										
	var whyUsScene = new ScrollMagic.Scene({triggerElement: "#why-us-section-3", duration: 500})
													.setTween(hrTweenWhyUsSection3)
													.addTo(whyUsController);



	// Init ScrollMagic hr Controller
	// var hrController = new ScrollMagic.Controller();
	
	// var hrScene = new ScrollMagic.Scene({ triggerElement: ".hr-anim", offset: 100 })
	// 								.setTween(hrTween)
	// 								.addTo(hrController);

	// Shadow animation
	$(".shadow-animation").hover(function() {
	  	$tm.to($(this), 0.3, { boxShadow: "10px 10px 5px #444" });
	  	$tm.to($(this), 0.3, { left: -10, top: -10 });
	}, function() {
	  	$tm.to($(this), 0.3, { boxShadow: "0px 0px 0px" });
	  	$tm.to($(this), 0.3, { left: 0, top: 0 });
	});


	// Products Overlay Animation
	$(".to-overlay").click(function(e){
		e.preventDefault();
	  $tm.to($($(this).data("target")), 0.3, { opacity: 1, zIndex: 5 });
	});
	$(".close-overlay").click(function(e) {
		e.preventDefault();
	  $tm.to($(".product-overlay"), 0.3, { opacity: 0, zIndex: -1 });
	});


});

