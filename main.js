$(document).ready(function(){
	console.log('+++line2 ,file main js', $)
	
	// Saving todo to local storage
	var i =0;
	$('#writeTodoBox').on('keydown',function(event){
		var $TodoBox = $('#writeTodoBox')
		if(event.keyCode===13){
			localStorage.setItem('todo' + i, $TodoBox.val())
	// write todo on the lists
		$('.todoList').append('<div class="todoItem" >'+' <input type="radio" class="checkbox">' + localStorage.getItem('todo' + i) + '</div>');
		i=i+1
		}		
	})




})