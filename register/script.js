$(document).ready(function(){
  //initialize the firebase app
  var config = {
    apiKey: "AIzaSyCVHLhgLqPA4ej2BPiXxj0LI0WtTJSTutg",
    authDomain: "roboticsmnnit-56f41.firebaseapp.com",
    databaseURL: "https://roboticsmnnit-56f41.firebaseio.com",
    projectId: "roboticsmnnit-56f41",
    storageBucket: "roboticsmnnit-56f41.appspot.com",
    messagingSenderId: "661665719443"
  };
  firebase.initializeApp(config);


  
  //create firebase references
  var Auth = firebase.auth(); 
  var dbRef = firebase.database();
  var projectsRef = dbRef.ref('projects')
  var usersRef = dbRef.ref('users')
  var addinfoRef = dbRef.ref('users')
  var storageRef = firebase.storage().ref();
  var auth = null;
  

  document.getElementById('file').addEventListener('change', handleFileSelect, false);
  document.getElementById('file').disabled = true;
   
  
  
  //Register
  $('#registerForm').on('submit', function (e) {
    e.preventDefault();
    $('#registerModal').modal('hide');
    $('#messageModalLabel').html(spanText('<i class="fa fa-cog fa-spin"></i>', ['center', 'info']));
    $('#messageModal').modal('show');
    var data = {
      email: $('#registerEmail').val(), //get the email from Form
      firstName: $('#registerFirstName').val(), // get firstName
      lastName: $('#registerLastName').val(), // get lastName
	   mob: $('#registerMob').val(), // get mobile no.
	  qual: $('#registerQual').val(), // get qualification
	  rgstrCllg: $('#registerCollege').val(), // get college
	  rgstrtxt: $('#registertext').val(), // get college
    };
    var passwords = {
      password : $('#registerPassword').val(), //get the pass from Form
      cPassword : $('#registerConfirmPassword').val(), //get the confirmPass from Form
    }
    if( data.email != '' && passwords.password != ''  && passwords.cPassword != '' ){
      if( passwords.password == passwords.cPassword ){
        //create the user
        
        firebase.auth().createUserWithEmailAndPassword(data.email, passwords.password)
			  
			.then(function() {
			  var user = firebase.auth().currentUser;
				firebase.database().ref('users/'+user.uid).set({
				   displayName: data.firstName + ' ' + data.lastName
				})
            return user.updateProfile({
              displayName: data.firstName + ' ' + data.lastName
            })
          })
          .then(function(){
            //now user is needed to be logged in to save data
			var user = firebase.auth().currentUser;
            auth = user;
            //now saving the profile data
            usersRef.child(user.uid).set(data)
              .then(function(){
                console.log("User Information Saved:", user.uid);
              })
            $('#messageModalLabel').html(spanText('Success!', ['center', 'success']))
            
            $('#messageModal').modal('hide');
          })
          .catch(function(error){
			  
            console.log("Error creating user:", error);
            $('#messageModalLabel').html(spanText('ERROR: '+error.code, ['danger']))
          });
      } else {
        //password and confirm password didn't match
        $('#messageModalLabel').html(spanText("ERROR: Passwords didn't match", ['danger']))
      }
    }  
  });

  //Login
  $('#loginForm').on('submit', function (e) {
    e.preventDefault();
    $('#loginModal').modal('hide');
    $('#messageModalLabel').html(spanText('<i class="fa fa-cog fa-spin"></i>', ['center', 'info']));
    $('#messageModal').modal('show');

    if( $('#loginEmail').val() != '' && $('#loginPassword').val() != '' ){
      //login the user
      var data = {
        email: $('#loginEmail').val(),
        password: $('#loginPassword').val()
      };
      firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(function(authData) {
          auth = authData;
          $('#messageModalLabel').html(spanText('Success!', ['center', 'success']))
          $('#messageModal').modal('hide');
        })
        .catch(function(error) {
          console.log("Login Failed!", error);
          $('#messageModalLabel').html(spanText('ERROR: '+error.code, ['danger']))
        });
    }
  });

  $('#logout').on('click', function(e) {
    e.preventDefault();
    firebase.auth().signOut()
  });

 
  
  //Filepload
  function handleFileSelect(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      var file = evt.target.files[0];
	  var authuser = firebase.auth().currentUser;
      var metadata = {
        'contentType': file.type
      };

      // Push to child path.
      // [START oncomplete]
      storageRef.child('images/' + file.name).put(file, metadata).then(function(snapshot) {
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        console.log('File metadata:', snapshot.metadata);
        // Let's get a download URL for the file.
        snapshot.ref.getDownloadURL().then(function(url) {
          console.log('File available at', url);
          // [START_EXCLUDE]
          document.getElementById('linkbox').innerHTML = '<a href="'+url+'">View</a>';
		 
		
		  if( auth != null ){
				usersRef.child(auth.uid)
				  .update({
					photoUrl :url
				  })
			} else {
			  //location user to login
			}
          // [END_EXCLUDE]
        });
      }).catch(function(error) {
        // [START onfailure]
        console.error('Upload failed:', error);
        // [END onfailure]
      });
      // [END oncomplete]
	  usersRef.child(auth.uid).once('value').then(function (data) {
			var info = data.val();
			if(info.photoUrl) {
				$('.user-info img').show();
				$('.user-info img').attr('src', info.photoUrl);
			}
		});
    }
  
  
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      auth = user;
      $('body').removeClass('auth-false').addClass('auth-true');
	  
	  //console.log('user signed-in.');
      document.getElementById('file').disabled = false;
	  
	  var temp;
	  
      usersRef.child(user.uid).once('value').then(function (data) {
        var info = data.val();
		temp= info.firstName+' '+info.lastName;
		//console.log(temp);
        if(info.photoUrl) {
			//console.log("1a");
          $('.user-info img').show();
          $('.user-info img').attr('src', info.photoUrl);
          $('.user-info .user-name').hide();
        } else if(user.displayName) {
		//console.log("2a");
          $('.user-info img').show();
          $('.user-info').append('<span class="user-name" >'+user.displayName+'</span>');
        } else if(info.firstName) {
		//console.log("3a");
          $('.user-info img').show();
          $('.user-info').append('<span class="user-name">'+info.firstName+'</span>');
        }
		
      });
	  
     
	  
	  addinfoRef.child(user.uid).once('value').then(function (data) {
        var info = data.val();
		var cllgname;
		if(info.rgstrCllg=="other")
			cllgname=info.rgstrtxt;
		else
			cllgname=info.rgstrCllg;
		//console.log(cllgname);
		
		if(info.rgstrCllg!="MNNIT, Allahabad")
				document.getElementById('pay').style.display="block";
		 if(info.email){
				//console.log(temp);
				$('.adinfo').append('<div class="card project" style="width:98%;border-radius:30px;box-shadow: 5px 5px grey;">'
			+ '<div class="card-body">'
			  + '<h4 class="card-title">'+"Hi, "+info.firstName+'</h4>'
				+ '<h6><strong>Your ProSang ID is - </strong>'+"PR150" + '</h6><br/> '
				+'<hr/>'
				+'<h4>Your Profile</h4><hr/>'
				+ '<h6><strong>Name: - </strong>'+info.firstName+" "+info.lastName+ '</h6><br/> '
				+ '<h6><strong>Email: - </strong>'+info.email + '</h6><br/> '
				+ '<h6><strong>Mobile No.: - </strong>'+info.mob + '</h6><br/> '
				+ '<h6><strong>Qualification: - </strong>'+info.qual + '</h6><br/> '
				+'<h6><strong>College: - </strong>'+cllgname+ '<h6><br/> '		
							
			  + '</p>'
			+ '</div>'
		  +'</div>');
		 
		 }
      });
	  
	  
    } else {
      // No user is signed in.
      $('body').removeClass('auth-true').addClass('auth-false');
	  auth = null;
    }
  });
});



$('#chooseFile').bind('change', function () {
  var filename = $("#chooseFile").val();
  if (/^\s*$/.test(filename)) {
    $(".file-upload").removeClass('active');
    $("#noFile").text("No file chosen..."); 
  }
  else {
    $(".file-upload").addClass('active');
    $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
  }
});

function spanText(textStr, textClasses) {
  var classNames = textClasses.map(c => 'text-'+c).join(' ');
  return '<span class="'+classNames+'">'+ textStr + '</span>';
}

function payFees(){
	window.location.href = "https://www.townscript.com/e/prosang-022214?prS=listing&seS=topicpage" ;
}

