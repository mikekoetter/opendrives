
// Adding method to jQuery
$.fn.clicktoggle = function(a, b) {
    return this.each(function() {
        var clicked = false;
        $(this).click(function(e) {
        		e.preventDefault;
            if (clicked) {
                clicked = false;
                return b.apply(this, arguments);
            }
            clicked = true;
            return a.apply(this, arguments);
        });
    });
};

$(document).ready(function() {



	 
	// For sticky images
	// var stickyTop = $(".sticky").offset().top + 450;
	// $(window).scroll(function() {
 //    var windowTop = $(window).scrollTop();
 //    if (stickyTop < windowTop && $("#case-interior-gone-girl-section-3").height() - 100 + $("#case-interior-gone-girl-section-3").offset().top - $(".sticky").height() > windowTop) {
 //      $('.sticky').css({position: 'fixed', top: '150px', width: '200px', left: '8%'});
 //    } else {
 //      $('.sticky').css({position: 'relative'});
 //    }
 //  });
	


	// $(function() {
	//   var body = $('#home-section-4-5');
	//   var backgrounds = ['url(http://static.jsbin.com/images/jsbin_static.png)', 'url(http://static.jsbin.com/images/popout.png)'];
	// 	var current = 0;

	// 	function nextBackground() {
	// 	  body.css(
	// 	   'background',
	// 	    backgrounds[current = ++current % backgrounds.length]
	// 	 	);
 // 			setTimeout(nextBackground, 5000);
 // 		}

 // 		setTimeout(nextBackground, 500);
 //   	body.css('background', backgrounds[0]);
 // 	});




	//=======================================   Generals   =======================================//
	$(".full-height").css("min-height", $(window).height());
	$(".full-height-twice").css("min-height", ($(window).height() * 2));

	// Tab to Page to Tab 
	var hash = window.location.hash;
	console.log(hash.split("#"))
	hash = hash.split("#");
	// Triggers the right tab
	hash[2] && $('ul.nav a[href="#' + hash[2] + '"]').tab('show');
	// Scroll to right id
	window.location = "#" + hash[1]
	var heightToScroll = 500
	if ($(window).width() < 767) {
		heightToScroll = -300;
	} else if ($(window).width() < 991) {
		heightToScroll = 280;
	} else if ($(window).width() < 1200) {
		heightToScroll = 370;
	} else {
		heightToScroll
	}
	if (hash[1] != "undefined" && hash[1] != undefined) {
		if (hash[1] === 'resources-section-6') {
			$("html, body").animate({scrollTop: ($("#" + hash[1]).offset().top + heightToScroll) });
		} else {
			$("html, body").animate({scrollTop: ($("#" + hash[1]).offset().top - 100) });
		}
	} else {
		window.location.hash = '';
	}

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

	// Shadow animation
	$(".shadow-animation").hover(function() {
	  	$tm.to($(this), 0.3, { boxShadow: "10px 10px 5px #666" });
	  	$tm.to($(this), 0.3, { left: -10, top: -10 });
	}, function() {
	  	$tm.to($(this), 0.3, { boxShadow: "0px 0px 0px" });
	  	$tm.to($(this), 0.3, { left: 0, top: 0 });
	});

	





	
	


	// Link Icon animation
	// $(".animate-icon").hover(function() {
	// 	TweenMax.to($(".animate-icon i"), 0.5, { left: 5, ease: Elastic.easeOut.config(1, 0.3) })
	// }, function() {
	// 	TweenMax.to($(".animate-icon i"), 0.5, { left: 0 })
	// });
		
	
	
	//=======================================   Carousel   =======================================//	
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
		onInitialized: callback
	});
	function callback() {
		TweenMax.to($(".owl-item.active.center img"), 1.5, { scale: 1.7, opacity: 1, zIndex: 1, ease: Elastic.easeOut.config(1, 0.5) });
	}
	
	owlEmployee.on('translate.owl.carousel', function( event ) {
		TweenMax.to($(".owl-item.active img"), 1, { scale: 1, opacity: 0.5, zIndex: 0 })
	});
	owlEmployee.on('translated.owl.carousel', function( event ) {
		TweenMax.to($(".owl-item.active img"), 1, { scale: 1, opacity: 0.5, zIndex: 0 })
		TweenMax.to($(".owl-item.active.center img"), 1.5, { scale: 1.7, opacity: 1, zIndex: 1, ease: Elastic.easeOut.config(1, 0.5) })
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
		TweenMax.to($('.carousel-arrow'), 1, { opacity: 1, scale: 1.5 });
	}, function() {
		TweenMax.to($('.carousel-arrow'), 1, { opacity: 0.4, scale: 1 });
	});


	
	
	//=======================================   Nav   =======================================//
	// Nav menu animation
	function hideMenu() {
		TweenMax.to($('.nav-menu'), 0.5, { right: -300, opacity: 0, zIndex: -5 });
		TweenMax.to($('.hide-on-menu'), 0.5, { opacity: 1 });
		TweenMax.to($('.no-hamburgler, .hamburgler'), 0.3, {  zIndex: 6, left: 15, top: 2 });
		TweenMax.to($('.bun, .meat'), 0.3, {  clearProps:"all" });
		$(".hamburgler").removeClass('no-hamburgler blue-hover');
	}
	function showMenu() {
		$(".hamburgler").addClass('no-hamburgler blue-hover');
		TweenMax.to($('.no-hamburgler'), 0.3, {  zIndex: 6, left: 40 });
		TweenMax.to($('.nav-menu'), 0.3, { right: 0, opacity: 1, zIndex: 5 });
		TweenMax.to($('.hide-on-menu'), 0.3, { opacity: 0 });
	}
	$(".hamburgler").clicktoggle(function() {
		$(this).addClass('no-hamburgler blue-hover');
		TweenMax.to($('.no-hamburgler'), 0.3, {  zIndex: 6, left: 40, top: -10 });
		TweenMax.to($('.nav-menu'), 0.3, { right: 0, opacity: 1, zIndex: 5 });
		TweenMax.to($('.hide-on-menu'), 0.3, { opacity: 0 });
	}, function() {
		TweenMax.to($('.nav-menu'), 0.5, { right: -300, opacity: 0, zIndex: -5 });
		TweenMax.to($('.hide-on-menu'), 0.5, { opacity: 1 });
		TweenMax.to($('.no-hamburgler, .hamburgler'), 0.3, {  zIndex: 6, left: 15, top: 2 });
		TweenMax.to($('.bun, .meat'), 0.3, {  clearProps:"all" });
		$(".hamburgler").removeClass('no-hamburgler blue-hover');
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
	

	//=======================================   Products   =======================================//
	// Products Overlay Animation
	if ($(window).width() > 767) {
		$(".to-overlay").click(function(e){
			e.preventDefault();
		  $tm.to($($(this).data("target")), 0.3, { opacity: 1, zIndex: 5 });
		});
		$(".close-overlay").click(function(e) {
			e.preventDefault();
		  $tm.to($(".product-overlay"), 0.3, { opacity: 0, zIndex: -1 });
		});
	} else {
		$(".to-overlay").click(function(e){
			e.preventDefault();
		  $tm.to($($(this).data("target")), 0.3, { opacity: 1, zIndex: 5 });
		});
		$(".close-overlay").click(function(e) {
			e.preventDefault();
		  $tm.to($(".product-overlay-mobile"), 0.3, { opacity: 0, zIndex: -1 });
		});
	}

		
	//=======================================   Resources   =======================================//
	// Stop Videos on modal close
	$("#modal-house-cards").on('hidden.bs.modal', function (e) {
	    $("#modal-house-cards iframe").attr("src", $("#modal-house-cards iframe").attr("src"));
	});
	$("#modal-deadpool").on('hidden.bs.modal', function (e) {
	    $("#modal-deadpool iframe").attr("src", $("#modal-deadpool iframe").attr("src"));
	});


	//=======================================   Contact   =======================================//
	// Boostrap Datepicker options
	$('.datepicker').datepicker({
		startDate: "+3d",
		daysOfWeekDisabled: "0,6",
		todayHighlight: true,
		weekStart: 1
	});

	// Schedule a demo show/hide
	$(".schedule-demo-input").hide();
	$(".schedule-demo-div").click(function() {
		$(".schedule-demo-input").show();
		$(".demo-div").removeClass('demo-div');
		$(".schedule-demo-div").hide();
		$('.datepicker').datepicker('show');
	});

	// Contact Logo Animations
	$(".logo-address-div").hover(function() {
		$('.contact-logo-address').addClass('animated bounce');
	}, function() {
		$('.contact-logo-address').removeClass('animated bounce');
	});
	$(".logo-phone-div").hover(function() {
		$('.contact-logo-phone').addClass('animated tada');
	}, function() {
		$('.contact-logo-phone').removeClass('animated tada');
	});
	$(".logo-mail-div").hover(function() {
		$('.contact-logo-mail').addClass('animated swing');
	}, function() {
		$('.contact-logo-mail').removeClass('animated swing');
	});

	//=======================================   Footer   =======================================//

	var footerTl = new TimelineMax()

	$(".slider-div").hover(function() {
		footerTl.to($(".slider"), 0.3, { left: 149 })
						.to($(".slider"), 0.3, { clip:"rect(0px 350px 100px 200px)" }, "-=0.2");
		$(".slider-div .hide-on-hover").hide();
		$(".slider-div .show-on-hover").show();
	}, function() {
		footerTl.to($(".slider"), 0.3, { clip:"rect(0px 350px 100px 0px)" })
						.to($(".slider"), 0.3, { left: 16, delay: 0.2 }, "-=0.2");
		$(".slider-div .hide-on-hover").show();
		$(".slider-div .show-on-hover").hide();
	});

	//===========================================================================================//
	//===============================   Animation Center   ======================================//
	//===========================================================================================//



	var $tm = TweenMax;
	var widthScreen = $(window).width();
	var downArrow = $('#home-section-1 i');


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
	// Init ScrollMagic MiniOverlay Controller
	var miniOverlayController = new ScrollMagic.Controller();


	var rotateSmallBig = $tm.staggerFrom($(".rotate-small-big"), 1, { scale: 0, rotation: 1080 }, 0.5);
	if ($(window).width() > 1050) {
		var navTweenLogo = $tm.to($(".logo-nav"), 0.5, { scale: 0.7, top: 5 })
	}
	var navTween = $tm.to($('nav'), 1, { backgroundColor: '#000', ease: Power4.easeOut });
	var fromLeftTop = $tm.from($(".from-left-top"), 2, { left: -50, top: -50,  opacity: 0, ease: Power4.easeOut });
	var fromRightBottom = $tm.from($(".from-right-bottom"), 2, { right: -50, top: 50, opacity: 0, ease: Power4.easeOut });
	var fromLeft = $tm.staggerFrom($(".from-left"), 2, { left: -50,  opacity: 0, ease: Power4.easeOut }, 0.5);
	var titleFromRight = $tm.staggerFrom($(".line-from-right"), 1, { right: -50, opacity: 0, ease: Power2.easeOut }, 0.5);
	var smallToBig = new TimelineMax()
										.from($(".catchphrase"), 2, { scale: 0, delay: 0.5 })
										.from($(".catchphrase2"), 2, { scale: 0, ease: Power4.easeIn }, "-=2")
										.to($(".catchphrase2"), 1, { scale: 1.2, ease: Elastic.easeOut.config(2, 0.5) })
										.from(downArrow, 2, { opacity: 0, bottom: '7%', delay: 0.5, ease: Elastic.easeOut.config(2.5, 0.3), repeat: -1 }, "+=0.5");
	var cloudAnimation1 = $tm.to($(".clouds_one"), 200, { repeat: -1, right: widthScreen + 500 });
	var cloudAnimation2 =	$tm.from($(".clouds_two"), 75, { repeat: -1, right: widthScreen - 100 })
	var cloudAnimation3 = $tm.to($(".clouds_three"), 200, { repeat: -1, left: widthScreen + 700 })
	var normalBigNormal = $tm.to($(".normal-big-normal"), 2, { fontSize: "2em" });
	var staggerFromLeft = $tm.staggerFrom($(".stagger-from-left"), 1, { left: -500, opacity: 0 }, 0.5);
	var check = $tm.staggerTo($('.mini-overlay'), 1, { width: 0 }, 0.4);
	var checkProd = $tm.staggerTo($('.mini-overlay-prod'), 1, { width: 0 }, 0.4);
	var hrTween = $tm.to($('.hr-anim'), 1, { width: "100%" });
	var hrTween600 = $tm.to($('.hr-anim-600'), 5, { width: "78%" });
	var hrTween550 = $tm.to($('.hr-anim-550'), 5, { width: "96%" });
	var hrTween500 = $tm.to($('.hr-anim-500'), 5, { width: "45%" });
	var hrTween450 = $tm.to($('.hr-anim-450'), 5, { width: "84%" });
	var hrTween400 = $tm.to($('.hr-anim-400'), 5, { width: "90%" });
	var hrTweenCarousel = $tm.to($('.hr-anim-carousel'), 5, { width: "85%" });
	var hrTweenHome8 = $tm.to($('.hr-anim-home-8'), 5, { width: "40%" });
	var hrTweenCareerSection2 = $tm.to($('.hr-anim-career-section-2'), 5, { width: "93%" });
	var hrTweenCareerSection3 = $tm.to($('.hr-anim-career-section-3'), 5, { width: "60%" });
	var hrTweenCaseStudies = $tm.to($('.hr-anim-case-studies'), 5, { width: "100%" });
	var hrTweenContact = $tm.to($('.hr-anim-contact'), 5, { width: "100%" });
	var hrTweenProductsOpus = $tm.to($('.hr-anim-product-opus'), 5, { width: "70%" });
	var hrTweenResourcesSection2 = $tm.to($('.hr-anim-resources-section-2'), 5, { width: "80%" });
	var hrTweenResourcesForm = $tm.to($('.hr-anim-resources-form'), 5, { width: "95%" });
	var hrTweenResourcesSection4 = $tm.to($('.hr-anim-resources-section-4'), 5, { width: "75%" });
	// var hrTweenResourcesSection6 = $tm.to($('.hr-anim-resources-section-6'), 5, { width: "80%" });
	var hrTweenWhyUsSection3 = $tm.to($('.hr-anim-why-us-section-3'), 5, { width: "70%" });
	var hrTweenWhyUsSection4 = $tm.to($('.hr-anim-why-us-section-4'), 5, { width: "72%" });
	var hrTweenWhyUsSection5 = $tm.to($('.hr-anim-why-us-section-5'), 5, { width: "68%" });
	var hrTweenWhyUsSection6 = $tm.to($('.hr-anim-why-us-section-6'), 5, { width: "43%" });


	// Navigation Bar Scene
	if ($(window).width() > 1050) {
		var navScene = new ScrollMagic.Scene({ offset: 20, duration: 200 })
												.setTween([navTween, navTweenLogo])
												.addTo(homeController);
	}else {
		var navScene = new ScrollMagic.Scene({ offset: 20, duration: 200 })
												.setTween([navTween])
												.addTo(homeController);
	}
	
	// Mini Overlay Animation Scene
	var miniOverlayAnimation = new ScrollMagic.Scene({triggerElement: '.trigger-overlay', offset: -100, reverse: false})
													.setTween(check)
													.addTo(miniOverlayController);
	var miniOverlayAnimationProd = new ScrollMagic.Scene({triggerElement: '.trigger-overlay-second', offset: -100, reverse: false})
													.setTween(checkProd)
													.addTo(miniOverlayController);


	// Home Scene
	var homeScene1 = new ScrollMagic.Scene({offset: -200})
													.setTween([smallToBig, cloudAnimation1, cloudAnimation2, cloudAnimation3])
													.addTo(homeController);
	var homeScene2 = new ScrollMagic.Scene({triggerElement: "#home-section-2", offset: 100})
													.setTween([fromLeftTop, fromRightBottom])
													.addTo(homeController);
	var homeScene3 = new ScrollMagic.Scene({triggerElement: "#home-section-4-5", offset: 150})
													.setTween(staggerFromLeft)
													.addTo(homeController);
	var homeScene4 = new ScrollMagic.Scene({triggerElement: ".container-section-5", offset: -100})
													.setTween(titleFromRight)
													.addTo(homeController);
	var homeScene5 = new ScrollMagic.Scene({triggerElement: ".hr-carousel-trigger", duration: 500})
													.setTween(hrTweenCarousel)
													.addTo(homeController);
	var homeScene6 = new ScrollMagic.Scene({triggerElement: "#home-section-8", duration: 500})
													.setTween(hrTweenHome8)
													.addTo(homeController);

	// Career Scene
	var careerScene1 = new ScrollMagic.Scene({triggerElement: ".start_agame_anim", duration: 500})
													.setTween(normalBigNormal)
													.addTo(careerController);
	var careerScene2 = new ScrollMagic.Scene({triggerElement: "#career-section-2", duration: 500})
													.setTween(hrTweenCareerSection2)
													.addTo(careerController);
	var careerScene3 = new ScrollMagic.Scene({triggerElement: "#career-section-3", duration: 500})
													.setTween(hrTweenCareerSection3)
													.addTo(careerController);
	var careerScene3 = new ScrollMagic.Scene({triggerElement: "#career-section-3", offset: 100, reverse: false})
													.setTween([rotateSmallBig, fromLeft])
													.addTo(careerController);

	// Case Interior Scene
	var caseInteriorScene1 = new ScrollMagic.Scene({triggerElement: "#case-interior-gone-girl-section-2", duration: 500})
													.setTween(hrTween400)
													.addTo(caseInteriorController);
	var caseInteriorScene2 = new ScrollMagic.Scene({triggerElement: "#case-interior-joke-productions-section-2", duration: 500})
													.setTween(hrTween550)
													.addTo(caseInteriorController);
	var caseInteriorScene3 = new ScrollMagic.Scene({triggerElement: ".case-interior-section3", duration: 500})
													.setTween(hrTween600)
													.addTo(caseInteriorController);
	var caseInteriorScene4 = new ScrollMagic.Scene({triggerElement: ".case-interior-section4", duration: 500})
													.setTween(hrTween500)
													.addTo(caseInteriorController);
	var caseInteriorScene5 = new ScrollMagic.Scene({triggerElement: ".case-interior-section5", duration: 300})
													.setTween(hrTween450)
													.addTo(caseInteriorController);											

	// Case Studies Scene
	var caseStudiesScene1 = new ScrollMagic.Scene({triggerElement: "#case-studies-section-3", duration: 500})
													.setTween(hrTweenCaseStudies)
													.addTo(caseStudiesController);

	// Contact Scene
	var contactScene1 = new ScrollMagic.Scene({triggerElement: "#contact-section-3", duration: 500})
													.setTween(hrTweenContact)
													.addTo(contactController);		

	// Products	Scene									
	var productsScene1 = new ScrollMagic.Scene({triggerElement: "#opus", duration: 500})
													.setTween(hrTweenProductsOpus)
													.addTo(productsController);

	// Resources Scene				
	var resourcesScene1 = new ScrollMagic.Scene({triggerElement: "#resources-section-2", duration: 500})
													.setTween(hrTweenResourcesSection2)
													.addTo(resourcesController);						
	var resourcesScene2 = new ScrollMagic.Scene({triggerElement: "#resources-section-3", duration: 500})
													.setTween(hrTweenResourcesForm)
													.addTo(resourcesController);
	var resourcesScene3 = new ScrollMagic.Scene({triggerElement: "#resources-section-4", duration: 500})
													.setTween(hrTweenResourcesSection4)
													.addTo(resourcesController);
	// var resourcesScene4 = new ScrollMagic.Scene({triggerElement: "#resources-section-6", duration: 500})
	// 												.setTween(hrTweenResourcesSection6)
	// 												.addTo(resourcesController);

	// Why Us Scene										
	var whyUsScene = new ScrollMagic.Scene({triggerElement: "#why-us-section-3", duration: 500})
													.setTween(hrTweenWhyUsSection3)
													.addTo(whyUsController);
	var whyUsScene2 = new ScrollMagic.Scene({triggerElement: "#why-us-section-4", duration: 500})
													.setTween(hrTweenWhyUsSection4)
													.addTo(whyUsController);
	var whyUsScene3 = new ScrollMagic.Scene({triggerElement: "#why-us-section-5", duration: 500})
													.setTween(hrTweenWhyUsSection5)
													.addTo(whyUsController);
	var whyUsScene4 = new ScrollMagic.Scene({triggerElement: "#why-us-section-6", duration: 500})
													.setTween(hrTweenWhyUsSection6)
													.addTo(whyUsController);



});

