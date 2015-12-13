console.log("Sanity Check: JS is working!");

$(document).ready(function(){

		pageload();

//SIGNUP
	$("#signup").submit(function(e){
		e.preventDefault();
		$.post("/users", $("#signup").serialize(), function(response){
			console.log(response);
		});
	});

//LOGIN
	$("#login").submit(function(e){
		e.preventDefault();	
		$.post("/login", $("#login").serialize(), function(response){
		}).success(function(data){
			// window.location=data;
			window.location.href = "/profile";
		});
	});

//SIGNOUT
	// $("#logout").submit(function(e){
	// 	e.preventDefault();	
	// 	$.get("/logout", function(response){
	// 	}).success(function(data){
	// 		// window.location=data;
	// 		window.location.href = "/index";
	// 	});
	// });

});
function pageload(){
	$('#submitnewquote').submit(function(e){
		e.preventDefault();
		console.log('the serialize gives :',$(this).serialize() );
		$.post("api/posts", $(this).serialize(), function(response){

			// var qString = makeNewPost(response);
			// $('#content').prepend(qString);
		$('#submitnewquote')[0].reset();
		$('#submitnewquote').append("<hr><h5>Thanks for your contribution!</h5");
		});
	});
// function makeNewPost(newquote){
// 	return '<section class="posts"><button class="deletebutton close">&times;</button><h3>“' + submitnewquote.quote.value + '”</h3><br><h5>- ' + submitnewquote.author.value + '</h5></section>';
// }

//EventListener for delte button
$(document).on('click', '.deletebutton', function(e){
	e.preventDefault();
	deletePost(this);
});
}

function deletePost(context){
	var postId= $(context).data().id;
	console.log(postId);
	$.ajax({
		url: 'api/posts/' + postId,
		type: 'DELETE',
		success: function(response){
			$(context).closest('section').remove();
		}
	});
}

