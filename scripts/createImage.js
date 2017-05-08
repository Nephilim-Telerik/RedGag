import { SolveImage } from "./createImageHandlebars.js";

function createImage() {

    return function (array) {
        var post = document.getElementById("createImage");

        post.addEventListener("click", Create);

        function Create() {
             var post = SolveImage();
             post(array);
        }
    
    }

};


export{ createImage };

