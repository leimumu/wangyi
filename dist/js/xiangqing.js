var Imga = $(".pic-big img");
var Img = $(".pic-small img");
	for(var i = 0; i < 5; i++){
		
	Img[i].index=i;
	Img[i].onclick=function(){
			console.log(Img[this.index])
			$(".pic-big")[0].children[0].src = Img[this.index].src;
			console.log($(".pic-big")[0].children[0].src)
		}
	}
	

	
})
