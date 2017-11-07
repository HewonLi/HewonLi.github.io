//资金管理右部tab切换
$(document).ready(function(){
	$(".accountBalanceRight .rechargeNav li").on("click",function(){
		$(this).parent().children().attr("class","")
		$(this).attr("class","rechargeActive")
//		console.log($(this).index())
//		console.log($(this).parent().children())
//		console.log($(".accountBalanceRight .rechargeContent .rechargeWay"))
		$(".accountBalanceRight .rechargeContent .rechargeWay").css("display","none")
		$(".accountBalanceRight .rechargeContent .rechargeWay").eq($(this).index()).css("display","block")
	})
})
