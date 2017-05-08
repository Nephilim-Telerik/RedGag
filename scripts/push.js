var submitButton = document.getElementById("pusha");
let i = 0;


submitButton.onclick = function(){saveToDb()};

function saveToDb() {
    i +=1;
    var dbRefObject = firebase.database().ref().child('object');
    dbRefObject.child("name1").child("namekon").set(i);
}