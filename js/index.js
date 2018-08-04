$(".cataitem").mouseover(function(){
	$(this).next().css("display","block");
})
$(".subcat").mouseover(function(){
	$(this).css("display","block");
})
$(".subcat").mouseout(function(){
	$(this).css("display","none");
})
$(".catalog").mouseout(function(){
	$(".subcat").css("display","none");

})