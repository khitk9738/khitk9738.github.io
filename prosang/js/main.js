//==========================================================================
//
//								    ##
//								  ##  ##
//								##		##
//							  ##   KUBO	  ##
//								##		##
//								  ##  ##
//								    ##
//
//						   By j3dlab.com - 2014
//
//==========================================================================
//
//JS CONTENTS
//
//	Responsive Menu
//	Jquery appear
//	Responsive Menu
//	Scroll Functions
//	Main menu scroll to
//	HTML5 video
//	JqEasyTooltip
//	Testimonials slider
//	Who we are slider
//	Services slider
//	Work slider
//	Work Isotope
//	Open Portfolio
//	Close Portfolio
//	Process animations
//	Team Isotope
//	Google Maps
//	IE Fix
//	Blog Isotope + Masonry
//	Google analytics
//	Calculate position Menu
//	Elemet is on screen
//	Transition check functions

(function($) { "use strict";




$(window).load(function() {

	// CONTACT FORM
    $("#contactForm").submit(function (e) {
        $.post('sendEmail.php', $("#contactForm").serialize(), function (data) {
            if (data.status == 200) {
                console.log("OK FORM");
                $( "<div id='formMsg'><span class='fa fa-check-circle'></span><p>Message sent successfuly</p></div>").insertBefore($( "#contactForm" ));
                $( "#formMsg" ).slideDown( "fast" );
                $( "#contactForm" ).fadeTo( "fast", 0.2 );
                var timer = setInterval(function () {
                    console.log("REINICIA FORM")
                    clearInterval(timer);
                    $("#formMsg" ).slideUp( "fast" );
                    $( "#contactForm" ).fadeTo( "fast", 1 );
                }, 7000);
            } else {
                console.log("KO FORM")
                $( "<div id='formMsg'><span class='fa fa-exclamation-triangle'></span><p>There was an error. Please try again later.</p></div>").insertBefore($( "#contactForm" ));
                $( "#formMsg" ).slideDown( "fast" );
                $( "#contactForm" ).fadeTo( "fast", 0.2 );
            }
        }, 'json');
        return false;
    });


	///////////////////////////////////////////////////////////////////////////
	// Loader
	///////////////////////////////////////////////////////////////////////////


	$("#windowloader").transitioncss("transitionEndOpen","loaded",{duration:2000, easing:"cubic-bezier(0.86, 0, 0.07, 1)",delay:1000});

	$("#windowloader").off("transitionEndOpen").on( "transitionEndOpen", function(){
		$("body").removeClass('nonscroll');
		$("#windowloader").remove();
		$("#portfoliogrid").isotope('layout');
		$("#isotopeMembers").isotope('layout');
		$(".isotopeBlog").isotope('layout');
	});


	///////////////////////////////////////////////////////////////////////////
	// Jquery appear
	///////////////////////////////////////////////////////////////////////////

	$('.appear').appear();

	$(document.body).on('appear', '.appear', function(e, $affected) {
		// this code is executed for each appeared element
		var animation = $(this).data('animation');
		if(animation!=undefined){
			$(this).addClass($(this).data('animation'));
		}else{
			$(this).addClass('fadein');
		}

	});

	$(document.body).on('disappear', '.appear', function(e, $affected) {
		// this code is executed for each disappeared element
		var animation = $(this).data('animation');
		if(animation!=undefined){
			//$(this).removeClass($(this).data('animation'));
		}else{
			//$(this).removeClass('fadein');
		}
	});


	///////////////////////////////////////////////////////////////////////////
	// Responsive Menu
	///////////////////////////////////////////////////////////////////////////

	$('#responsivemenu').on('click', function() {
		$('#menucontainer').toggleClass('open');
	});


	///////////////////////////////////////////////////////////////////////////
	// Scroll Functions
	///////////////////////////////////////////////////////////////////////////

	var video=false;
	var animationactive=false;
	

	if($(window).scrollTop()!=0){
		calculatepositionmenu();
	};
	$(window).on('scroll',function(){

		//Top menu
		calculatepositionmenu();

		//Procces animation
		if($("#startContainer").length){
			if(($("#startContainer").isOnScreen()) && (animationactive==false)){
				animationactive = true;
				animationprocess();

			};
		};

		//select menu section
		$("body section").each(function (index) {
			if($(this).isOnScreen()){
				$('#mainMenu a').removeClass('select');
				$('#mainMenu a[href="#'+$(this).attr('id')+'"]').addClass('select');
			}
		});
	});


	///////////////////////////////////////////////////////////////////////////
	// Main menu scroll to
	///////////////////////////////////////////////////////////////////////////

	$("#mainMenu a,#principalheader a").on('click', function() {
		$("#menucontainer").removeClass('open');
		if($(this).data("scrollto")){
			$('html, body').animate({
				scrollTop: $($(this).data("scrollto")).offset().top
			}, 2000);
			return false;
		}
	});

	///////////////////////////////////////////////////////////////////////////
	// HTML5 video
	///////////////////////////////////////////////////////////////////////////
	if($('#vjs-test-fluid-intrinsic-ratio').length){
		videojs.options.flash.swf = "js/video-js.swf"
		videojs("#vjs-test-fluid-intrinsic-ratio").ready(function(){
			var myPlayer = this;
			$("#vjs-test-fluid-intrinsic-ratio").on("click", function(){
				 var whereYouAt = myPlayer.currentTime();
			  if(whereYouAt==0)
				myPlayer.play();
			});

		});


	}
	///////////////////////////////////////////////////////////////////////////
	// JqEasyTooltip
	///////////////////////////////////////////////////////////////////////////


	$('.customeasytip').jqeasytooltip({
		theme:"tipthemesquarecustom"
	});

	$('.customeasytiptint').jqeasytooltip({
		theme:"tipthemesquarecustomtint"
	});


	///////////////////////////////////////////////////////////////////////////
	// Testimonials slider
	///////////////////////////////////////////////////////////////////////////


	var $testimonialslider = $("#testimonialslider");

	if($testimonialslider.length){
		$testimonialslider.owlCarousel({
			loop : true,
			animateIn: 'fadeUpIn',
			animateOut: 'fadeUpOut',
			autoplay: true,
			autoplayTimeout: 4000,
			margin : 70,
			navigation : false,
			items : 1,
			transitionStyle : "fadeUp"
		});
	};

	///////////////////////////////////////////////////////////////////////////
	// Who we are slider
	///////////////////////////////////////////////////////////////////////////

	var $sliderwe = $("#sliderwe");

	if($sliderwe.length){
		$sliderwe .owlCarousel({
			loop : true,
    		animateIn: 'backSlideIn',
			animateOut: 'backSlideOut',
			autoplay: true,
			autoplayTimeout: 4000,
			margin : 20,
			nav: false,
			items : 1
		});
	};

	///////////////////////////////////////////////////////////////////////////
	// Services slider
	///////////////////////////////////////////////////////////////////////////

	var $serviceSlider = $("#serviceSlider");

	if($serviceSlider.length){
		$serviceSlider.owlCarousel({
			// Most important owl features
			items : 3,
			itemElement : "li",
			stageElement : "ul",
			nav : true,
			navText : [""],
			dots : true,
		    responsive:{
		        1199:{
		            items:3,
		        },
		        958:{
		            items:2,
		        },
		        768:{
		            items:1,
		        },
		        0:{
		            items:1,
		        }
		    }
		});
	};


	///////////////////////////////////////////////////////////////////////////
	// Work slider
	///////////////////////////////////////////////////////////////////////////

	var $workslider = $("#workslider");

	if($workslider.length){
		$workslider.owlCarousel({
			loop : true,
			autoplay: true,
			autoplayTimeout: 4000,
			nav : false,
			dots : false,
			items : 1,
			transitionStyle : "fade"
		});
	}

	///////////////////////////////////////////////////////////////////////////
	// Work Isotope
	///////////////////////////////////////////////////////////////////////////


	$( function() {
	  // init Isotope
	  var $container = $('#portfoliogrid').isotope({
		itemSelector: '.item',
		columnWidth:'.item',
		layoutMode: 'fitRows',
		sortBy : 'original-order'

	  });
	  // bind filter button click
	  $('#portfolionav a').on( 'click', function(e) {
		var filterValue = $( this ).attr('data-filter-value');
		$container.isotope({ filter: filterValue });
		e.preventDefault();
	  });
	  //change is-checked class on buttons
	  $('#portfolionav a').each( function( i, buttonGroup ) {
		$('#portfolionav a').on( 'click', function() {
		  $('#portfolionav').find('.is-checked').removeClass('is-checked');
		  $(this).addClass('is-checked');
		});
	  });
	});

	///////////////////////////////////////////////////////////////////////////
	// Open Portfolio
	///////////////////////////////////////////////////////////////////////////


	$('html.desktop #portfoliogrid .item').on('click',function(){

		var $itemActive = $(this);
		$itemActive.addClass("portfolioActive");
		var img = $itemActive.find('img').attr('src');
		$("#workLoader").remove();
		$("body").prepend("<div id='workLoader'><span class='iconloader'></span><div class='front'><img src='"+img+"'/></div><div class='back'><div id='workdetailcontainer' class='centerContainer'></div><div id='wrkclosebtn'><span class='fa fa-times'></span></div></div></div>");


		var $loader = $("#workLoader");

		$loader.on("customdestroy",function(){
			$(this).remove();
		});

		//Reset Anims
		$("#workLoader .iconloader").css({"display":"block"});
		$("#workLoader").css({"opacity":"0"});

		//Position
		$loader.offset($itemActive.offset());
		//Size
		$loader.css({"height": $itemActive.css("height"),"width":$itemActive.css("width")});


		if($itemActive.hasClass("width2")){
			$loader.addClass("width2");
		}else{
			$loader.removeClass("width2");
		}


		// Animation
		$loader.animate({
			opacity: 1
		  }, 300, function() {
			setTimeout(function() {
				showWork();
			}, 1000);
		});


		var animReady = false;
		var url = $itemActive.find(".title").attr('href');

		$.ajax({
		  url: url + " #workdetail"
		}).done(function(data) {
			var $parsed = $('<div/>').append(data);
			var section = $parsed.find('#workdetail');
			var scripts = $parsed.find('*[data-scriptdetail]');

			console.log(section);
			console.log(scripts);

			$("#workLoader .back #workdetailcontainer").html(section);
			$("#workLoader .back #workdetailcontainer").append(scripts);


		  showWork();
		});


		function showWork(){

			if(animReady == false){
				animReady = true;
			}else{

				$("#workLoader").off("transitionEndOpen").on( "transitionEndOpen", function(){
					$("body").css({"pointer-events":"none"});
					$("#workLoader").css({"pointer-events":"auto"});

					$itemActive.removeClass("portfolioActive");

					//HIDE GENERAL SCROLL
					$("body").css({"overflow":"hidden"});
					$("#workLoader .back").css({"overflow":"auto"});

				});

				if($('body').hasClass('IE9')){
					$("#workLoader").css("opacity", 0).animate({opacity: 1},800);
					//$loader.transitioncss("transitionEndOpen","scale100",{duration:1});
					$("#workLoader").addClass("scale100").trigger("transitionEndOpen");
				}else{
					$loader.transitioncss("transitionEndOpen","scale100",{duration:800, easing:"cubic-bezier(0.86, 0, 0.07, 1)"});
				}


				$loader.css({"top": getscrollTop()})
				$("#workLoader .iconloader").css({"display":"none"});

			};
		};

		///////////////////////////////////////////////////////////////////////////
		// Close Portfolio
		///////////////////////////////////////////////////////////////////////////

		$('#workLoader .back .fa-times').on('click',function(){
			$("body").css({"pointer-events":"auto"});

			$("#workLoader .back").css({"overflow":"hidden"});

			$loader.transitioncss("transitionEndClose","scale100",{duration:800, easing:"cubic-bezier(0.86, 0, 0.07, 1)"});


			$("#workLoader").offset($itemActive.offset());
			$("#workLoader").css({"height": $itemActive.css("height"),"width":$itemActive.css("width")});

			$("#workLoader .front").css({"background": "transparent"})
			$("#workLoader .front img").css({"opacity": "1"});


			//SHOW GENERAL SCROLL
			$("body").css({"overflow":"auto"});

			$("#workLoader").off("transitionEndClose").on("transitionEndClose", function(){
				$("#workLoader").trigger("customdestroy");
			});
		});
	});


	//portfolio for mobile & tablet
	$('html.tablet #portfoliogrid .item, html.mobile #portfoliogrid .item').on('click',function(){
		window.location=$(this).find(".title").attr("href");
	});

	$('html.desktop #portfoliogrid .item a').on('click',function(e){e.preventDefault();});


	function getscrollTop(){
		return $(document).scrollTop();
	}



	///////////////////////////////////////////////////////////////////////////
	// Process animations
	///////////////////////////////////////////////////////////////////////////

	$("#startContainer #slogan1").html($("#process .first h5").not("#slogan1").html());
	$("#startContainer #numbers span").html($("#process .first .number span").not("#numbers span").html());
	$("#startContainer .start").css({"opacity":"1"});

	function animationprocess(){


			var vtime = 1;
			var time = 1000;
			var delay = 200;
			var speed = 0.3;

			setTimeout(function(){
				$("#startContainer").addClass("second");
				$("#startContainer #slogan1").html($("#process .second h5").not("#slogan1").html());
				$("#startContainer #numbers span").html($("#process .second .number span").not("#numbers span").html());
			},time + delay);

			setTimeout(function(){
				$("#startContainer").addClass("third");
				$("#startContainer #slogan1").html($("#process .third h5").not("#slogan1").html());
				$("#startContainer #numbers span").html($("#process .third .number span").not("#numbers span").html());

			},time*2 + delay);

			setTimeout(function(){
				$("#startContainer").addClass("fourth");
				$("#startContainer #slogan1").html($("#process .fourth h5").not("#slogan1").html());
				$("#startContainer #numbers span").html($("#process .fourth .number span").not("#numbers span").html());


			},(time*3)+delay);

			setTimeout(function(){
				$("#startContainer").css({
					"opacity":"0"
				})
			},(time*4)+delay);

			setTimeout(function(){
				$(".first").addClass('rotatenone');
			},(time*4)+delay+400);

			setTimeout(function(){
				$(".second").addClass('rotatenone');
			},(time*4)+delay+500);

			setTimeout(function(){
				$(".third").addClass('rotatenone');
			},(time*4)+delay+600);

			setTimeout(function(){
				$(".fourth").addClass('rotatenone');
			},(time*4)+delay+700);

	};


	///////////////////////////////////////////////////////////////////////////
	// Team Isotope
	///////////////////////////////////////////////////////////////////////////


	$( function() {
		// init Isotope
		var $container = $('#isotopeMembers').isotope({
			itemSelector: '.member',
			layoutMode: 'fitRows'
		});
		// bind filter button click
		$('#memberfilter a').on( 'click', function() {
			var filterValue = $( this ).attr('data-filter-value');
			$container.isotope({ filter: filterValue });
			return false;
		});
		//change is-checked class on buttons
		$('#memberfilter a').each( function( i, buttonGroup ){
			$('#memberfilter a').on( 'click', function() {
				$('#memberfilter').find('.is-checked').removeClass('is-checked');
				$(this).addClass('is-checked');
			});
		});
	});


	///////////////////////////////////////////////////////////////////////////
	// PARALLAX
	///////////////////////////////////////////////////////////////////////////
	if($('#whatwedo').length){
		$('#whatwedo').parallax("50%", 0.5);
	};

   	///////////////////////////////////////////////////////////////////////////
	// Google Maps
	///////////////////////////////////////////////////////////////////////////

	var MyLat = 40.6700;
	var MyLong = -73.9400;
	var MyMarkerImage = 'img/map-marker.png';




    function loadScript(src,callback){
	    var script = document.createElement("script");
	    script.type = "text/javascript";
	    if(callback)script.onload=callback;
	    document.getElementsByTagName("head")[0].appendChild(script);
	    script.src = src;
  	}


	if($('#gmap').length){
			loadScript('http://maps.googleapis.com/maps/api/js?v=3&sensor=false&callback=initGoogle',function(){});
	}


	window.initGoogle= function() {
		 // The latitude and longitude to center the map (always required)
		var myLatlng = new google.maps.LatLng(MyLat, MyLong); // New York

		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 15,

			// Disable map UI
			disableDefaultUI:false,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.SMALL
			},

			//Disable mouse wheel
			scrollwheel:false,

			// The latitude and longitude to center the map (always required)
			center: myLatlng,

			// How you would like to style the map.
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{"featureType":"all","elementType":"all","stylers":[ { "invert_lightness": true },{ "saturation": -100 },{ "visibility": "on" },{ "lightness": -20 }]}]
		};

		// Get the HTML DOM element that will contain your map
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('gmap');

		// Create the Google Map using out element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);


		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: MyMarkerImage
		});
	}



	///////////////////////////////////////////////////////////////////////////
	// IE Fix
	///////////////////////////////////////////////////////////////////////////

	var rv = -1;
	if (navigator.appName == 'Microsoft Internet Explorer'){
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null) rv = parseFloat( RegExp.$1 );
	}else if (navigator.appName == 'Netscape'){
		var ua = navigator.userAgent;
		var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)rv = parseFloat( RegExp.$1 );
	}if(rv>0){
		if(rv==9){$('body').addClass('IE'+rv);}
		$('body').addClass('IE');
	}


	///////////////////////////////////////////////////////////////////////////
	// Blog Isotope + Masonry
	///////////////////////////////////////////////////////////////////////////

	$( function() {
	  // init Isotope
	  var $container = $('.isotopeBlog').isotope({
		itemSelector: '.article'

	  });
	  // bind filter button click
	  $('#blogfilter a').on( 'click', function(e) {
		var filterValue = $(this).attr('data-filter-value');
		$container.isotope({ filter: filterValue });
		e.preventDefault();
	  });
	  //change is-checked class on buttons
	  $('#blogfilter a').each( function( i, buttonGroup ) {
		$('#blogfilter a').on( 'click', function() {
		  $('#blogfilter').find('.is-checked').removeClass('is-checked');
		  $(this).addClass('is-checked');
		});
	  });

	});

});


