$(document).ready(function(){
  //initialize the firebase app
  var config = {
    apiKey: "AIzaSyCYCPnc6u4zVNq3zfV7_tQnFPpyqSID9i0",
    authDomain: "dushyantmnnit.firebaseapp.com",
    databaseURL: "https://dushyantmnnit.firebaseio.com",
    projectId: "dushyantmnnit",
    storageBucket: "dushyantmnnit.appspot.com",
    messagingSenderId: "492197625130",
    appId: "1:492197625130:web:94b937a005976fd6"
  };
  firebase.initializeApp(config);


  
  //create firebase references
  var Auth = firebase.auth(); 
  var dbRef = firebase.database();
  var projectsRef = dbRef.ref('projects')
  var prjctRef = dbRef.ref('prjct')
  var journalsRef = dbRef.ref('journals')
  var confRef = dbRef.ref('conferences')
  var workshopRef = dbRef.ref('workshop')
  var reviewRef = dbRef.ref('review')
  var mtechRef = dbRef.ref('mtech')
  var outsideRef = dbRef.ref('outside')
  var ugRef = dbRef.ref('ug')
  var usersRef = dbRef.ref('users')
  var storageRef = firebase.storage().ref();
  var auth = null;
  

  document.getElementById('file').addEventListener('change', handleFileSelect, false);
  document.getElementById('file').disabled = true;
  
  document.getElementById('bfile').addEventListener('change', handleBFileSelect, false);
  document.getElementById('bfile').disabled = true;
  
  document.getElementById('pfile').addEventListener('change', handlePFileSelect, false);
  document.getElementById('pfile').disabled = true;
  
  document.getElementById('resfile').addEventListener('change', handleResFileSelect, false);
  document.getElementById('resfile').disabled = true;
   
  
  
  //Register
  $('#registerForm').on('submit', async function (e) {
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
		  
		  val=firebase.database().ref().once('value').then(function(snapshot) {
	

		});
		

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

	//Logout
  $('#logout').on('click', function(e) {
    e.preventDefault();
    firebase.auth().signOut()
  });

//Add Blog
 $('#projectForm').on('submit', function( event ) {  
    event.preventDefault();
	$('#addProjectModal').modal('hide');
    if( auth != null ){
      if( $('#title').val() != '' || $('#description').val() != '' ){
        projectsRef.child(auth.uid)
          .push({
            title: $('#title').val(),
            author: $('#author').val(),
            subject: $('#subject').val(),
			date: $('#day').val(),
			id: $('#id').val(),
			blogimg: $('#blogimg').val(),
            description: $('#description').val(),
          })
          document.projectForm.reset();
      } else {
        alert('Please fill at-least name or description!');
      }
    } else {
      //location user to login
    }
  });
  
  
  //Add Project
 $('#prjctForm').on('submit', function( event ) {  
    event.preventDefault();
	$('#addPrjctModal').modal('hide');
    if( auth != null ){
      if( $('#ptitle').val() != '' || $('#pdescription').val() != '' ){
        prjctRef.child(auth.uid)
          .push({
            title: $('#ptitle').val(),
            author: $('#pauthor').val(),
            subject: $('#psubject').val(),
			date: $('#pday').val(),
			id: $('#pid').val(),
			prjctimg: $('#prjctimg').val(),
            description: $('#pdescription').val(),
          })
          document.prjctForm.reset();
      } else {
        alert('Please fill at-least name or description!');
      }
    } else {
      //location user to login
    }
  });
  
  //Add M.Tech Thesis
 $('#mtechForm').on('submit', function( event ) {  
    event.preventDefault();
	$('#addMtechModal').modal('hide');
    if( auth != null ){
		if( $('#mtitle').val() != '' ){
        mtechRef.child(auth.uid)
          .push({
            title: $('#mtitle').val(),
            author: $('#mauthor').val(),
            branch: $('#branch').val(),
			date: $('#mday').val(),
          })
          document.mtechForm.reset();
       } else {
        alert('Please fill at-least title');
      }
    } else {
      //location user to login
    }
  });
  
  
  //Add Outside Interns
 $('#outsideForm').on('submit', function( event ) {  
    event.preventDefault();
	$('#addOutsideModal').modal('hide');
    if( auth != null ){
		if( $('#otitle').val() != '' ){
        outsideRef.child(auth.uid)
          .push({
            title: $('#otitle').val(),
            author: $('#oauthor').val(),
            cllg: $('#collg').val(),
			date: $('#oday').val(),
          })
          document.outsideForm.reset();
       } else {
        alert('Please fill at-least title');
      }
    } else {
      //location user to login
    }
  });
  
   //Add Undergraduate
 $('#ugForm').on('submit', function( event ) {  
    event.preventDefault();
	$('#addUgModal').modal('hide');
    if( auth != null ){
		if( $('#utitle').val() != '' ){
        ugRef.child(auth.uid)
          .push({
            title: $('#utitle').val(),
            author: $('#uauthor').val(),
			date: $('#uday').val(),
          })
          document.ugForm.reset();
       } else {
        alert('Please fill at-least title');
      }
    } else {
      //location user to login
    }
  });
  
  //Add Journal
  $('#journalForm').on('submit', function( event ) {  
    event.preventDefault();
	$('#addJournalModal').modal('hide');
    if( auth != null ){
      if( $('#journaledit').val() != ''  ){
        journalsRef.child(auth.uid)
          .push({
            jentry: $('#journaledit').val(),
          })
          document.journalForm.reset();
      } else {
        alert('Please fill some entry!');
      }
    } else {
      //location user to login
    }
  });
 
 
 //Add Workshop
  $('#workshopForm').on('submit', function( event ) {  
    event.preventDefault();
	$('#addWorkshopModal').modal('hide');
    if( auth != null ){
      if( $('#workshopedit').val() != ''  ){
        workshopRef.child(auth.uid)
          .push({
            wentry: $('#workshopedit').val(),
          })
          document.workshopForm.reset();
      } else {
        alert('Please fill some entry!');
      }
    } else {
      //location user to login
    }
  });
 
  //Add Reviewer
  $('#reviewForm').on('submit', function( event ) {  
    event.preventDefault();
	$('#addReviewModal').modal('hide');
    if( auth != null ){
      if( $('#reviewedit').val() != ''  ){
        reviewRef.child(auth.uid)
          .push({
            rvwentry: $('#reviewedit').val(),
          })
          document.reviewForm.reset();
      } else {
        alert('Please fill some entry!');
      }
    } else {
      //location user to login
    }
  });
 
 
 //Add Conferences
  $('#confForm').on('submit', function( event ) {  
    event.preventDefault();
	$('#addConfModal').modal('hide');
    if( auth != null ){
      if( $('#confedit').val() != ''  ){
        confRef.child(auth.uid)
          .push({
            cfentry: $('#confedit').val(),
          })
          document.confForm.reset();
      } else {
        alert('Please fill some entry!');
      }
    } else {
      //location user to login
    }
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
	
	
	//Resumepload
  function handleResFileSelect(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      var file = evt.target.files[0];
	  var authuser = firebase.auth().currentUser;
      var metadata = {
        'contentType': file.type
      };

      // Push to child path.
      // [START oncomplete]
      storageRef.child('resume/' + file.name).put(file, metadata).then(function(snapshot) {
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        console.log('File metadata:', snapshot.metadata);
        // Let's get a download URL for the file.
        snapshot.ref.getDownloadURL().then(function(url) {
          console.log('File available at', url);
          // [START_EXCLUDE]
          document.getElementById('resumebox').innerHTML = '<a href="'+url+'">View</a>';
		  if( auth != null ){
				usersRef.child(auth.uid)
				  .update({
					resumeUrl :url
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
    }
  
  //Blog FileUpload
  function handleBFileSelect(evt) {
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
          document.getElementById('blogimg').value = url;
		 
          // [END_EXCLUDE]
        });
      }).catch(function(error) {
        // [START onfailure]
        console.error('Upload failed:', error);
        // [END onfailure]
      });
     
    }
	
	//Project FileUpload
  function handlePFileSelect(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      var file = evt.target.files[0];
	  var authuser = firebase.auth().currentUser;
      var metadata = {
        'contentType': file.type
      };

      // Push to child path.
      // [START oncomplete]
      storageRef.child('images/projects/' + file.name).put(file, metadata).then(function(snapshot) {
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        console.log('File metadata:', snapshot.metadata);
        // Let's get a download URL for the file.
        snapshot.ref.getDownloadURL().then(function(url) {
          console.log('File available at', url);
          // [START_EXCLUDE]
          document.getElementById('prjctimg').value = url;
		 
          // [END_EXCLUDE]
        });
      }).catch(function(error) {
        // [START onfailure]
        console.error('Upload failed:', error);
        // [END onfailure]
      });
     
    }
  
  
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      auth = user;
      $('body').removeClass('auth-false').addClass('auth-true');
	  
	  //console.log('user signed-in.');
      document.getElementById('file').disabled = false;
	  document.getElementById('bfile').disabled = false;
	  document.getElementById('pfile').disabled = false;
	  document.getElementById('resfile').disabled = false;
	   
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
		info = data.val();
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
				$('.adinfo').append('<div class="card project" style="background-color:#F1D2FE;width:98%;border-radius:30px;box-shadow: 3px 3px grey;">'
				+'<div class="card project" style="width:98%;border-radius:30px;box-shadow: 2px 2px grey;">'
			+ '<div class="card-body">'
				+'<h4>Your Profile</h4><hr/>'
				+ '<h6><strong>Name: - </strong><br/>'+info.firstName+" "+info.lastName+ '</h6><br/> '
				+ '<h6><strong>Email: - </strong><br/>'+info.email + '</h6><br/> '
				+ '<h6><strong>Mobile No.: - </strong><br/>'+info.mob + '</h6><br/> '
				+ '<h6><strong>Qualification: - </strong><br/>'+info.qual + '</h6><br/> '
				+'<h6><strong>College: - </strong><br/>'+cllgname+ '<h6><br/> '		
							
			  + '</p>'
			+ '</div>'
		  +'</div></div>');
		 
		 }
		
      });
	  
     projectsRef.child(user.uid).on('child_added', onChildAdd);
	 prjctRef.child(user.uid).on('child_added', onPrjctAdd);
	 journalsRef.child(user.uid).on('child_added', onJournalAdd);
	 confRef.child(user.uid).on('child_added', onConfAdd);
	 workshopRef.child(user.uid).on('child_added', onWorkshopAdd);
	 reviewRef.child(user.uid).on('child_added', onReviewAdd);
	 mtechRef.child(user.uid).on('child_added', onMtechAdd);
	 outsideRef.child(user.uid).on('child_added', onOutsideAdd);
	 ugRef.child(user.uid).on('child_added', onUgAdd);
	
	  
	  
    } else {
      // No user is signed in.
      $('body').removeClass('auth-true').addClass('auth-false');
	  auth = null;
    }
  });
});


function onChildAdd (snap) {
  $('#projects').append(projectHtmlFromObject(snap.key, snap.val()));
}

//prepare blog object's HTML
function projectHtmlFromObject(key, project){
  return '<div class="card project" style="width:90%;border-radius:30px;box-shadow: 3px 3px grey;" id="'+key+'">'
    + '<div class="card-body">'
      + '<p class="card-title"><strong>'+project.title+'</strong></p><br/>'
      + '<p class="card-subtitle mb-2 text-muted">'+project.author+'</p>'
      + '<p class="card-text" title="' + project.day+'">'
        + project.subject + '<br/> '
		+ '<i>'+project.date +'</i>'+ '<br/>'
        + project.description+'<br/>'
		+ '<img style="width:100%" src="'+project.blogimg+'">'
		
      + '</p>'
      // + '<a href="#" class="card-link">Card link</a>'
      // + '<a href="#" class="card-link">Another link</a>'
    + '</div>'
  +'</div>';
}

function onPrjctAdd (snap) {
  $('#prjct').append(projectHtmlFromPrjct(snap.key, snap.val()));
}

//prepare project object's HTML
function projectHtmlFromPrjct(key, prjct){
  return '<div class="card project" style="width:90%;border-radius:30px;box-shadow: 3px 3px grey;" id="'+key+'">'
    + '<div class="card-body">'
      + '<p class="card-title"><strong>'+prjct.title+'</strong></p><br/>'
      + '<p class="card-subtitle mb-2 text-muted">'+prjct.author+'</p>'
      + '<p class="card-text" title="' + prjct.day+'">'
        + prjct.subject + '<br/> '
		+ '<i>'+prjct.date +'</i>'+ '<br/>'
        + prjct.description+'<br/>'
		+ '<img style="width:100%" src="'+prjct.prjctimg+'">'
		
      + '</p>'
    + '</div>'
  +'</div>';
}


function onMtechAdd (snap) {
  $('#mtech').append(projectHtmlFromMtech(snap.key, snap.val()));
}

//prepare mtech object's HTML
function projectHtmlFromMtech(key, mtech){
  return '<div class="card project" style="width:90%;border-radius:30px;box-shadow: 3px 3px grey;" id="'+key+'">'
    + '<div class="card-body">'
      + '<p class="card-title"><strong>'+mtech.title+'</strong></p><br/>'
      + '<p class="card-subtitle mb-2 text-muted">'+mtech.date+'</p>'
      + '<p class="card-text" title="' + mtech.title+'">'
	  + mtech.branch + '<br/>'
        + mtech.author + '<br/> '
      + '</p>'
    + '</div>'
  +'</div>';
}



function onOutsideAdd (snap) {
  $('#outside').append(projectHtmlFromOutside(snap.key, snap.val()));
}

//prepare outside intern object's HTML
function projectHtmlFromOutside(key, outside){
  return '<div class="card project" style="width:90%;border-radius:30px;box-shadow: 3px 3px grey;" id="'+key+'">'
    + '<div class="card-body">'
      + '<p class="card-title"><strong>'+outside.title+'</strong></p><br/>'
      + '<p class="card-subtitle mb-2 text-muted">'+outside.date+'</p>'
      + '<p class="card-text" title="' + outside.title+'">'
	  + '<i>'+outside.cllg +'</i>'+ '<br/>'
        + outside.author + '<br/> '
      + '</p>'
    + '</div>'
  +'</div>';
}



function onUgAdd (snap) {
  $('#ug').append(projectHtmlFromUg(snap.key, snap.val()));
}

//prepare outside intern object's HTML
function projectHtmlFromUg(key, ug){
  return '<div class="card project" style="width:90%;border-radius:30px;box-shadow: 3px 3px grey;" id="'+key+'">'
    + '<div class="card-body">'
      + '<p class="card-title"><strong>'+ug.title+'</strong></p><br/>'
      + '<p class="card-subtitle mb-2 text-muted">'+ug.date+'</p>'
      + '<p class="card-text" title="' + ug.title+'">'
        + ug.author + '<br/> '
      + '</p>'
    + '</div>'
  +'</div>';
}


function onJournalAdd (snap) {
  $('#journal').append(projectHtmlFromJournal(snap.key, snap.val()));
}

//prepare journal object's HTML
function projectHtmlFromJournal(key, journal){
  return '<div class="card project" style="width:90%;border-radius:30px;box-shadow: 3px 3px grey;" id="'+key+'">'
    + '<div class="card-body">'
      + '<p class="card-title">'+journal.jentry+'</p>'
      + '</p>'
    + '</div>'
  +'</div>';
}

function onWorkshopAdd (snap) {
  $('#workshop').append(projectHtmlFromWorkshop(snap.key, snap.val()));
}

//prepare workshop object's HTML
function projectHtmlFromWorkshop(key, workshop){
  return '<div class="card project" style="width:90%;border-radius:30px;box-shadow: 3px 3px grey;" id="'+key+'">'
    + '<div class="card-body">'
      + '<p class="card-title">'+workshop.wentry+'</p>'
      + '</p>'
    + '</div>'
  +'</div>';
}


function onConfAdd (snap) {
  $('#conference').append(projectHtmlFromConf(snap.key, snap.val()));
}

//prepare conference object's HTML
function projectHtmlFromConf(key, conf){
  return '<div class="card project" style="width:90%;border-radius:30px;box-shadow: 3px 3px grey;" id="'+key+'">'
    + '<div class="card-body">'
      + '<p class="card-title">'+conf.cfentry+'</p>'
      + '</p>'
    + '</div>'
  +'</div>';
}



function onReviewAdd (snap) {
  $('#review').append(projectHtmlFromReview(snap.key, snap.val()));
}

//prepare conference object's HTML
function projectHtmlFromReview(key, review){
  return '<div class="card project" style="width:90%;border-radius:30px;box-shadow: 3px 3px grey;" id="'+key+'">'
    + '<div class="card-body">'
      + '<p class="card-title">'+review.rvwentry+'</p>'
      + '</p>'
    + '</div>'
  +'</div>';
}


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



