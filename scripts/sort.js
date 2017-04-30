var i,j;
var recent = document.getElementById("recent");
var hot = document.getElementById("hot");
var trending = document.getElementById("trending");

recent.addEventListener("click", Recent);

function Recent() {
    var tempRecent;
    for(i=0; i<array.arr.length; i=i+1)
    {
        for(j=0; j<array.arr.length; j=j+1)
        {
            if(array.arr[i].date > array.arr[j].date)
            {
                tempRecent = array.arr[i];
                array.arr[i] = array.arr[j];
                array.arr[j] = tempRecent;
            }
        }
    }
    func(array);
    hot = document.getElementById("hot");
    hot.addEventListener("click", Hot);
    trending = document.getElementById("trending");
    trending.addEventListener("click", Trending);
    var likes = document.getElementsByClassName("glyphicon glyphicon-chevron-up");
    for(var i=0; i<likes.length; i=i+1)
    {
        likes[i].addEventListener("click", Like);
    }
    var dislike = document.getElementsByClassName("glyphicon glyphicon-chevron-down");
    for(var i=0; i<dislike.length; i=i+1)
    {
        dislike[i].addEventListener("click", Dislike);
    }
}




hot.addEventListener("click", Hot);

function Hot() {
    var tempHot;
    for(i=0; i<array.arr.length; i=i+1)
    {
        for(j=0; j<array.arr.length; j=j+1)
        {
            if(array.arr[i].rating > array.arr[j].rating)
            {
                tempHot = array.arr[i];
                array.arr[i] = array.arr[j];
                array.arr[j] = tempHot;
            }
        }
    }
    var arr = {arr: []};

    for(i=0; i<3; i=i+1)
    {
        
            arr.arr.push(array.arr[i]);
        
    }
    func(arr);
    recent = document.getElementById("recent");
    recent.addEventListener("click", Recent);
    trending = document.getElementById("trending");
    trending.addEventListener("click", Trending);
    var likes = document.getElementsByClassName("glyphicon glyphicon-chevron-up");
    for(var i=0; i<likes.length; i=i+1)
    {
        likes[i].addEventListener("click", Like);
    }
    var dislike = document.getElementsByClassName("glyphicon glyphicon-chevron-down");
    for(var i=0; i<dislike.length; i=i+1)
    {
        dislike[i].addEventListener("click", Dislike);
    }
}

trending.addEventListener("click", Trending);

function Trending() {
    var tempTrending;
    for(i=0; i<array.arr.length; i=i+1)
    {
        for(j=0; j<array.arr.length; j=j+1)
        {
            if(array.arr[i].rating > array.arr[j].rating)
            {
                tempTrending = array.arr[i];
                array.arr[i] = array.arr[j];
                array.arr[j] = tempTrending;
            }
        }
    }
    var arr = {arr: []};

    for(i=0; i<array.arr.length; i=i+1)
    {
        if(array.arr[i].rating >= 10)
        {
            arr.arr.push(array.arr[i]);
        }
    }
    func(arr);
    recent = document.getElementById("recent");
    recent.addEventListener("click", Recent);
    hot = document.getElementById("hot");
    hot.addEventListener("click", Hot);
    var likes = document.getElementsByClassName("glyphicon glyphicon-chevron-up");
    for(var i=0; i<likes.length; i=i+1)
    {
        likes[i].addEventListener("click", Like);
    }
    var dislike = document.getElementsByClassName("glyphicon glyphicon-chevron-down");
    for(var i=0; i<dislike.length; i=i+1)
    {
        dislike[i].addEventListener("click", Dislike);
    }
};
