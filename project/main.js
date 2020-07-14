
$(document).ready(function(){
$("#page2").hide();
$("#page3").hide();
$("#page4").hide();
$("#page5").hide();
$("#imgResult").hide();
	var count=0;
$(document).ready(function(){

  $("#answer1-1").click(function(){
    $("#page1").hide();
     $("#page2").show();
  });

  $("#answer1-2").click(function(){
    $("#page1").hide();
    $("#page2").show();
  });
  
   $("#answer2-1").click(function(){
    $("#page2").hide();
    $("#page3").show();
  });

   $("#answer2-2").click(function(){
    $("#page2").hide();
     $("#page3").show();
  });

   $("#answer2-3").click(function(){
    $("#page2").hide();
     $("#page3").show();
  });

   $("#answer2-4").click(function(){
    $("#page2").hide();
     $("#page3").show();
  });
   $("#answer3-1").click(function(){
    $("#page3").hide();
     $("#page4").show();
  });
   $("#answer3-2").click(function(){
    $("#page3").hide();
    $("#page4").show();
  });
   $("#answer3-3").click(function(){
    $("#page3").hide();
    $("#page4").show();
  });
  $("#answer3-4").click(function(){
    $("#page3").hide();
    $("#page4").show();
  });
   $("#answer4-1").click(function(){
    $("#page4").hide();
    $("#page5").show();
  });
  $("#answer4-2").click(function(){
    $("#page4").hide();
    $("#page5").show();
  });
});





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

     $("#imgResult").show();

  		$("#paragraphe").hide();
})


})