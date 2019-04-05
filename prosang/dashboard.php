<?php 


session_start();

//if($_SESSION["id"]!=$_GET["id"])
//	header("Location: login.php");
if (!isset($_SESSION['id']))
	header("Location: login.php");
//echo $_SESSION["id"];


?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
	<meta name="keywords" content="prosang, prosang 2019, mnnit, mnnit allahabad, robotics club, nit allahabad">
	<meta name="author" content="">
	<title>ProSang: MNNIT Allahabad </title>

	<!--\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		Fav icon
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

	<link rel="icon" type="image/png" href="favicon.png" />


	<!--\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		Google Fonts
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

	<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,700' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,700' rel='stylesheet' type='text/css'>
	<link href='style/style_index.css' rel='stylesheet' type='text/css'>

	<!--\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		CSS Files
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

	<link href="css/bootstrap.min.css" rel="stylesheet"/>
	<link href="css/font-awesome.min.css" type="text/css" rel="stylesheet" />
	<link href="css/owl.carousel.css" rel="stylesheet" />
	<link href="css/owl.theme.default.css" rel="stylesheet" />
	<link href="css/animate.css"  rel="stylesheet" />
	<link href="css/owl.custom.transitions.css"  rel="stylesheet" />
	
	<link href="css/jquery.appear.css"  rel="stylesheet" />
	<link href="css/custom.css"  rel="stylesheet" />
	<link href="css/main.css" rel="stylesheet"/>

	<!-- SLIDER REVOLUTION 4.x CSS SETTINGS -->
	<link rel="stylesheet" type="text/css" href="rs-plugin/css/settings.css" media="screen" />
	

	<style>
		#pay{
			border-style: solid;
			border-color:black;
			width:100px;
			height:100px;
			border-radius:50%;
			position:fixed;
			background-color:#01afaf;
			border-width:5px;
			bottom:2%;
			right:2%;
			z-index:1;
			color:white;
		}
		#pay:hover{
			width:120px;
			height:120px;
		}
	</style>
	
	  
 
</head>

<body style="min-height:100%" onload="myFunction()">


	<div style="background-color:#000000;padding:5px 5px 5px 5px;">
					<a href="index.html"><img style="max-width:80px;" alt="ProSang" src="img/menu-logo.png"></a>
					<button class="btn btn-default" style="float:right;margin-right:2%;" onClick="logout()"><h6  style="color:white;">LOGOUT</h6></button>

	</div>
	<div id="pay" onClick="payFees()" style="display:none;"> 
		<p class="aligncenter" style="margin-top:35%">Pay Fees</p>
	</div>
	<section>
		<div class="container" style="background-color:#e8eaea;border-radius:25px;margin-top:20px;">
			<div class="aligncenter" style="margin:10px;">	
				<img src="img/poster.jpg" style="max-width:100%">
			</div>
			<div class="row" style="display:none;" id="cont">
				<div class="col-md-offset-3 col-md-6 col-xs-12" style="border-radius:25px;background-color:white;">
					<h3 class=" aligncenter" id="welcome"> Hi,Abhinav Singh Rathore </h3>
					<h5 class="aligncenter" id="id"> Your Prosang Id is: PR100</h5>
					<hr>
					<h4 class="aligncenter">Your Profile</h4>
					<hr>
					<div class="row">
						<div class="col-md-6 aligncenter col-xs-6">Name:</div>
						<div class="col-md-6 aligncenter col-xs-6" id="name">Abhinav</div>
					</div>	
					<hr>
					<div class="row">
						<div class="col-md-6 aligncenter col-xs-6">Mobile No:</div>
						<div class="col-md-6 aligncenter col-xs-6" id="mobile">9119824114</div>
					</div>	
					<hr>
					<div class="row">
						<div class="col-md-6 aligncenter col-xs-6">Email Id:</div>
						<div class="col-md-6 aligncenter col-xs-6" id="email">rathore2015@gmail.com</div>
					</div>
					<hr>					
					<div class="row">
						<div class="col-md-6 aligncenter col-xs-6">College</div>
						<div class="col-md-6 aligncenter col-xs-6" id="college">MNNIT</div>
					</div>
					<hr>
				</div>
			</div>

			<div class="row" style="border-radius:25px;background-color:white;margin:20px;">
				<h2>How to reach MNNIT?</h2>
				<hr>
				<p style="margin:10px">
				Popular name of MNNIT is Motilal Nehru Engineering College. It is in the locality called Teliyarganj. For reaching MNNIT from Allahabad Junction you have following options. You can take an auto (fare about Rs150/-) and ask the driver to take you Motilal Nehru Engineering College guest house (Executive Development Centre ). It is in the MNNIT Staff colony, which is in front of Railway crossing. You will also find taxis outside the railway station (Fare about Rs 300/-). There are also some buses from Allahabad Railway Station Teliyarganj and Govindpur and to passing through MNNIT (fare about Rs 20/-). This is cheaper but not so comfortable and more time consuming option. Sharing auto (fare about Rs 20/-) are also available outside the railway station. Auto passes through MNNIT gate. Get down at the Ganga gate of MNNIT and take rickshaw or cross through MNNIT to reach guest house (About 1 Km)
				</p>
			</div>
			
		</div>
	</section>
	
	<footer style="">
		<div class="darkBackground">
			<div class="container">
				<p class="aligncenter">© 2019 MNNIT Allahabad, Prayagraj </p>
			</div>
		</div>
	</footer>
	<script src="https://www.gstatic.com/firebasejs/5.9.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDq-CsZzgDwjV4aP6UTuhz-t1Yp3t4YMX8",
    authDomain: "prosang-aa9d0.firebaseapp.com",
    databaseURL: "https://prosang-aa9d0.firebaseio.com",
    projectId: "prosang-aa9d0",
    storageBucket: "prosang-aa9d0.appspot.com",
    messagingSenderId: "666497351092"
  };
  firebase.initializeApp(config);
</script>
	<script src="dashboard.js"></script>



</body>
</html>