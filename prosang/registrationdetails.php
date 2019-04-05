<?php 


session_start();

if($_GET["id"]!="!@LL%^UHBBC^%VJJ"||$_GET["name"]!="admin")
	header("Location: index.html");;



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
	  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

	<script src="https://www.gstatic.com/firebasejs/5.8.6/firebase.js"></script>
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
<script>
	function check(){
	//alert("working");	
ref=firebase.database().ref('/users/');
ref.on('value',gotdata,errdata);

}

	
async function gotdata(data){

	var fdata=data.val();
	var ids=Object.keys(fdata);
	var i;
	await ids;
	flag=0;
	for(i=0;i < ids.length;i++){
		var k=ids[i];
		var em=fdata[k].email;
		var n=fdata[k].name;
		var m=fdata[k].mobile;
		var c=fdata[k].college;
		await em;
		document.getElementById('data').innerHTML=document.getElementById('data').innerHTML+"<tr style='border:2px solid;'><td>PR"+fdata[k].prosang_id+"</td><td>"+n+"</td><td>"+c+"</td><td>"+em+"</td><td>"+m+"</td></tr>"
		
	}

	
		
}
function errdata(err){
	
}


</script>

 
</head>

<body onload="check()">
	<div style="background-color:#000000;padding:5px 5px 5px 5px;">
					<a href="index.html"><img style="max-width:80px;" alt="ProSang" src="img/menu-logo.png"></a>
					<nav>
						
					</nav>

	</div>
	<div class="container">
		<div class="jumbotron" style="background-color:white">
		
			<table id="data" style="width:100%;border:2px solid;">
				  <tr style="border:2px solid;">
					<th>Prosang Id</th><th>Name</th><th>College</th><th>Email Id</th><th>Mobile</th>
				  </tr>
			</table>
			
			
		</div>
	</div>




</body>
</html>