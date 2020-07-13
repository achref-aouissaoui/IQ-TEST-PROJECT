
$(document).ready(function(){

	var count=0;

		$('#answer1-1').click(function(){
			count++
		})
    console.log(count)
		$('#answer2-1').click(function(){
			count++
		})
	console.log(count)
		$('#answer3-3').click(function(){
			count++
		})
	console.log(count)
		$('#answer4-1').click(function(){
			count++
		})
	console.log(count)

function result(){
	if (count===4){
		return "genius"
	}else if (count===3){
		return "superior"
	}else if (count===2){
		return "normal"
	}else if (count===1){
		return "dulness"
	}else if (count===0){
		return "deficiency"
	}
}

$('#showResult').click(function(){	
	$("#result").text(result());
})


})