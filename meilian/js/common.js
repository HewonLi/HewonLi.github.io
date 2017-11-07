/**
 * Created by Administrator on 2017/9/30.
 */
$(function(){

    function qiehuan(id,className,blockId) {
        $(id).click(function(){
            var i =$(this).index()
            $(this).addClass(className).siblings().removeClass(className)
            $(blockId).eq(i).show().siblings().hide()
        })
    }

	qiehuan('#EntrustWay ul li','EntrustWayActive','#EntrustWayForm table')
	qiehuan('.OperateDataTab >ul >li','OperateDataTabActive','#OperateDataContent >div')
	/*委托时间Tab切换*/


//	登录和退出
	$(".banner .userLogin .login_btn").click(function(){
		$(".banner .userLogin").css("display","none")
		$(".banner .userLogined").css("display","block")
		$(".topbar .topbar_right .topbar_login").css("display","none")
		$(".topbar .topbar_right .topbar_logined").css("display","block")

	})
	$(".topbar .topbar_right .topbar_logined .loginout").click(function(){
		$(".banner .userLogin").css("display","block")
		$(".banner .userLogined").css("display","none")
		$(".topbar .topbar_right .topbar_login").css("display","block")
		$(".topbar .topbar_right .topbar_logined").css("display","none")
	})

	$(".register .registCue .regeditButton").click(function(){
		$(".register").css("display","none")
		$(".register_success").css("display","block")
	})

  //头部货币选择
  function headerSelectCoin(){
    var dom =$('.headerSelectCoin>ul>li')
    for(var i=0;i<dom.length;i++){
      dom[i].onclick=function(){
        var value=$(this).text()
        $('.headerSelectCoin>span').text(value)

      }
    }
  }
  headerSelectCoin()




})
