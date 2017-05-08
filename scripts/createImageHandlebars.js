import { saveToDb } from "./push.js";

function SolveImage() {
  
  return function (arra) {
		var array = arra;

	var htmlTemplate = `
		
		<article>		
			<section>
				<div>
        			<div class="main-thread">
            			<div class="main-content-text">title:<input id = "title"></input>
						<p></p>
						src:<input id = "src">
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

	
	var src = document.getElementById("src");
	

	var pos = document.getElementById("post");
	pos.addEventListener("click", postText);

	function postText(ev) {
			var titleText = title.value;
			var srcText = src.value;
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
};


export{ SolveImage };