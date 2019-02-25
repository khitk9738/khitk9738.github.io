$(document).ready(function(){
  //initialize the firebase app
  var config = {
    apiKey: "AIzaSyDTucqwOg9vP6psm1F0yllUIE7ugzNbVRo",
    authDomain: "prosang-web.firebaseapp.com",
    databaseURL: "https://prosang-web.firebaseio.com",
    projectId: "prosang-web",
    storageBucket: "prosang-web.appspot.com",
    messagingSenderId: "1091756402670"
  };
  firebase.initializeApp(config);

  
  //create firebase references
  var Auth = firebase.auth(); 
  var dbRef = firebase.database();
  var projectsRef = dbRef.ref('projects')
  var usersRef = dbRef.ref('users')
  var auth = null;

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
    };
    var passwords = {
      password : $('#registerPassword').val(), //get the pass from Form
      cPassword : $('#registerConfirmPassword').val(), //get the confirmPass from Form
    }
    if( data.email != '' && passwords.password != ''  && passwords.cPassword != '' ){
      if( passwords.password == passwords.cPassword ){
        //create the user
        
        firebase.auth()
          .createUserWithEmailAndPassword(data.email, passwords.password)
          .then(function(user) {
            return user.updateProfile({
              displayName: data.firstName + ' ' + data.lastName
            })
          })
          .then(function(user){
            //now user is needed to be logged in to save data
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

  //save project
  $('#projectForm').on('submit', function( event ) {  
    event.preventDefault();
    if( auth != null ){
      if( $('#name').val() != '' || $('#email').val() != '' ){
        projectsRef.child(auth.uid)
          .push({
            name: $('#name').val(),
            email: $('#email').val(),
            location: {
              city: $('#city').val(),
              state: $('#state').val(),
              zip: $('#zip').val()
            }
          })
          document.projectForm.reset();
      } else {
        alert('Please fill at-lease name or email!');
      }
    } else {
      //inform user to login
    }
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      auth = user;
      $('body').removeClass('auth-false').addClass('auth-true');
      usersRef.child(user.uid).once('value').then(function (data) {
        var info = data.val();
        if(user.photoUrl) {
          $('.user-info img').show();
          $('.user-info img').attr('src', user.photoUrl);
          $('.user-info .user-name').hide();
        } else if(user.displayName) {
          $('.user-info img').hide();
          $('.user-info').append('<span class="user-name">'+user.displayName+'</span>');
        } else if(info.firstName) {
          $('.user-info img').hide();
          $('.user-info').append('<span class="user-name">'+info.firstName+'</span>');
        }
      });
      projectsRef.child(user.uid).on('child_added', onChildAdd);
    } else {
      // No user is signed in.
      $('body').removeClass('auth-true').addClass('auth-false');
	  // $('#projects').append('<div class="row">');
      auth && projectsRef.child(auth.uid).off('child_added', onChildAdd);
	   //$('#projects').append('</div>');
      $('#projects').html('');
      auth = null;
    }
  });
});

function onChildAdd (snap) {
  $('#projects').append(projectHtmlFromObject(snap.key, snap.val()));
}
 
//prepare project object's HTML
function projectHtmlFromObject(key, project){
  return '<div class="col-lg-4 col-md-6 col-sm-12 col-xs-3">'+'<div class="card project" style="width:100%;" id="'+key+'">'
    + '<div class="card-body">'
      + '<h5 class="card-title">'+project.name+'</h5>'
      + '<h6 class="card-subtitle mb-2 text-muted">'+project.email+'</h6>'
      + '<p class="card-text" title="' + project.location.zip+'">'
        + project.location.city + '<br/> '
        + project.location.state +'<br/> '
		+ project.location.zip+
      + '</p>'
      // + '<a href="#" class="card-link">Card link</a>'
      // + '<a href="#" class="card-link">Another link</a>'
    + '</div>'
  + '</div>'
  +'</div>';
}

function spanText(textStr, textClasses) {
  var classNames = textClasses.map(c => 'text-'+c).join(' ');
  return '<span class="'+classNames+'">'+ textStr + '</span>';
}

