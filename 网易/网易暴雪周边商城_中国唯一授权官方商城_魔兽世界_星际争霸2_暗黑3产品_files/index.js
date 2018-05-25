/**
* TITLE: 主页JS控制
* AUTHOR: linmingshen
* LICENSE: 163.com
* TIME:2013-10-30
*/


var index={
    init:function(){
        this.tab_control();
        this.focus_init();
        this.focus_pic(3000);
    },
    //焦点图片初始化
    focus_init:function(){
        var focus_len = $(".focus_pic li").length;
        var btn_li = "";
        $(".focus_pic").css("width",focus_len*900+"px");
        for (var i=0;i<focus_len;i++){
            btn_li+="<li></li>";
        }
        $(".focus_btn").append(btn_li);
        $(".focus_btn li:first").css("background","#ee7207");
    },
    //焦点图片切换
    focus_pic:function(speed){
        var focus_width = -(parseInt($(".focus_pic li").length)-1)*900;
        var start=0;
        var count=0;
        function roll_time(){
            $(".focus_btn li").eq(count).css("background","#ee7207").siblings().css("background","#b8b8b8");
            if(parseInt($(".focus_pic").css("left"))<=focus_width){
                start=0;
                count=0;
            }else{
                start-=900;
                count=-parseInt($(".focus_pic").css("left"))/900+1;
            }
        }
        //控制 focus_btn
        $(".focus_btn li").each(function(e) {
            /*
            $(this).click(function(){
                count=e;
                start=-900*(e);
                $(".focus_pic").animate({left:-900*e+"px"},300);            
                $(".focus_btn li").eq(e).css("background","#ee7207").siblings().css("background","#b8b8b8");
            })
            */
            $(this).mouseover(function(){
                $(".focus_pic").dequeue();
                count=e;
                start=-900*(e);
                $(".focus_pic").animate({left:-900*e+"px"},300);            
                $(".focus_btn li").eq(e).css("background","#ee7207").siblings().css("background","#b8b8b8");
            })
        });
        //定时器   
        var timer=setInterval(function(){
            $(".focus_pic").animate({left:start+"px"},300,roll_time);       
        },speed);
    },
    tab_control:function(){
        $(".tab_name li").each(function(e){
            $(this).mouseover(function(){
                $(this).css("background","#353a40").siblings().css("background","#20252a");
                $(".tab_show").eq(e).removeClass("dn").siblings().addClass("dn");
            });
        });
    }
}

