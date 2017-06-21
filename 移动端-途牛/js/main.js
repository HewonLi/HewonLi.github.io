

/*轮播图*/
var list1 = document.getElementById("list1");
var dot = document.querySelectorAll(".dot span");
var timer1 = null;
var num1 = 0;
var w = document.documentElement.getBoundingClientRect().width;
var l = list1.getBoundingClientRect().left;
//console.log(w);
timer1 = setInterval(banner,2000);
function banner(){
	num1++;
	num1 = num1%3;
	list1.style.transition = "1s";
	list1.style.left = num1*-18 + "rem";
	
	for(var i=0;i<dot.length;i++){
		dot[i].setAttribute("class","");
	}
	dot[num1].setAttribute("class","active");
}

for(var i=0;i<dot.length;i++){
	dot[i].index = i;
	dot[i].onclick = function(){
		console.log(this.index)
		clearInterval(timer1);
		for(var i=0;i<dot.length;i++){
			dot[i].setAttribute("class","");
		}
		this.setAttribute("class","active");
		list1.style.left = this.index*-18 + "rem";
		num1 = this.index;
		timer1 = setInterval(banner,2000);
	}
}


	


