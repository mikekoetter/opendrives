
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

	$(window).load(function(){
    $('.preloader').delay(200).fadeOut(250);
  })

	 
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

	// Switch Tab Animation
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {  
		var target = $(this).attr('href'); 
		$tm.to($('.mini-overlay'), 0.1, { width: "100%" });
		var homeTabAnim = new TimelineMax()
    					.from($(".tab-pane .col-md-8"), 2, {  left: -200, borderColor: "#fff" })
    					.from($(".tab-pane .col-md-4"), 2, {  right: -200 }, "-=2")
    					.from($(target + ' .border-overlay'), 1, { height: 200 })
    					.staggerTo($(target + ' .mini-overlay'), 1, { width: 0 }, 0.4);
	})

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
		TweenMax.to($('.no-hamburgler'), 0.3, {  zIndex: 6, left: 40, top: -10 });
		TweenMax.to($('.nav-menu'), 0.3, { right: 0, opacity: 1, zIndex: 5 });
		TweenMax.to($('.hide-on-menu'), 0.3, { opacity: 0 });
	}
	if ($(window).width() > 850) {
		$(".hamburgler").clicktoggle(function() {
			showMenu();
		}, function() {
			hideMenu();
		});
		$(window).scroll(function() {
			hideMenu();
		});
	} else {
		$(".hamburgler").clicktoggle(function() {
			$(this).addClass('no-hamburgler blue-hover');
			TweenMax.to($('.no-hamburgler'), 0.3, {  zIndex: 6, left: 40 });
			TweenMax.to($('.nav-menu'), 0.3, { right: 0, opacity: 1, zIndex: 5 });
			TweenMax.to($('.hide-on-menu'), 0.3, { opacity: 0 });
		}, function() {
			TweenMax.to($('.nav-menu'), 0.5, { right: -300, opacity: 0, zIndex: -5 });
			TweenMax.to($('.hide-on-menu'), 0.5, { opacity: 1 });
			TweenMax.to($('.no-hamburgler, .hamburgler'), 0.3, {  zIndex: 6, left: 10});
			TweenMax.to($('.bun, .meat'), 0.3, {  clearProps:"all" });
			$(".hamburgler").removeClass('no-hamburgler blue-hover');
		});
	}
	
	// Nav Logo
	$(window).scroll(function() {
		if ($(window).scrollTop() >= 70) {
			$(".hide-on-scroll").hide();
			$(".show-on-scroll").show();
		} else {
			$(".hide-on-scroll").show();
			$(".show-on-scroll").hide();
		}
	});
	
	
	
	// $(document).click(function(e) {
	// 	if (e.target.id != 'nav-menu' ) {
	// 		e.preventDefault();
	// 		hideMenu();
	// 	}
	// })
	

	//=======================================   Products   =======================================//
	// Products Overlay Animation
	var toOverlayAnim = function(e) {
		$tm.from($(e.data("target")), 1, { scale: 0  });
		$tm.to($(e.data("target")), 1, { opacity: 1, zIndex: 5 });
	}
	function closeOverlay(e) {
		$tm.to($(e), 0.3, { opacity: 0, zIndex: -1 });
	}
	if ($(window).width() > 767) {
		$(".to-overlay").click(function(e){
			e.preventDefault();
			toOverlayAnim($(this));
		});
		$(".close-overlay").click(function(e) {
			e.preventDefault();
		  closeOverlay(".product-overlay");
		});
	} else {
		$(".to-overlay").click(function(e){
			e.preventDefault();
			toOverlayAnim($(this));
		});
		$(".close-overlay").click(function(e) {
			e.preventDefault();
		  closeOverlay(".product-overlay-mobile");
		});
	}

	// Products section 2 Hover tabs
	$(".nav-tabs li").hover(function() {
		if (!$(this).hasClass('active')) {
			$tm.to(($(this).find('a img, a p')), 2, { opacity: 1 });
		}
	}, function() {
		if (!$(this).hasClass('active')) {
			$tm.to(($(this).find('img, p')), 2, { opacity: 0.3 });
		}
	});
	
	// $(".nav-tabs li").click(function() {
	// 	if (!$(".nav-tabs li").hasClass('active')) {
	// 		$tm.to(($(this).find('img, p')), 2, { opacity: 0.3 });
	// 	}
	// });
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

	$(".slider-div").clicktoggle(function() {
		footerTl.to($(".slider"), 0.3, { left: 149 })
						.to($(".slider"), 0.3, { clip:"rect(0px 350px 100px 200px)" }, "-=0.2");
		$(".slider-div .hide-on-hover").hide();
		$(".slider-div .show-on-hover").show();
		$('input').focus()
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
	var partnersAnimation = new TimelineMax()
										.staggerFrom($(".partners-animation-right"), 1, { opacity: 0, right: -2000 }, 0.5)
										.staggerFrom($(".partners-animation-left"), 1, { opacity: 0, left: -2000 }, 0.5, "-=0.5");
	var navTween = $tm.to($('nav'), 1, { backgroundColor: '#000', ease: Power4.easeOut });
	var fromLeftTop = $tm.from($(".from-left-top"), 4, { left: -50, top: -50,  opacity: 0, ease: Power4.easeOut });
	var fromRightBottom = $tm.from($(".from-right-bottom"), 4, { right: -50, top: 50, opacity: 0, ease: Power4.easeOut });
	var fromLeft = $tm.staggerFrom($(".from-left"), 2, { left: -50,  opacity: 0, ease: Power4.easeOut }, 0.5);
	var titleFromRight = $tm.staggerFrom($(".line-from-right"), 1, { right: -50, opacity: 0, ease: Power2.easeOut }, 0.5);
	var smallToBig = new TimelineMax()
										.from($(".catchphrase"), 4, { scale: 0, delay: 0.5 })
										.from($(".catchphrase2"), 4, { scale: 0, ease: Power4.easeIn }, "-=4")
										.to($(".catchphrase2"), 2, { scale: 1.2, ease: Elastic.easeOut.config(2, 0.5) })
										.from(downArrow, 2, { opacity: 0, bottom: '7%', ease: Elastic.easeOut.config(2.5, 1.5), repeat: -1 }, "+=0.5");
	var cloudAnimation1 = $tm.to($(".clouds_one"), 400, { repeat: -1, right: widthScreen + 500 });
	var cloudAnimation2 =	$tm.from($(".clouds_two"), 175, { repeat: -1, right: widthScreen - 100 })
	var cloudAnimation3 = $tm.to($(".clouds_three"), 400, { repeat: -1, left: widthScreen + 700 })
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
	var hrTweenProductTab = $tm.to($('.hr-anim-product-tab'), 5, { width: "70%" });
	var hrTweenProductsOpus = $tm.to($('.hr-anim-product-opus'), 5, { width: "70%" });
	var hrTweenResourcesSection2 = $tm.to($('.hr-anim-resources-section-2'), 5, { width: "80%" });
	var hrTweenResourcesForm = $tm.to($('.hr-anim-resources-form'), 5, { width: "95%" });
	var hrTweenResourcesSection4 = $tm.to($('.hr-anim-resources-section-4'), 5, { width: "75%" });
	// var hrTweenResourcesSection6 = $tm.to($('.hr-anim-resources-section-6'), 5, { width: "80%" });
	var hrTweenWhyUsSection2 = $tm.to($('.hr-anim-why-us-section-2'), 5, { width: "85%" });
	var hrTweenWhyUsSection3 = $tm.to($('.hr-anim-why-us-section-3'), 5, { width: "70%" });
	var hrTweenWhyUsSection4 = $tm.to($('.hr-anim-why-us-section-4'), 5, { width: "72%" });
	var hrTweenWhyUsSection5 = $tm.to($('.hr-anim-why-us-section-5'), 5, { width: "68%" });
	var hrTweenWhyUsSection6 = $tm.to($('.hr-anim-why-us-section-6'), 5, { width: "43%" });
	var whyUsIntroAnim = new TimelineMax()
												.staggerFrom($(".phrase"), 2, { opacity: 0, ease: Power1.easeOut, scale: 0 }, 1)
												.staggerFrom($(".phrase-right"), 2, { opacity: 0, ease: Power1.easeOut, scale: 0 }, 1, "-=1");
	var whyUsSection2 = $tm.staggerFrom($('.opacity'), 3, { opacity: 0 }, 0.5);
	var whyUsSection3BoxLeft = $tm.from($('.box-left'), 3, { opacity: 0, left: -200 });
	var whyUsSection3BoxRight = $tm.from($('.box-right'), 3, { opacity: 0, right: -200 });
	var whyUsSection3BoxLeft1 = $tm.from($('.box-left1'), 3, { opacity: 0, left: -200 });
	var whyUsSection3BoxRight1 = $tm.from($('.box-right1'), 3, { opacity: 0, right: -200 });
	var whyUsSection6 = $tm.staggerFrom($('#why-us-section-6 p'), 3, { opacity: 0, scale: 0.5, right: -300 }, 1);
	var productsSection2 = new TimelineMax()
												.from($('#products-section-2 .black-background'), 2, { left: -100, opacity: 0 })
												.from($('#products-section-2 .grey-background'), 2, { right: -100, opacity: 0 }, "-=2")
												.staggerFrom($('#products-section-2 .black-background li'), 2, { left: -100, opacity: 0 }, -0.5, "-=1")
												.from($('#products-section-2 .grey-background .col-xs-6'), 2, { right: -100, opacity: 0 }, "-=2")
												.from($('#products-section-2 .grey-background .col-xs-4'), 2, { opacity: 0, scale: 0 }, "-=2")
												.from($('#products-section-2 .tab-content'), 2, { opacity: 0, scale: 0 })
	var productsSection3 = new TimelineMax()
												.from($('.opus-left'), 2, { opacity: 0, left: 200 })
												.from($('.opus-right'), 2, { opacity: 0, right: 200 }, "-=2");

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
	var homeScene2 = new ScrollMagic.Scene({triggerElement: "#home-section-2", offset: -100})
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
	var homeScene7 = new ScrollMagic.Scene({triggerElement: "#home-section-8", offset: -100})
													.setTween(partnersAnimation)
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
	var productsScene2 = new ScrollMagic.Scene({triggerElement: "#products-section-2", offset: -50})
													.setTween(productsSection2)
													.addTo(productsController);
	var productsScene3 = new ScrollMagic.Scene({triggerElement: "#products-section-2 .tab-content", duration: 500})
													.setTween(hrTweenProductTab)
													.addTo(productsController);
	var productsScene4 = new ScrollMagic.Scene({triggerElement: "#products-section-3", offset: 100})
													.setTween(productsSection3)
													.addTo(productsController);
	var productsScene5 = new ScrollMagic.Scene({triggerElement: "#opus", duration: 500})
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
	var whyUsScene1 = new ScrollMagic.Scene({triggerElement: "#why-us-section-2", duration: 500})
													.setTween(hrTweenWhyUsSection2)
													.addTo(whyUsController);
	var whyUsScene2 = new ScrollMagic.Scene({triggerElement: "#why-us-section-2", offset: -100})
													.setTween(whyUsSection2)
													.addTo(whyUsController);										
	var whyUsScene3 = new ScrollMagic.Scene({triggerElement: "#why-us-section-3", duration: 500})
													.setTween(hrTweenWhyUsSection3)
													.addTo(whyUsController);
	var whyUsScene4 = new ScrollMagic.Scene({triggerElement: "#why-us-section-3", offset: 0})
													.setTween([whyUsSection3BoxLeft, whyUsSection3BoxRight])
													.addTo(whyUsController);
	var whyUsScene5 = new ScrollMagic.Scene({triggerElement: "#why-us-section-3", offset: 600})
													.setTween([whyUsSection3BoxLeft1, whyUsSection3BoxRight1])
													.addTo(whyUsController);
	var whyUsScene6 = new ScrollMagic.Scene({triggerElement: "#why-us-section-4", duration: 500})
													.setTween(hrTweenWhyUsSection4)
													.addTo(whyUsController);
	var whyUsScene7 = new ScrollMagic.Scene({triggerElement: "#why-us-section-5", duration: 500})
													.setTween(hrTweenWhyUsSection5)
													.addTo(whyUsController);
	var whyUsScene8 = new ScrollMagic.Scene({triggerElement: "#why-us-section-6", duration: 500})
													.setTween(hrTweenWhyUsSection6)
													.addTo(whyUsController);
	var whyUsScene9 = new ScrollMagic.Scene({triggerElement: "#why-us-section-6", offset: 100})
													.setTween(whyUsSection6)
													.addTo(whyUsController);



});

