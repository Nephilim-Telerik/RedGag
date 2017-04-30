 
  (function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAWgpPRCP49mlZbgFpEbH1AVf_otxQJlMc",
    authDomain: "redgag-e9119.firebaseapp.com",
    databaseURL: "https://redgag-e9119.firebaseio.com",
    projectId: "redgag-e9119",
    storageBucket: "redgag-e9119.appspot.com",
    messagingSenderId: "243757547322"
  };
  firebase.initializeApp(config);

  const dbRefObject = firebase.database().ref().child('object');

  dbRefObject.on('value', snap => {
   // preObject.innerText = JSON.parse(JSON.stringify(snap.val(), null, 3));
   var posts = JSON.parse(JSON.stringify(snap.val()));
   console.log(posts);
  });

  }());