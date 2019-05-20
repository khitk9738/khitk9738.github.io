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
  var workshopRef = dbRef.ref('workshop')
  var usersRef = dbRef.ref('users')
  var confRef = dbRef.ref('conferences')
  var reviewRef = dbRef.ref('review')
  var mtechRef = dbRef.ref('mtech')
  var outsideRef = dbRef.ref('outside')
  var ugRef = dbRef.ref('ug')
  var storageRef = firebase.storage().ref();
  var auth = null;
  
   
      auth = "IFkp0bAQDncyI7sIiG4p94Fdb5L2";
     
	  var temp;
	  
	  
      usersRef.child(auth).once('value').then(function (data) {
        var info = data.val();
		temp= info.firstName+' '+info.lastName;
		//console.log(temp);
        if(info.photoUrl) {
			//console.log("1a");
          $('.user-info img').show();
          $('.user-info img').attr('src', info.photoUrl);
        } 
		$('#fireres').append('<a href="'+info.resumeUrl+'" class="btn btn-secondary">Download Resume</a>');
		info = data.val();
		var cllgname;
		
		 if(info.email){
			 
				//console.log(temp);
				$('.adinfo').append('<div class="card project" style="width:98%;border-radius:30px;box-shadow: 3px 3px grey;">'
			+ '<div class="card-body">'
			  + '<h4 class="card-title">'+"Hi, "+info.firstName+'</h4>'
				+'<hr/>'
				+'<h4>Your Profile</h4><hr/>'
				+ '<h6><strong>Name: - </strong><br/>'+info.firstName+" "+info.lastName+ '</h6><br/> '
				+ '<h6><strong>Email: - </strong><br/>'+info.email + '</h6><br/> '
				+ '<h6><strong>Mobile No.: - </strong><br/>'+info.mob + '</h6><br/> '
				+ '<h6><strong>Qualification: - </strong><br/>'+info.qual + '</h6><br/> '
				+'<h6><strong>College: - </strong><br/>'+cllgname+ '<h6><br/> '		
							
			  + '</p>'
			+ '</div>'
		  +'</div>');
		 
		 }
		projectsRef.child(auth).on('child_added', onChildAdd);
		prjctRef.child(auth).on('child_added', onPrjctAdd);
		journalsRef.child(auth).on('child_added', onJournalAdd);
		confRef.child(auth).on('child_added', onConfAdd);
	    workshopRef.child(auth).on('child_added', onWorkshopAdd);
		reviewRef.child(auth).on('child_added', onReviewAdd);
		mtechRef.child(auth).on('child_added', onMtechAdd);
		outsideRef.child(auth).on('child_added', onOutsideAdd);
		ugRef.child(auth).on('child_added', onUgAdd);
		
      });

});

function onChildAdd (snap) {
  $('#blogs').append(projectHtmlFromObject(snap.key, snap.val()));
}

//prepare project object's HTML
function projectHtmlFromObject(key, project){
  return '<div class="item">'
                     +' <div class="blog-card">'
                      +  '<div class="media-block">'
                       +  ' <a href="blog/blog-post.html?pagekey='+project.id+'">'
                        +   ' <img class="post-image img-responsive" src="'+project.blogimg+'" alt="blog-post" />'
                         +   '<div class="mask"></div>'
                          +  '<div class="post-date"><span class="month">'+project.date+'</span></div>'
                          +'</a>'
                        +'</div>'
                        +'<div class="post-info">'
                        + ' <ul class="category'
                         + '  <li><a href="#">'+project.subject+'</a></li>'
                         + '</ul>'
                         + '<a href="blog/blog-post.html?pagekey='+project.id+'"><h4 class="blog-item-title">'+project.title+'</h4></a>'
                        +'</div>'
                      +'</div>'
                    +'</div>'
  
}

function onPrjctAdd (snap) {
  $('#prjct').append(projectHtmlFromPrjct(snap.key, snap.val()));
}

