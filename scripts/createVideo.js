import { SolveVideo } from "./createVideoHandlebars.js";

function createVideo() {

    return function (array) {
        var post = document.getElementById("createVideo");

        post.addEventListener("click", Create);

        function Create() {
             var post = SolveVideo();
             post(array);
        }
    
    }

};


export{ createVideo };

