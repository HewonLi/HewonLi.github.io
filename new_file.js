(function($){
	
	var opation = {   //默认参数
		week:["日","一","二","三","四","五","六",],
		dir:["left","right"],
		line:["/","/"]
	}
	var setting = {};
	var parent = null;
	function rili(obj){
		obj = obj||{};
		setting = $.extend(opation, obj);
		parent = this;
		createBox(parent)
		time()
		createLi()
	}
	function createBox(parent){
		var html = "<header>"+
				"<h2>"+
					
				"</h2>"+
				"<div id='data'>"+
					"<span>2017</span>-"+
					"<span>05</span>-"+
					"<span>25</span>&nbsp;&nbsp;星期&nbsp;:"+
					"<span>四</span>"+
				"</div>"+
			"</header>"+
			"<div id='middle'>"+
				"<nav class='clearfixed'>"+
					"<div id='left'>"+
						"<i>2017</i>&nbsp;年"+
						"<i>05</i>&nbsp;月"+
					"</div>"+
					"<div id='right'>"+
						"<a href='javascript:'>右</a>"+
						"<a href='javascript:'>左</a>"+
					"</div>"+
				"</nav>"+
				"<div id='day'>"+
					"<ul>";
						for(var i=0;i<setting.week.length;i++){
							html += '<li>'+setting.week[i]+'</li>'
						}
					html+= "</ul>"+
				"</div>"+
			"</div>"+
			"<div id='down'>"+
				"<ul>"+
					"<li>1</li>"+
					
				"</ul>"+
			"</div>"
			parent.html(html);
	}
	
	
	function time(){
		changeTime()
		setInterval(changeTime,1000)
		function changeTime(){
			var data = new Date();
			var hms = $("#nowtime h1");
			var h = data.getHours();
			var m = data.getMinutes();
			var s = data.getSeconds();
//			hms.html(h+":"+m+":"+s)
            var h2 = $("header h2")
			var str = toTime(h)+":"+toTime(m)+":"+toTime(s);
			h2.html(str)
		}
	}
	
	function createLi(){
		var list = $("#down");
		var data = new Date();
		data.setMonth(data.getMonth()+1);
		var nowDate = data.setDate(0);
		console.log(nowDate)
	}
	
	function toTime(n){
		return n>=10?""+n:"0"+n;
	}
	
	
	$.fn.extend({
		rili:rili
	})
	
	
	
	
	
	
})(jQuery)
