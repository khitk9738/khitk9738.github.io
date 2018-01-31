<html lang="en">
<head>
	<title>AKSHIT SHARMA</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="keywords" content="Designer & Developer of Websites,Web Designing,Android Development,khitk9738,khitkwizard,akshitwizard,akshit,akshit sharma,image processing,fabchat,chat app,music player,attendance manager,social network,eye vison,eyevis,python" />
	<script type="application/x-javascript">
		addEventListener("load", function () {
			setTimeout(hideURLbar, 0);
		}, false);

		function hideURLbar() {
			window.scrollTo(0, 1);
		}
	</script>
	<!-- Custom Theme files -->
	<link href="css/bootstrap.css" type="text/css" rel="stylesheet" media="all">
	<!--gallery -->
	<link type="text/css" rel="stylesheet" href="css/cm-overlay.css" />
	<!-- //gallery -->
	<link href="css/style.css" type="text/css" rel="stylesheet" media="all">
	<link href="css/font-awesome.css" rel="stylesheet">
	<!-- font-awesome icons -->
	<!--//Custom Theme files-->
	<!-- js -->
	<script src="js/jquery-2.2.3.min.js"></script>
	<!-- //js -->
	<!-- web-fonts -->
	<link href="//fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i" rel="stylesheet">
	<link href="//fonts.googleapis.com/css?family=Arsenal:400,400i,700,700i" rel="stylesheet">
	<!-- //web-fonts -->
</head>

