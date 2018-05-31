$(function(){
	$("#btn").click(function(){
		$("#cnt-box").show();
		
	})
	$("#dldown").click(function(){
			$("#cnt-box").hide();
		})
	/*$(".dl").click(function(){
			$.post("http://h6.duchengjiu.top/shop/api_user.php",{status:"login",username:$(".dlemail").val(),password:$(.dlpassword).val()},
				function(){
					if(data.code==0){
						console.log(data);
						window.location.href = "index.html";
					}
				}
			)
		})*/
	$(window).scroll(function(){
		var  scroll = $(this).scrollTop();
		if(scroll>=500){
			$(".gotoTop").show();
			
		}
		else{
			$(".gotoTop").hide();
		}
		
	})
	$(".gotoTop").click(function(){
			
				$("body,html").animate({"scroll":0});
				console.log("aaa");
			})

		
})
