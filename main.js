$(document).ready(function(){
	console.log('+++line2 ,file main js', $)
	
	$('#writeTodoBox').on('keydown',function(event){
		var $TodoBox = $('#writeTodoBox');
		if(event.keyCode===13){
			console.log($TodoBox.val())
		}
	})

})