

$(document).ready(function(){
	for(i=0; i < movi.length; i++){
	$("#movies").append(`
		
        
       
		<div class="col-lg-5" >
		
		
		        <div class="media">
				<div class="media-left">

						<div class="image">		
					<img src="${movi[i].image}">
				</div>
				</div>

				
      <div class="media-right">
				<h4 class="media-heading">${movi[i].mname} </h4>
				<p>${movi[i].director}</p>
				<p>${movi[i].main_actors}</p>
				<p>${movi[i].typ}</p>
				
               			
			
              
               <div class="quantity">
		<p>Like</p>
      <button class="like-btn" type="button" name="button">
        <img src="img/like1.png" width="25" height="20" />
      </button>

       </div>
        </div>
				</div>
				 </div>

		
		`);
		
	}
		

});