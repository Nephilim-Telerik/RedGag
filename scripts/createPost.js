import { SolvePost } from "./createPostHandlebars.js";

function createPost() {

    return function (array) {
        var post = document.getElementById("createPost");

        post.addEventListener("click", Create);

        function Create() {
             var post = SolvePost();
             post(array);
        }
    
    }

};


export{ createPost };

