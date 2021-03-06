import { saveToDb } from "./push.js";

function SolvePost() {
  
  return function (arra) {
		var array = arra;

	var htmlTemplate = `
		
		<article>		
			<section>
				<div>
        			<div class="main-thread">
            			<div class="main-content-text">title:<input id = "title"></input>
						<p></p>
						mainContentText:<input id = "mainContentText">
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
	
	var mainContent = document.getElementById("mainContentText");	

	var pos = document.getElementById("post");
	pos.addEventListener("click", postText);

	function postText(ev) {
			var titleText = title.value;
			var mainContentText1 = mainContent.value;
			var temp = "post";
			var check = [];
			var bool = false;
			console.log(array);
			for(var i=0; i<array.arr.length; i=i+1)
    		{
				check.push(array.arr[i].id);
			}
			console.log(check);
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
			var objectToSend = { text: true, img: false, video: false, id: temp, rating: 0, title: titleText, comments: "0 comments  0 views", mainContentText: mainContentText1, date: Date.now()}
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

export{ SolvePost };