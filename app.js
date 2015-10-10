	$(document).ready(function(){
		$(".naeNae").hide();
	});

	$("#day").click(function(){
		$(".mainBg").toggleClass("nightBg", 1500);
		$("p").toggleClass("nightFont", 1500);
		$("body").toggleClass("nightBody", 1500);
		$(".header").toggleClass("nightHeader", 1500);
		$("nav").toggleClass("nightNav", 1500);
		//$("li").toggleClass("nightLi", 1500);
		$("#day").text($(this).text() == "night" ? "day" : "night");
		$("#day").toggleClass("nightButton");
		$(".linkin").toggleClass("nightLink", 1500);
	})

      $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'media/watchMe.mp3');
        //audioElement.load()
        $.get();
        audioElement.addEventListener("load", function() {
        audioElement.play();
        }, true);

        $('#feelings').click(function() {
        		audioElement.play();
        });
        $('.pause').click(function() {
        		audioElement.pause();
        });
        $(".play").click(function(){
        	    audioElement.play();
        })
        $("#hideDis").click(function(){
      			audioElement.pause();
    })
})
    $("#feelings").click(function(){
		$(".naeNae").show(900);
		})
  	$("#hideDis").click(function(){
      	$(".naeNae").hide(900);
    })




