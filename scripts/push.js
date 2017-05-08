//submitButton.onclick = function(){saveToDb()};

function saveToDb() {

    return function (objectName, values) {
var dbRefObject = firebase.database().ref().child('object');
    for (var key in values) {
         if (values.hasOwnProperty(key)) {
           dbRefObject.child(objectName).child(key).set(values[key]);
    }
    }
}
};


export{ saveToDb };

