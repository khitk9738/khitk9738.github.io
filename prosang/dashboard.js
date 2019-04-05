var id=0;
async function myFunction(){
	window.params = function(){
    var params = {};
    var param_array = window.location.href.split('?')[1].split('&');
    for(var i in param_array){
        x = param_array[i].split('=');
        params[x[0]] = x[1];
    }
    return params;
}();
id=window.params.id;

ref=firebase.database().ref('/users/');
ref.on('value',gotdata,errdata);

}
	
function gotdata(data){
	console.log('1c');
	var fdata=data.val();
	var ids=Object.keys(fdata);
	for(i=0;i<ids.length;i++){
		var k=ids[i];
		if(k==id){
			document.getElementById('welcome').innerHTML="Hi, "+fdata[k].name;
			document.getElementById('id').innerHTML="Your Prosang Id is PR"+fdata[k].prosang_id;
			document.getElementById('name').innerHTML=fdata[k].name;
			document.getElementById('email').innerHTML=fdata[k].email;
			document.getElementById('mobile').innerHTML=fdata[k].mobile;
			document.getElementById('college').innerHTML=fdata[k].college;			
			document.getElementById('cont').style.display="block";
			if(document.getElementById('college').innerHTML!="MNNIT, Allahabad")
				document.getElementById('pay').style.display="block";
			
		}
	}
}
function errdata(err){
	
}

function payFees(){
	window.location.href = "https://www.townscript.com/e/prosang-022214?prS=listing&seS=topicpage" ;
}

function logout(){
	window.location.href ="index.php?stat=1";
}