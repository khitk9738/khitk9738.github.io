function add(pid){
		  firebase.database().ref().update({

		ProsangID:pid
	  });
}
var exist=0;
var gpid;
function phptest(id){
	        $.ajax({
            url:"register.php", //the page containing php script
            type: "get", //request type,
            dataType: 'json',
           data: {"id":id},
            success:function (result){

             console.log(result.abc);
           }
         });
	
}
function writeUserData(pid) {
	var name=document.getElementById("name");
	var email=document.getElementById("email");
	var clg=document.getElementById("college");
	var clg2=document.getElementById("collegetext");
	var mb=document.getElementById("mobile");
	var qlf=document.getElementById("Qualification");
	var pwd=document.getElementById("pwd");
	var cpwd=document.getElementById("cpwd");
	var atposition=email.value.indexOf("@");  
	var dotposition=email.value.lastIndexOf(".");  
	if(name.value==''||name.value==null)
	{alert("Name cannot be empty");
document.getElementById("bt").disabled = false;
	}
	else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=email.value.length)
	{alert("Enter a valid email");
document.getElementById("bt").disabled = false;
	}
	else if(clg.value=='other'&&(clg2.value==null||clg2.value==''))
		
	{
		document.getElementById("bt").disabled = false;
		alert("College name cannot be empty");
	}
	else if(mb.value<1000000000||mb.value>9999999999)
	{
		document.getElementById("bt").disabled = false;
		alert("Enter a valid mobile number");
	}
	else if(qlf.value==''||qlf.value==null)
	{
		document.getElementById("bt").disabled = false;
		alert("Qualification cannot be empty");
	}
	else if(pwd.value.length<6)
	{
		document.getElementById("bt").disabled = false;
		alert("Invalid password length(>6)");
	}
	else{
		gpid=pid;
		ref=firebase.database().ref('/users/');
		ref.on('value',gotdata,errdata);
		

	}
}
async function gotdata(data){
		var name=document.getElementById("name");
	var email=document.getElementById("email");
	var clg=document.getElementById("college");
	if(clg.value=='other')
		clg=document.getElementById("collegetext").value;
	else
		clg="MNNIT, Allahabad";
	var mb=document.getElementById("mobile");
	var qlf=document.getElementById("Qualification");
	var pwd=document.getElementById("pwd");
	var cpwd=document.getElementById("cpwd");
	var atposition=email.value.indexOf("@");  
	var dotposition=email.value.lastIndexOf(".");
	var fdata=data.val();
	var ids=Object.keys(fdata);
	var i;
	pid=gpid;
	var flag=0;
	await ids;
	exist=0;
	for(i=0;i<ids.length;i++){

		var k=ids[i];
		await k;
		var em=fdata[k].email;
		await em;
		if(em==email.value&&i!=ids.length-1){
			if(flag==1)
			break;
			exist=1;
			
		}
		//alert(em+"first"+email.value+" "+exist);
	}
	//alert("second"+ exist)
		if(exist==1&&i==ids.length){
			alert("Email Id already exists"+exist);
		}
		else if(exist==0&&i==ids.length){
			//alert("value added");
			flag=1;
				if(pwd.value===cpwd.value){
					
				add(pid);
			  firebase.database().ref('users/' + pid).update({

				name: name.value,
				email: email.value,
				college:clg,
				qualification:qlf.value,
				mobile:mb.value,
				passwords:pwd.value,
				prosang_id:pid
			  });
				phptest(pid);
				
				window.location = "dashboard.php?id="+pid;
				}
				else{
				alert("Password didn't match");
				}
		}
		
document.getElementById("bt").disabled = false;
}
function errdata(err){
	
}
async function test2(){
	
val=firebase.database().ref().once('value').then(function(snapshot) {
  val = snapshot.val().ProsangID;
  //
  
});

await val;
val=val+1;

writeUserData(val);;

}
function test(){
	document.getElementById("bt").disabled = true;
var c=test2();


}
function url(){
	window.location = "dashboard.html?id=111";
}
