import { saveToDb } from "./push.js";

function Likes() {
  
  return function (array) {
var likes = document.getElementsByClassName("glyphicon glyphicon-chevron-up");

for(var i=0; i<likes.length; i=i+1)
{
    likes[i].addEventListener("click", Like);

}


function Like(ev) {
    

    let isNeutral = true;
    var target = ev.target;
    var toChange = target.parentNode.parentNode.nextElementSibling;
   
    for(var i=0; i<array.arr.length; i=i+1)
    {
        if(array.arr[i].id=== target.id)
        {
            array.arr[i].rating = array.arr[i].rating + 1;

            var objectName = array.arr[i].id;

            
            var push = saveToDb();
            push(objectName, array.arr[i]);
            
            break;
        }
    }
     toChange.firstChild.innerText = +toChange.firstChild.innerText+1;
    if(isNeutral)
    {
        target.removeEventListener("click", Like)
        toChange.nextElementSibling.firstChild.firstChild.addEventListener("click", Dislike);
        isNeutral = false;
    }
    else
    {
        isNeutral = true;
        target.addEventListener("click", Like);
    }

}

var dislike = document.getElementsByClassName("glyphicon glyphicon-chevron-down");

for(var i=0; i<dislike.length; i=i+1)
{
    dislike[i].addEventListener("click", Dislike);

}

function Dislike(ev) {
    let isNeutral = true;
    var target = ev.target;
    var toChange = target.parentNode.parentNode.previousElementSibling;
    for(var i=0; i<array.arr.length; i=i+1)
    {
        if(array.arr[i].id=== target.id)
        {
            array.arr[i].rating = array.arr[i].rating - 1;

            var objectName = array.arr[i].id;

            
            var push = saveToDb();
            push(objectName, array.arr[i]);
            
            break;
        }
    }
    toChange.firstChild.innerText = +toChange.firstChild.innerText-1;
   
    if(isNeutral)
    {
        target.removeEventListener("click", Dislike)
        toChange.previousElementSibling.firstChild.firstChild.addEventListener("click", Like);
        isNeutral = false;
    }
    else
    {
        isNeutral = true;
        target.addEventListener("click", Dislike);
    }
 
}
  };}


export{ Likes };