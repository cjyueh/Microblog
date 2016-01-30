$(document).ready(function() { //upon document load...
	console.log("linked."); //check js is loaded
	$('#counter').html("0"); //default set counter to 0
	clickSubmit(); //run clickSubmit function
});

//get form input: var newPost = $('#blog-input').val();
//add newPost to blogPost to create array: blogPost = [];
//create list of inputs: var postList = "<li>" + newPost + "</li>";
//add input to list: $('#log').prepend(postList);
//add input to localStorage (default is string): localStorage.postKey = newPost;
//when submit button is clicked, instead of page refresh, send input to postlist & localStorage
//reset form input: this.form.reset();


var blogPost = []; //creates array of blogPost with newPost
var postCount = 0;

function clickSubmit() {
	$('#submit-button').on('click', function(event) {
		//prevent default action of submit (= refresh page)
		event.preventDefault();
		addPostToArray();
		createList();
		this.form.reset();
	});
}

function addPostToArray() {
	//get form input
	var newPost = $('#blog-input').val();
	//adds each newPost to blogPost array
	blogPost.push(newPost);
	//console.log(blogPost); //to check array is created
}

function createList(event) {
	//creates list of newPost
	var postList;
	//iterates through array
	for (var i = 0; i < blogPost.length; i++) {
		//assigns each newPost(blogPost[i]) to postList
		postList = "<li>" + blogPost[i] + "</li>";
		//adds each newPost(blogPost[i]) to localStorage and assigns key
		localStorage.setItem(i+1, blogPost[i]);
	}
	//adds to postCount
	postCount++;
	//adds latest newPost to top of list
	$('#log').prepend(postList);
	//updates postCount
	$('#counter').html(postCount);
	
}