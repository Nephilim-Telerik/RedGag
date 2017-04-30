import { Solve } from "./handlebars.js";
import { Sort } from "./sort.js";

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
            var array = {arr: [{text: true, img: false, video: false, rating: 120, title: "text title", comments: "0 comments  340 views", mainContentText: "Hey guys I was just wondering if you could help me. I am trying to find a decent tutorial on how to connect js SPA apps to a database. Thanks ! #CodeIsFun", date: new Date("October 13, 2014 11:13:00")},
				{text: false, img: true, video: false, rating: 13, title: "image title", comments: "8 comments  40 views", src: "./img/firstimg.jpg", date: new Date("December 10, 2015 11:13:00")},
				{text: false, img: false, video: true, rating: 9, title: "video title", comments: "2 comments  3 views", src: "./video/cpu.mp4", date: new Date("October 13, 2016 11:13:00")},
				{text: true, img: false, video: false, rating: 50, title: "text title", comments: "0 comments  340 views", mainContentText: "Hey guys I was just wondering if you could help me. I am trying to find a decent tutorial on how to connect js SPA apps to a database. Thanks ! #CodeIsFun", date: new Date("October 19, 2014 11:13:00")},
				{text: false, img: true, video: false, rating: 60, title: "image title", comments: "8 comments  40 views", src: "./img/firstimg.jpg", date: new Date("December 19, 2015 11:13:00")},
				{text: false, img: false, video: true, rating: 3, title: "video title", comments: "2 comments  3 views", src: "./video/cpu.mp4", date: new Date("October 19, 2016 11:13:00")}]};
    
	    var func = Solve();
      func(array);
      var x = Sort();
      x(array);
        })
        .catch(function(error) {
            console.log(error);
    });
