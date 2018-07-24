$(document).ready(function(){
	console.log('+++line2 ,file main js', $)
	
	// Saving todo to local storage
	var i =0;
	$('#writeTodoBox').on('keydown',function(event){
		var $TodoBox = $('#writeTodoBox')
		if(event.keyCode===13){
			localStorage.setItem('todo' + i, $TodoBox.val())
		console.log(i)	
		i=i+1
		}
		var todoItem
		$('.todoList').text(localStorage.getItem('todo' + i));

	})




})