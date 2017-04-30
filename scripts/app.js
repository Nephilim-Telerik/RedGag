var posts;
var promiseDataBasePosts = new Promise(function (resolve, reject) {
  (function () {
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
      posts = JSON.parse(JSON.stringify(snap.val()));
      resolve(posts);
    });
  })();
});
promiseDataBasePosts
        .then(function(posts) {
            console.log(posts);
        })
        .catch(function(error) {
            console.log(error);
    });
