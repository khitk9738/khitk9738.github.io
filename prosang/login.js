	function check(){
//	alert("working");	
ref=firebase.database().ref('/users/');
ref.on('value',gotdata,errdata);

}

function phptest(id){
	        $.ajax({
            url:"login.php", //the page containing php script
            type: "get", //request type,
            dataType: 'json',
           data: {"id":id},
            success:function (result){

             console.log(result.abc);
           }
         });
	
}
	
async function gotdata(data){
	email=document.getElementById('email').value;
	pwd=document.getElementById('pwd').value;
	var fdata=data.val();
	var ids=Object.keys(fdata);
	var i;
	await ids;
	console.log('1a');
	flag=0;
	for(i=0;i<ids.length;i++){
		var k=ids[i];
		var em=fdata[k].email;
		await em;
		if(em==email){
			flag=1;
			var pw=fdata[k].passwords;
			await pw;
			if(pwd==pw)
			{kk=fdata[k].prosang_id;
		await kk;

		phptest(kk);
		console.log('1b');
		window.location="dashboard.php?id="+kk;
			}
			else{
			alert("Wrong Password");
			break;
			}
		

		}
		else if(i==(ids.length-1)&&flag==0)
			alert("Wrong Username");
	}

	
		
}
function errdata(err){
	
}