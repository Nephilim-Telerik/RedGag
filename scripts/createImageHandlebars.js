import { saveToDb } from "./push.js";

function SolveImage() {  
  return function (arra) {
		var array = arra;
var src;
	var htmlTemplate = `		
		<article>		
			<section>
				<div>
        			<div class="main-thread">
            			<div class="main-content-text">title:<input id = "title"></input>
						<p></p>
						<div id="uploaderDiv">
        <progress value="0" max="100" id="uploader">0%</progress>
        <input type="file" value="upload" id="fileButton" />
        <img  width="50%" ></img>
</div>
						<p></p>
						<button type="button" id="post" >Post</button>
						</div>        			
        			</div>				
        		</div>			
			</section>		
		</article>

		<aside>
		</aside>
		`;
    var postTemplate = Handlebars.compile(htmlTemplate);

	var selected = document.getElementById("master-container");
    selected.innerHTML = postTemplate(array);

	var title = document.getElementById("title");

	// getting html elements
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');

//Listen for file selection
fileButton.addEventListener('change', function(e){
    //get file
    var file = e.target.files[0];
    
    //create a storage ref
    var storageRef = firebase.storage().ref('img/' + file.name);

    // Upload file
    var task = storageRef.put(file);
   
    //Update progress bar
    task.on('state_changed', 
    function progress (snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;              
    },
    function error(err) {

    },
    function complete() {
        fileButton.style.visibility = 'hidden';
        var url = storageRef.getDownloadURL().then(function(url) {
             var test = url;
             //alert(url);
             document.querySelector('img').src = test;
			 src = test;
         }).catch(function(error) {

         });
	
    });
     
});

	var pos = document.getElementById("post");
	pos.addEventListener("click", postText);

	function postText(ev) {
		console.log(src);
			var titleText = title.value;
			var srcText = src;
			var temp = "post";
			var check = [];
			var bool = false;
			for(var i=0; i<array.arr.length; i=i+1)
    		{
				check.push(array.arr[i].id);
			}

			for(var i = 1; i< 50 ; i = i + 1)
			{
				for(var j = 0; j< check.length ; j = j + 1)
				{
					bool = true;
					var pp = check[j].match(/\d/g);
					pp = pp.join("");

					if(i == pp)
					{
						bool = false;
						break;
					}
					
				}
				if(bool===true)
				{
					temp = temp + i ;
					break;
				}
			}
			var objectToSend = { text: false, img: true, video: false, id: temp, rating: 0, title: titleText, comments: "0 comments  0 views", src: srcText, date: Date.now()}
			arra.arr.push(objectToSend);
			var push = saveToDb();
            push(temp, objectToSend);
	}

  };
  //realtime db sync
        const dbRefObject2 = firebase.database().ref();

        dbRefObject2.on('child_changed', snap => {
        posts = JSON.parse(JSON.stringify(snap.val()));

        var array = {arr: []};
              for (var i in posts)
              {
                array.arr.push(posts[i]);
              }
        console.log(posts);
        });
};

export{ SolveImage };