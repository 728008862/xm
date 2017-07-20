$("#nei ul li").on("mouseover",function(){
	var i = $(this).index();
	$(this).css("color","#FF6700").siblings().css("color","black");
	$(".fade-y").eq(i).addClass("show");
});
$("#nei ul li").on("mouseout",function(){
	var i = $(this).index();
	$(".fade-y").eq(i).removeClass("show");
});

$(".dzb-z li").on("mousemove",function(){
	var i = $(this).index();
	$(this).css("background","#FF6700").siblings().css("background","black");
	$(".cyi-y").eq(i).addClass("show");
});
$(".dzb-z li").on("mouseout",function(){

	var i = $(this).index();
	$(".cyi-y").eq(i).removeClass("show");
})
$(".banner ul li").animate({opacity:1},2000)
var a =0;
var len=$(".banner ul li").length;
setInterval(function(){
	a++;
	if(a>len-1){
		a=0
	}
	console.log($(".banner ul li img").eq(a)[0]);
	$(".banner ul li").eq(a).animate({opacity:1},3000).siblings().animate({opacity:0},1000);
},3000);

