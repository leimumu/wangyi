$(function(){
	$("#btn").click(function(){
		var username = $("#i-idname").val();
		var password = $("#i-pw").val();
	$.post("http://h6.duchengjiu.top/shop/api_user.php",{status:"register",username:username,password:password},
		function(data){
			//console.log(data)
			if(data.code==0){
				console.log(data);
				window.location.href = "index.html";
			}
			else if(data.code==2002){
				alert("已存在");
			}
			else{
				alert("error")
			}
		})
	
	})
	
})