///////////////////////////////////////////////////////////////////////////
// Google analytics
///////////////////////////////////////////////////////////////////////////

var MyGoogleAnalyticsID = 'UA-51654726-1';
var MyWebURL = 'kubo.j3dlab.com';


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', MyGoogleAnalyticsID, MyWebURL);
ga('send', 'pageview');



///////////////////////////////////////////////////////////////////////////
// Calculate position Menu
///////////////////////////////////////////////////////////////////////////

function calculatepositionmenu(){
	if($('body.desktop')){
		var positionmenu = $('#menucontainer').position();
		if($(window).scrollTop() >= $('#menuWrapper').position().top && $(window).scrollTop()>0){
			$('#menucontainer').addClass('sticky');
		}else{
			$('#menucontainer').removeClass('sticky');
		}
	}
};

///////////////////////////////////////////////////////////////////////////
// Elemet is on screen
///////////////////////////////////////////////////////////////////////////

$.fn.isOnScreen = function(){

	var win = $(window);

	var viewport = {
		top : win.scrollTop(),
		left : win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();

	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();

	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};



///////////////////////////////////////////////////////////////////////////
// Transition check functions
///////////////////////////////////////////////////////////////////////////


$.fn.emulateTransitionEnd = function(transitionEnd,duration,delay) {

  var called = false, $el = this;
  $(this).one(transitionEnd, function() {called = true; });
  var callback = function() {
	if (!called) $($el).trigger(transitionEnd)
  };

   setTimeout(callback, duration+delay);
};

//add css propertys and emulate transitionend
$.fn.transition = function (transitionEnd, properties, options) {
  var defaults = {delay:0 , easing :''};
  options = $.extend({}, defaults, options);
  properties['transition'] = 'all ' + options.duration + 'ms ' + options.easing + ' ' + options.delay + 'ms ' ;
  properties['-webkit-transition'] = 'all ' + options.duration + 'ms ' + options.easing + ' ' + options.delay + 'ms ' ;
  properties['-ms-transition'] = 'all ' + options.duration + 'ms ' + options.easing + ' ' + options.delay + 'ms ' ;

  $(this).emulateTransitionEnd(transitionEnd, options.duration, options.delay );
  $(this).css(properties);
};

//add class and emulate transitionend
$.fn.transitioncss = function (transitionEnd, cssname, options) {
  var defaults = {delay:0 , easing :''};
  options = $.extend({}, defaults, options);

  $(this).css('transition','all ' + options.duration + 'ms ' + options.easing + ' ' + options.delay + 'ms ')
  $(this).css('-webkit-transition','all ' + options.duration + 'ms ' + options.easing + ' ' + options.delay + 'ms ')
  $(this).css('-ms-transition','all ' + options.duration + 'ms ' + options.easing + ' ' + options.delay + 'ms ')

  $(this).emulateTransitionEnd(transitionEnd, options.duration, options.delay );

  if($(this).hasClass(cssname)){
	$(this).removeClass(cssname);
  }else{
	$(this).addClass(cssname);
  }
};



})(jQuery);

