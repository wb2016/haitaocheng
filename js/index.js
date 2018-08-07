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









//第二个
$("#brand_ul li").mouseover(function(){
	var index=$(this).index();
	$(".brand_img").eq(index).css("display","block").siblings().css("display","none");
})





//第三个
$(".brand_img_zi a").mouseover(function(){
	$(this).next().animate({
		bottom:0
	},500)
})
$(".brand_img_zi a").mouseout(function(){
	$(this).next().animate({
		bottom:-21
	},500)
})

$(window).scroll(function(){
	var src=$(this).scrollTop();
	if(src>500){
		$(".fix_nav").css("display","block");
	}else{
		$(".fix_nav").css("display","none");
	}
})


