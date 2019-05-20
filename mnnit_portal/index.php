<?php

	
if (isset($_POST['s_ubmit'])) {
	$user = $_POST['user'];
	$admin = $_POST['admin'];
	if($user=="")
		header("Location: $admin");
	else
		header("Location: $user");
	}
?>




<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MNNIT Allahabad</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/fonts/ionicons.min.css">
    <link rel="stylesheet" href="assets/css/Footer-Dark.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.1.1/aos.css">
    <link rel="stylesheet" href="assets/css/Login-Form-Clean.css">
    <link rel="stylesheet" href="assets/css/Navigation-Clean1.css">
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="stylesheet" href="assets/css/untitled.css">
    
</head>

<body>

<div class="row">
    <div class="login-clean" >  
	
		<div class="col-md-12">
			<form  action="index.php" method="post" style= "background:linear-gradient(#3f2b96, #a8c0ff);">
             <h2 class="sr-only ">Login Form</h2>
            <div class="illustration"><i class="icon ion-ios-people"></i></div>
            <div class="form-group">
                <input class="form-control" type="text" id="username" name="user" placeholder="User Portal">
            </div>
			<div class="form-group">
                <input class="form-control" type="text" id="identity" name="admin" placeholder="Admin Portal">
            </div>
			
            <div class="form-group">
                <input class="btn btn-primary btn-block" id="login" name="s_ubmit" value="Submit" type="submit" >
            </div>
			</form>
		</div>
    </div>
</div>
	
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <!-- <script src="assets/js/bs-animation.js"></script> -->
   
</body>

</html>