	<?php 
		if(isset($_GET['id'])){
		   header("Location: http://google.in/");
		   session_start();
		   $_SESSION['id']=$_GET['id'];
		}
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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

	<!--\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		Google Fonts
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

	<link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,700' rel='stylesheet' type='text/css'>
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
	

	
	  
 
</head>

<body>
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
<script src="register.js">
	
</script>

	<div style="background-color:#000000;padding:5px 5px 5px 5px;">
					<a href="index.html"><img style="max-width:80px;" alt="ProSang" src="img/menu-logo.png"></a>
					<nav>
						
					</nav>

	</div>


	<section>
		<h3 align="center">Register for Prosang</h3>
		<h6 align="center">Already Registered? <a href="login.php">Login</a></h6>
			<div class="container" style="width:60%;margin-top:20px;margin-bottom:5%;">
				  <form method="post">
				    <div class="form-group">
					  <label for="name">Name:<span style="color:red;">*</span></label>
					  <input type="text" class="form-control" id="name" placeholder="Enter name" name="name" required>
					</div>
					<div class="form-group">
					  <label for="email">Email:<span style="color:red;">*</span></label>
					  <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required>
					</div>
					<div class="form-group">
					  <label for="mobile">Mobile No:<span style="color:red;">*</span></label>
					  <input type="number" class="form-control" id="mobile" placeholder="Enter Mobile No" name="mobile" min="1000000000" max="9999999999" required>
					</div>
					<div class="form-group">
						<label for="college">College:<span style="color:red;">*</span></label>
						<select id="college" name="college" class="form-control" onchange="if (this.value=='other'){this.form['collegetext'].style.visibility='visible'}else {this.form['collegetext'].style.visibility='hidden'};" required>
							<option value="MNNIT, Allahabad" >MNNIT, Allahabad</option>
							<option value="other">Other</option>
						</select>
						<input type="text" class="form-control" id="collegetext" placeholder="Enter College" name="collegetext" style="visibility:hidden;" >
					</div>
				    <div class="form-group">
					  <label for="Qualification">Qualification:<span style="color:red;">*</span></label>
					  <input type="text" class="form-control" id="Qualification" placeholder="Enter Qualification" name="Qualification" required>
					</div>
					<div class="form-group">
					  <label for="pwd">Password:<span style="color:red;">*</span></label>
					  <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" required>
					</div>
					<div class="form-group">
					  <label for="cpwd">Confirm Password:<span style="color:red;">*</span></label>
					  <input type="password" class="form-control" id="cpwd" placeholder="Enter password" name="cpwd" required>
					</div>
					<div class="row">
						<button  type="button" onClick="test()" id="bt" class="btn btn-default col-md-12 col-xs-12 ">Submit</button>
					</div>
				  </form>
			</div>
	</section>

	<footer>
		<div class="darkBackground">
			<div class="container">
				<p class="aligncenter">© 2019 MNNIT Allahabad, Prayagraj </p>
			</div>
		</div>
	</footer>
	





</body>
</html>