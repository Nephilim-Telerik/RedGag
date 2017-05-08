//submitButton.onclick = function(){saveToDb()};

function saveToDb() {

    return function (obj) {
    let i = 0;
    i +=1;
    var dbRefObject = firebase.database().ref().child('object');
    //dbRefObject.child("name1").child("namekon").set(i);
}
};


export{ saveToDb };