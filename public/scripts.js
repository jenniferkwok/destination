console.log("sanity check!!!");

$(document).ready(function(){
		pageload();
});

		debugger

function pageload(){
	$('#submitnewpost').submit(function(e){
		e.preventDefault();
		// console.log('New Post Created!',$(this).serialize() );
		$.post("/api/posts", $(this).serialize(), function(response){
		$('#submitnewpost')[0].reset();
});
});