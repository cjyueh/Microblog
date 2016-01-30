$(document).ready(function() {
	console.log("linked.");
	clickSubmit();
});

//get form input: var newPost = $('#blog-input').val();
//create list of inputs: var postList = "<li>" + newPost + "</li>";
//add input to list: $('#log').prepend(postList);
//add input to localStorage (default is string): localStorage.postKey = newPost;
//when submit button is clicked, instead of page refresh, send input to postlist & localStorage

function clickSubmit() {
	$('#submit-button').click(createList);
}

//reset form input: this.form.reset();


function createList(event) {
	event.preventDefault(); //prevent default action of submit (= refresh page)
	var newPost = $('#blog-input').val();
	var postList = "<li>" + newPost + "</li>";

	$('#log').prepend(postList);
	localStorage.postKey = newPost;
	this.form.reset();
}