//prepare project object's HTML
function projectHtmlFromPrjct(key, prjct){
  return '<div class="item row" style="box-shadow: 2px 2px #29B6F6;">'
                     +' <div class="blog-card col-sm-12 col-md-7">'
                      +  '<div class="media-block">'
                       +  ' <a href="projects/project.html?pagekey='+prjct.id+'">'
                        +   ' <img class="post-image img-responsive" src="'+prjct.prjctimg+'" alt="blog-post" />'
                         +   '<div class="mask"></div>'
                          +  '<div class="post-date"><span class="month">'+prjct.date+'</span></div>'
                          +'</a>'
                        +'</div>'
                        +'<div class="post-info">'
                        + ' <ul class="category'
                         + '  <li><a href="#">'+prjct.subject+'</a></li>'
                         + '</ul>'
                         + '<a href="projects/project.html?pagekey='+prjct.id+'"><h4 class="blog-item-title">'+prjct.title+'</h4></a>'
                        +'</div>'
                      +'</div>'
					  +'<div class="blog-card col-sm-10 col-md-5 ">'
						+'<h3><strong>'+ prjct.title+'</strong></h3>'
						+'<i>'+prjct.date+'</i><br/>'
						+prjct.subject+'<hr/>'
						+prjct.description+'<br/>'
					  +'</div>'
                    +'</div>'+'<br/><br/>'
}


function onMtechAdd (snap) {
  $('#mtech').append(projectHtmlFromMtech(snap.key, snap.val()));
}

//prepare mtech object's HTML
function projectHtmlFromMtech(key, mtech){
  return '<div class="timeline-item col-sm-12 col-md-5 col-lg-5">'
			+'<h4 class="item-title">'+mtech.title+'</h4>'
			+'<span class="item-period">'+mtech.date+'</span>'
			+'<span class="item-small">'+mtech.branch +'</span>'
			+'<p class="item-description">'+mtech.author+'</p>'
		 +' </div>';
}


function onOutsideAdd (snap) {
  $('#outside').append(projectHtmlFromOutside(snap.key, snap.val()));
}

//prepare outside intern object's HTML
function projectHtmlFromOutside(key, outside){
  return '<div class="timeline-item col-sm-12 col-md-5 col-lg-5">'
			+'<h4 class="item-title">'+outside.title+'</h4>'
			+'<span class="item-period">'+ outside.date+'</span>'
			+'<span class="item-small">'+ outside.cllg +'</span>'
			+'<p class="item-description">'+ outside.author +'</p>'
		 +' </div>';
  
}

function onUgAdd (snap) {
  $('#ug').append(projectHtmlFromUg(snap.key, snap.val()));
}

//prepare outside intern object's HTML
function projectHtmlFromUg(key, ug){
  return '<div class="lm-package-wrap col-md-4 default-col">'
		+	 ' <div class="lm-package">  '                        
		+		'<div class="lm-pricing-row">'
		+		 ' <h3>'+ug.title+'</h3>'
		+		  '<small>'+ug.date+'</small>'
		+		'</div>'
		+		'<div class="lm-default-row">'
		+		  ug.author
		+		'</div>'                  
		+	  '</div>'					  
		+	'</div>';
}


function onJournalAdd (snap) {
  $('#journal').append(projectHtmlFromJournal(snap.key, snap.val()));
}

//prepare journal object's HTML
function projectHtmlFromJournal(key, journal){
  return'<div class="timeline-item">'
    + '<p class="item-description">'
       +journal.jentry
	  
  +'</div>';
}

function onWorkshopAdd (snap) {
  $('#workshop').append(projectHtmlFromWorkshop(snap.key, snap.val()));
}

//prepare workshop object's HTML
function projectHtmlFromWorkshop(key, workshop){
  return'<div class="timeline-item">'
    + '<p class="item-description">'
       +workshop.wentry + '</p>'
  +'</div>';
}

function onReviewAdd (snap) {
  $('#review').append(projectHtmlFromReview(snap.key, snap.val()));
}

//prepare conference object's HTML
function projectHtmlFromReview(key, review){
  return '<li>'
       +review.rvwentry
  +'</li>';
}


function onConfAdd (snap) {
  $('#conference').append(projectHtmlFromConf(snap.key, snap.val()));
}

//prepare conference object's HTML
function projectHtmlFromConf(key, conf){
   return'<li>'
       +conf.cfentry
  +'</li>';
}
function spanText(textStr, textClasses) {
  var classNames = textClasses.map(c => 'text-'+c).join(' ');
  return '<span class="'+classNames+'">'+ textStr + '</span>';
}



