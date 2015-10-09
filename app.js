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
	});


