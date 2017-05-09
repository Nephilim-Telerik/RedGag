import { Solve } from "./handlebars.js";
import { Sort } from "./sort.js";
import { saveToDb } from "./push.js";
import { createPost } from "./createPost.js";
import { createVideo } from "./createVideo.js";
import { createImage } from "./createImage.js";
import { UserController } from "./userController.js";

$(document).ready(function () {
        var posts;
        var promiseDataBasePosts = new Promise(function (resolve, reject) {
          (function () {
            // Initialize Firebase
  var config = {
    apiKey: "AIzaSyABN1JEZy8Cpmy7hhgI_k7_-SscOpo-ewE",
    authDomain: "nephilin-511f8.firebaseapp.com",
    databaseURL: "https://nephilin-511f8.firebaseio.com",
    projectId: "nephilin-511f8",
    storageBucket: "nephilin-511f8.appspot.com",
    messagingSenderId: "720321012350"
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
                  /* var array = {arr: [{text: true, img: false, video: false, rating: 120, title: "text title", comments: "0 comments  340 views", mainContentText: "Hey guys I was just wondering if you could help me. I am trying to find a decent tutorial on how to connect js SPA apps to a database. Thanks ! #CodeIsFun", date: new Date("October 13, 2014 11:13:00")},
                {text: false, img: true, video: false, rating: 13, title: "image title", comments: "8 comments  40 views", src: "./img/firstimg.jpg", date: new Date("December 10, 2015 11:13:00")},
                {text: false, img: false, video: true, rating: 9, title: "video title", comments: "2 comments  3 views", src: "./video/cpu.mp4", date: new Date("October 13, 2016 11:13:00")},
                {text: true, img: false, video: false, rating: 50, title: "text title", comments: "0 comments  340 views", mainContentText: "Hey guys I was just wondering if you could help me. I am trying to find a decent tutorial on how to connect js SPA apps to a database. Thanks ! #CodeIsFun", date: new Date("October 19, 2014 11:13:00")},
                {text: false, img: true, video: false, rating: 60, title: "image title", comments: "8 comments  40 views", src: "./img/firstimg.jpg", date: new Date("December 19, 2015 11:13:00")},
                {text: false, img: false, video: true, rating: 3, title: "video title", comments: "2 comments  3 views", src: "./video/cpu.mp4", date: new Date("October 19, 2016 11:13:00")}]};
            console.log(array);*/

              var array = {arr: []};
              for (var i in posts)
              {
                console.log(posts[i]);
                array.arr.push(posts[i]);
              }

              var func = Solve();
              func(array);
              var x = Sort();
              x(array);
              var y = createPost();
              y(array);
              var z = createVideo();
              z(array);
              var u = createImage();
              u(array);

              /*var obj = { 
                          post1: {text: true, img: false, video: false, id: "post1", rating: 120, title: "text title", comments: "0 comments  340 views", mainContentText: "Hey guys I was just wondering if you could help me. I am trying to find a decent tutorial on how to connect js SPA apps to a database. Thanks ! #CodeIsFun", date: new Date("October 13, 2014 11:13:00")}, post2: {text: false, img: true, video: false, id: "post1", rating: 13, title: "image title", comments: "8 comments  40 views", src: "./img/firstimg.jpg", date: new Date("December 10, 2015 11:13:00")}
                        }
              var push = saveToDb();
              push(obj);*/


                })
                .catch(function(error) {
                    console.log(error);
            });

        //realtime db sync
        const dbRefObject2 = firebase.database().ref();

        dbRefObject2.on('child_changed', snap => {
        posts = JSON.parse(JSON.stringify(snap.val()));

        var array = {arr: []};
              for (var i in posts)
              {
              
                array.arr.push(posts[i]);
              }

          /*    var func = Solve();
              func(array);
              var x = Sort();
              x(array); */

        console.log(posts);
        });
        
        var controller = UserController();
        var app = Sammy('#master-container', function() {
        this.get('#/recent', function() {
          Recent();
        });

        this.get('#/top3', function() {

        });

        this.get('#/trending', function() {

        });

        this.get('#/login', function() {
          controller.login();
        });

        this.get('#/register', function() {
          controller.register();
        });

        this.get('#/logout', function() {
          controller.logout();
        });
    });
    app.run('#/');
});
