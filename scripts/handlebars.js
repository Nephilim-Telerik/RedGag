function solve() {
  
  return function (arr) {
	

	var htmlTemplate = `
		<header>
			<button type="button" id="register" class="btn btn-success">Register</button>
			<button type="button" id="login" class="btn btn-default">Log in</button>
		</header>
		<input type="checkbox" id="nav-trigger" class="nav-trigger" />
		<label for="nav-trigger"></label>

		<nav>
    		<button type="button" id="recent" class="btn btn-default">Recent</button>
    		<button type="button" id="hot" class="btn btn-default"></button>
    		<button type="button" id="trending" class="btn btn-default"></button>
		</nav>
		<article>
			{{#each arr}}
			<section>
				<div>
            		<div class="profile">
            		</div>
            
            		<div class="rating">
               			<div class="rating-up"><h4><span class="glyphicon glyphicon-chevron-up"></h4></div>
                		<div class="rating-result"><h4>+9</h4></div>
                		<div class="rating-down"><h4><span class="glyphicon glyphicon-chevron-down"></h4></div>
           			</div>
            		<div class="social"><i class="fa fa-facebook-square" style="font-size:32px;color:#fff;"></i></div>
            	</div>
				{{#if img}}
        			<div class="main-thread">
            			<div class="main-content"><img style="width:100%"; src={{src}}>
            			</div>
            			<div class="title"><h4>{{title}}</h4>
            			</div>
            			<div class="comments">
                			{{comments}}
            			</div>
        			</div>
				{{/if}}
				{{#if text}}
        			<div class="main-thread">
            			<div class="main-content-text">{{mainContentText}}
            			</div>
            			<div class="title"><h4>{{title}}</h4>
            			</div>
            			<div class="comments">
                			{{comments}}
            			</div>
        			</div>
				{{/if}}
				{{#if video}}
        			<div class="main-thread">
            			<div class="main-content">
							<video width="600"  controls>
                				<source src={{src}} type="video/mp4">
                					Your browser does not support the video tag.
            					</video>
            			</div>
            			<div class="title"><h4>{{title}}</h4>
            			</div>
            			<div class="comments">
                			{{comments}}
            			</div>
        			</div>
				{{/if}}
			</section>
			{{/each}}
		</article>

		<aside>
		</aside>
		`;
    var postTemplate = Handlebars.compile(htmlTemplate);

	var selected = document.getElementById("master-container");
    selected.innerHTML = postTemplate(arr);

  };
};

module.exports = solve;