<body>
	<!-- banner -->
	<div id="home" class="banner">
		<div class="banner-agileinfo">
			<!-- header -->
			<div class="header">
				<div class="container">
					<div class="menu">
						<a href="" id="menuToggle"> <span class="navClosed"></span> </a>
						<nav>
							<a href="#home" class="active scroll">Home</a>
							<a href="#about" class="scroll">About Me</a>
							<a href="#skills" class="scroll">Skills</a>
							<a href="#gallery" class="scroll">My Work</a>
							<a href="#services" class="scroll">Services</a>
							<a href="#contact" class="scroll">Contact</a>
						</nav>
						<script>
							(function ($) {
								// Menu Functions
								$(document).ready(function () {
									$('#menuToggle').click(function (e) {
										var $parent = $(this).parent('.menu');
										$parent.toggleClass("open");
										var navState = $parent.hasClass('open') ? "hide" : "show";
										$(this).attr("title", navState + " navigation");
										// Set the timeout to the animation length in the CSS.
										setTimeout(function () {
											console.log("timeout set");
											$('#menuToggle > span').toggleClass("navClosed").toggleClass("navOpen");
										}, 200);
										e.preventDefault();
									});
								});
							})(jQuery);
						</script>

					</div>
					<div class="clearfix"> </div>
				</div>
			</div>
			<!-- //header -->
			<div class="banner-text">
				<div class="container">
					<h2 class="w3ls-bnrtext">Akshit</h2>
					<h2 class="w3ls-bnrtext"> <span> Developer </span>& <span>Designer</span></h2>
					<p class="w3ls-p">an interactive web ,ML & android developer with the passion for creativity</p>
					<a href="#about" class="buy btn-wayra scroll">Explore my work</a>
				</div>
			</div>
		</div>
	</div>
	<!-- //banner -->
	<!-- about -->
	<div class="agile-about w3ls-section text-center" id="about">
		<div class="container">
			<h3 class="agileits-title">about me</h3>
			<div class="agileits-about-grid">
				<p>Student at MNNIT Allahabad,loves development and always looking for something fresh & new.</p>
				<p>No Place Like 127.0.0.1 </p> 
			</div>
			<a href="#contact" class="wthree- about-link scroll">hire me</a>
		</div>
	</div>
	<!-- //about -->
	<!-- about-bottom -->
	<div class="agileits-about-btm">
		<div class="container">
			<div class="w3-flex">
			<div class="col-md-4 col-sm-4 col-xs-12 ab1 agileits-about-grid1">
				<span class="fa fa-trophy" aria-hidden="true"></span>
				<h4 class="agileinfo-head">Hobbies</h4>
				<h5>Blogging</h5>
				<p>akshitwizard.blogspot.com</p>
				<h5>Delving into the solutions for real life problems</h5>
				<p>Loves to work & have a zeal and passion for solving real problems</p>
				<h5>Dancing and choreography</h5>
				<p>participated,prepared ,organized ,mangaged & conducted many dance competions</p>
			</div>
			<div class="col-md-4 col-sm-4 ab1 agileits-about-grid2">
				<span class="fa fa-graduation-cap  wthree-title-list" aria-hidden="true"></span>
				<h4 class="agileinfo-head">education</h4>
				<h5>Graduation</h5>
				<p>B.Tech - MNNIT Allahabad (2015-present)</p>
				<p>8.33 CPI</p>
				<h5>XII (CBSE)</h5>
				<p>K.V. Punjab Lines , Meerut Cantt, U.P. (2014-15)</p>
				<p>94.60 %</p>
				<h5>X (CBSE)</h5>
				<p>K.V. Punjab Lines , Meerut Cantt, U.P. (2012-13)</p>
				<p>10.0 CPI</p>
			</div>
			<div class="col-md-4 col-sm-4 ab1 agileits-about-grid3">
				<span class="fa fa-shield  wthree-title-list" aria-hidden="true"></span>
				<h4 class="agileinfo-head">Areas Of Interest</h4>
				<h5>Web Development (Front & Back-end)</h5>
				<p>Databases,JSON,Php,XML,HTML</p>
				<h5>Android App Development</h5>
				<p>JAVA,XML,Databases,JSON,Firebase,GCM</p>
				<h5>Image Procesing</h5>
				<p>Tensorflow,CNN,CV</p>
			</div>
			<div class="clearfix"></div>
			</div>
		</div>
	</div>
	<!-- //about-bottom -->
	<!-- skills -->
	<div class="agile-service w3ls-section" id="skills">
		<div class="container">
			<div class="col-md-5 w3_agileits-service-left">
				<h3 class="agileits-title">skills</h3>
				<p>Programming Languages: C , C++ & JAVA Core (Basic),HTML , XML , CSS , PHP,Android Studio(IDE),Image Processing,Python</p>
			</div>
			<div class="col-md-7 skills-right">
				<div class="vertical-skills  pull-right xs-center">
					<ul class="list-inline">
						<li>
							<div class="skill" style="height:100%; background:#ff9d0d;"><span class="value">100%</span></div><span class="title">HTML</span></li>
						<li>
							<div class="skill" style="height:90%; background:#b32eca;"><span class="value">90%</span></div><span class="title">PHP</span></li>
						<li>
							<div class="skill" style="height:90%; background:#009688;"><span class="value">90%</span></div><span class="title">Database</span></li>
						<li>
							<div class="skill" style="height:75%; background:#6361f0;"><span class="value">75%</span></div><span class="title">Image</span></li>
						<li>
							<div class="skill" style="height:80%; background:#6361f0;"><span class="value">80%</span></div><span class="title">Android</span></li>
						
						

					</ul>
				</div>
				
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
	<div class="w3ls-section agileits-gallery" id="gallery">
		<div class="container">
			<h3 class="agileits-title">MY work</h3>
			<div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
				<ul id="myTab" class="nav nav-tabs" role="tablist">
					<li role="presentation" class="active"><a href="#home-main" id="home-tab" role="tab" data-toggle="tab" aria-controls="home-main" aria-expanded="true">Show all</a></li>
					<li role="presentation"><a href="#learning" role="tab" id="learning-tab" data-toggle="tab" aria-controls="learning">Web </a></li>
					<li role="presentation"><a href="#playing" role="tab" id="playing-tab" data-toggle="tab" aria-controls="playing">Android</a></li>
					<li role="presentation"><a href="#painting" role="tab" id="painting-tab" data-toggle="tab" aria-controls="painting">Image Processing</a></li>
				</ul>
				<div id="myTabContent" class="tab-content">
					<div role="tabpanel" class="tab-pane fade in active" id="home-main" aria-labelledby="home-tab">
						<div class="w3_tab_img">
							<div class="col-sm-3 w3_tab_img_left">
								<div class="demo">
									<a class="cm-overlay" href="images/g1.jpg">
										<figure class="imghvr-shutter-in-out-diag-2"><img src="images/g1.jpg" alt=" " class="img-responsive" />
										</figure>
									</a>
								</div>
								<div class="agile-gallery-info">
									<h5><a href="https://github.com/khitk9738/Smart-Scene-Recognition-">Scene Recognition</h5>
									<p> </p>
								</div>
							</div>
							<div class="col-sm-3 w3_tab_img_left">
								<div class="demo">
									<a class="cm-overlay" href="images/g2.jpg">
										<figure class="imghvr-shutter-in-out-diag-2"><img src="images/g2.jpg" alt=" " class="img-responsive" />
										</figure>
									</a>
								</div>
								<div class="agile-gallery-info">
									<h5><a href="https://github.com/khitk9738/CollegeNetwork">CollegeBuddy</h5>
									<p>  </p>
								</div>
							</div>
							<div class="col-sm-3 w3_tab_img_left">
								<div class="demo">
									<a class="cm-overlay" href="images/g3.jpg">
										<figure class="imghvr-shutter-in-out-diag-2"><img src="images/g3.jpg" alt=" " class="img-responsive" />
										</figure>
									</a>
								</div>
								<div class="agile-gallery-info">
									<h5><a href="https://github.com/khitk9738/EyeVis">EyeVis</h5>
									<p></p>
								</div>
							</div>
							<div class="col-sm-3 w3_tab_img_left">
								<div class="demo">
									<a class="cm-overlay" href="images/g4.jpg">
										<figure class="imghvr-shutter-in-out-diag-2"><img src="images/g4.jpg" alt=" " class="img-responsive" />
										</figure>
									</a>
								</div>
								<div class="agile-gallery-info">
									<h5><a href="https://github.com/khitk9738/FabChat">FabChat</h5>
									<p> </p>
								</div>
							</div>
							<div class="col-sm-3 w3_tab_img_left">
								<div class="demo">
									<a class="cm-overlay" href="images/g5.jpg">
										<figure class="imghvr-shutter-in-out-diag-2"><img src="images/g5.jpg" alt=" " class="img-responsive" />
										</figure>
									</a>
								</div>
								<div class="agile-gallery-info">
									<h5><a href="https://github.com/khitk9738/FilmyKeeda">FilmyKeeda</h5>
									<p> </p>
								</div>
							</div>
							<div class="col-sm-3 w3_tab_img_left">
								<div class="demo">
									<a class="cm-overlay" href="images/g6.jpg">
										<figure class="imghvr-shutter-in-out-diag-2"><img src="images/g6.jpg" alt=" " class="img-responsive" />
										</figure>
									</a>
								</div>
								<div class="agile-gallery-info">
									<h5><a href="https://github.com/khitk9738/Khitk_MuSic_HatK">Khitk-Music</h5>
									<p> </p>
								</div>
							</div>
							<div class="col-sm-3 w3_tab_img_left">
								<div class="demo">
									<a class="cm-overlay" href="images/g7.jpg">
										<figure class="imghvr-shutter-in-out-diag-2"><img src="images/g7.jpg" alt=" " class="img-responsive" />
										</figure>
									</a>
								</div>
								<div class="agile-gallery-info">
									<h5><a href="https://github.com/khitk9738/Jarvis">Jarvis</h5>
									<p> </p>
								</div>
							</div>
							<div class="col-sm-3 w3_tab_img_left">
								<div class="demo">
									<a class="cm-overlay" href="images/g8.jpg">
										<figure class="imghvr-shutter-in-out-diag-2"><img src="images/g8.jpg" alt=" " class="img-responsive" />
										</figure>
									</a>
								</div>
								<div class="agile-gallery-info">
									<h5><a href="https://github.com/khitk9738/Attendance Manager">Attendance Manager</h5>
									<p> </p>
								</div>
							</div>
							<div class="clearfix"> </div>
						</div>
					</div>
					<div role="tabpanel" class="tab-pane fade" id="learning" aria-labelledby="learning-tab">
						<div class="w3_tab_img">
							<div class="col-sm-3 w3_tab_img_left">
								<div class="demo">
									<a class="cm-overlay" href="images/g2.jpg">
										<figure class="imghvr-shutter-in-out-diag-2"><img src="images/g2.jpg" alt=" " class="img-responsive">
										</figure>
									</a>
								</div>
								<div class="agile-gallery-info">
									<h5><a href="https://github.com/khitk9738/CollegeNetwork">CollegeBuddy</h5>
									<p></p>
								</div>
							</div>
							<div class="col-sm-3 w3_tab_img_left">
								<div class="demo">
									<a class="cm-overlay" href="images/g7.jpg">
										<figure class="imghvr-shutter-in-out-diag-2"><img src="images/g7.jpg" alt=" " class="img-responsive">
										</figure>
									</a>
								</div>
								<div class="agile-gallery-info">
									<h5><a href="https://github.com/khitk9738/Jarvis">Jarvis</h5>
									<p> </p>
								</div>
							</div>
							<div class="clearfix"> </div>
						</div>
					</div>
					<div role="tabpanel" class="tab-pane fade" id="playing" aria-labelledby="playing-tab">
						<div class="w3_tab_img">
							<div class="col-sm-3 w3_tab_img_left">
								<div class="demo">
									<a class="cm-overlay" href="images/g4.jpg">
										<figure class="imghvr-shutter-in-out-diag-2"><img src="images/g4.jpg" alt=" " class="img-responsive">
										</figure>
									</a>
								</div>
								<div class="agile-gallery-info">
									<h5><a href="https://github.com/khitk9738/FabChat">FabChat</h5>
									<p> </p>
								</div>
							</div>
							<div class="col-sm-3 w3_tab_img_left">
								<div class="demo">
									<a class="cm-overlay" href="images/g5.jpg">
										<figure class="imghvr-shutter-in-out-diag-2"><img src="images/g5.jpg" alt=" " class="img-responsive">
										</figure>
									</a>
								</div>
								<div class="agile-gallery-info">
									<h5><a href="https://github.com/khitk9738/FilmyKeeda">Filmykeeda</h5>
									<p> </p>
								</div>
							</div>
							<div class="col-sm-3 w3_tab_img_left">
								<div class="demo">
									<a class="cm-overlay" href="images/g6.jpg">
										<figure class="imghvr-shutter-in-out-diag-2"><img src="images/g6.jpg" alt=" " class="img-responsive">
										</figure>
									</a>
								</div>
								<div class="agile-gallery-info">
									<h5><a href="https://github.com/khitk9738/Khitk_MuSic_HatK">Khitk-Music</h5>
									<p> </p>
								</div>
							</div>
							<div class="col-sm-3 w3_tab_img_left">
								<div class="demo">
									<a class="cm-overlay" href="images/g8.jpg">
										<figure class="imghvr-shutter-in-out-diag-2"><img src="images/g8.jpg" alt=" " class="img-responsive">
										</figure>
									</a>
								</div>
								<div class="agile-gallery-info">
									<h5><a href="https://github.com/khitk9738/Attendance Manager">Attendance Manager</h5>
									<p> </p>
								</div>
							</div>
							<div class="clearfix"> </div>
						</div>
					</div>
					<div role="tabpanel" class="tab-pane fade" id="painting" aria-labelledby="painting-tab">
						<div class="w3_tab_img">
							<div class="col-sm-3 w3_tab_img_left">
								<div class="demo">
									<a class="cm-overlay" href="images/g1.jpg">
										<figure class="imghvr-shutter-in-out-diag-2"><img src="images/g1.jpg" alt=" " class="img-responsive">
										</figure>
									</a>
								</div>
								<div class="agile-gallery-info">
									<h5><a href="https://github.com/khitk9738/Smart-Scene-Recognition-">Scene Recognition</h5>
									<p>  </p>
								</div>
							</div>
							<div class="col-sm-3 w3_tab_img_left">
								<div class="demo">
									<a class="cm-overlay" href="images/g3.jpg">
										<figure class="imghvr-shutter-in-out-diag-2"><img src="images/g3.jpg" alt=" " class="img-responsive">
										</figure>
									</a>
								</div>
								<div class="agile-gallery-info">
									<h5><a href="https://github.com/khitk9738/EyeVis">EyeVis</h5>
									<p> </p>
								</div>
							</div>
							<div class="clearfix"> </div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<script src="js/jquery.tools.min.js"></script>
		<script src="js/jquery.mobile.custom.min.js"></script>
		<script src="js/jquery.cm-overlay.js"></script>
		<script>
			$(document).ready(function () {
				$('.cm-overlay').cmOverlay();
			});
		</script>
	</div>
	<!-- //menu -->
	<!-- services -->
	<div class="w3ls-section services" id="services">
		<div class="container">
			<h3 class="agileits-title text-center">Interests</h3>
			<div class="services-w3ls-row agileits-w3layouts service1 text-center">
				<h5>Web Development</h5>
				<p>CollegeBuddy,Jarvis,ProfilePage</p>
				<div class="s-top">
					<span class="fa fa-laptop" aria-hidden="true"></span>
				</div>
			</div>
			<div class="services-w3ls-row agileits-w3layouts middlegrid-w3ls">
				<div class="col-md-4 services-grid agileits-w3layouts service2">
					<div class="col-md-10 w3ls-sub-text">
						<h5>Databses</h5>
						<p>FabChat,CollegeBuddy,EyeVis</p>
					</div>
					<div class="col-md-2 sub-icon">
						<span class="fa fa-caret-square-o-up" aria-hidden="true"></span>
					</div>
				</div>
				<div class="col-md-4 services-grid img-agileits">
					<img src="images/services.jpg" class="img-responsive" alt="" />
				</div>
				<div class="col-md-4 services-grid agileits-w3layouts service3">
					<div class="col-md-2 sub-icon">
						<span class="fa fa-grav" aria-hidden="true"></span>
					</div>
					<div class="col-md-10 w3ls-sub-text">
						<h5>Android Development</h5>
						<p>EyeVis,FabChat,FilmyKeeda,Attendance Manger,Music Player</p>																	
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
			<div class="services-w3ls-row agileits-w3layouts service4">
				<div class="s-top">
					<span class="fa fa-adjust" aria-hidden="true"></span>
				</div>
				<h5>Image Processing</h5>
				<p>Scene Recognition,EyeVis,Tensorflow</p>
			</div>
		</div>
	</div>
	<!-- //services -->
	<!-- contact -->
	<div class="contact-w3-agileits w3ls-section" id="contact">
		<div class="container">
			<h3 class="agileits-title cont-w3l">Feel free to contact me</h3>
			<div class="contact-main-w3ls">
				<div class="col-md-6  contact-left-w3ls">
					<div class="mail contact-grid-agileinfo">
						<div class="col-md-4 col-sm-4 col-xs-4 contact-icon-wthree">
							<h4>Mail me</h4>
						</div>
						<div class="col-md-8  col-sm-8 col-xs-8 contact-text-agileinfo">
							<a href="mailto:khitkwizard@gmail.com">khitkwizard@gmail.com</a><br>
							<a href="mailto:akshitsharma2811@gmail.com">akshitsharma2811@gmail.com</a>
						</div>
						<div class="clearfix"></div>
					</div>
					<div class="call contact-grid-agileinfo">
						<div class="col-md-4 col-sm-4 col-xs-4 contact-icon-wthree">
							<h4>Phone</h4>
						</div>
						<div class="col-md-8 col-sm-8 col-xs-8 contact-text-agileinfo">
							<p>+919519445867</p>
						</div>
						<div class="clearfix"></div>
					</div>
					<div class="contact-grid-agileinfo">
						<div class="col-md-4 col-sm-4 col-xs-4 contact-icon-wthree">
							<h4>Address</h4>
						</div>
						<div class="col-md-8 col-sm-8 col-xs-8 contact-text-agileinfo">
							<p>B-39/2 Gangadham Ganganagar<br> Meerut,UP-250001<br> India.
							</p>
						</div>
						<div class="clearfix"></div>
					</div>
					<div class="visit wthree-social-icons contact-grid-agileinfo">
						<div class="col-md-4 col-sm-4 col-xs-4 contact-icon-wthree">
							<h4>Follow me</h4>
						</div>
						<div class="col-md-8 col-sm-8 col-xs-8 contact-text-agileinfo">
							<ul class="w3-links">
								<li><a href="facebook.com/akshit.khitK"><i class="fa fa-facebook"></i></a></li>
								<li><a href="twitter.com/khitkwizard"><i class="fa fa-twitter"></i></a></li>
								<li><a href="linkedin.com/in/akshit-sharma-948a92134"><i class="fa fa-linkedin"></i></a></li>
								<li><a href="plus.google.com/u/0/+AkshitSharma_khitk"><i class="fa fa-google-plus"></i></a></li>
							</ul>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
				<div class="contact-main">
					<div class="col-md-6 agileits-main-right">
						
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
	</div>
	<!-- //contact -->
	<div class="agileits_w3layouts-footer">
		<p>© 2018 Akshit Sharma --- <a href="github.com/khitk9738"> khitk9738</a></p>
	</div>
	<!-- start-smooth-scrolling -->
	<script type="text/javascript" src="js/move-top.js"></script>
	<script type="text/javascript" src="js/easing.js"></script>
	<script type="text/javascript">
		jQuery(document).ready(function ($) {
			$(".scroll").click(function (event) {
				event.preventDefault();

				$('html,body').animate({
					scrollTop: $(this.hash).offset().top
				}, 1000);
			});
		});
	</script>
	<!-- //end-smooth-scrolling -->
	<!-- smooth-scrolling-of-move-up -->
	<script type="text/javascript">
		$(document).ready(function () {
			/*
			var defaults = {
				containerID: 'toTop', // fading element id
				containerHoverID: 'toTopHover', // fading element hover id
				scrollSpeed: 1200,
				easingType: 'linear' 
			};
			*/

			$().UItoTop({
				easingType: 'easeOutQuart'
			});

		});
	</script>
<script type="text/javascript" src="js/SmoothScroll.min.js"></script>
	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script src="js/bootstrap.js"></script>
</body>
</html>