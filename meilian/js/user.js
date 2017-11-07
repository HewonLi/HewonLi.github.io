//开关切换
$(function(){
	$(".userMain .securityContent .noticeBlock a").click(function(){
		console.log($(this).children().attr("src"))
		if(String($(this).children().attr("src"))=="../images/newon.png"){
			$(this).children().attr("src","../images/newoff.png")
		}
		else if(String($(this).children().attr("src"))=="../images/newoff.png"){
			$(this).children().attr("src","../images/newon.png")
		}
	})
})


//window.onload=function(){ 
//var num = 0;
//var a = document.querySelectorAll(".userMain .securityContent .noticeBlock a")
//var img = document.querySelectorAll(".userMain .securityContent .noticeBlock a img")
//for(var i=0;i<a.length;i++){
//	a[i].index = i
//	a[i].onclick = function(){
//	num++;
//	if(num%2==0){
//		img[this.index].src = "../images/newon.png"
//	}else{
//		img[this.index].src = "../images/newoff.png"
//	}
//	num==0
//}
//}
//
//console.log(img)
//
//}

