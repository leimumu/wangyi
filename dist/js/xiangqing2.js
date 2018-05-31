$(function(){
	/*$("#nav .last").mouseover(function(){
		$("#nav dl").show();
	});
	$("#nav .last").mouseout(function(){
		$("#nav dl").hide();
	});*/
	$(window).scroll(function(){
		var t = $(document).scrollTop();
		if(t>=1000){
			$("#bottom_wrap").addClass("gd");
			$(".bottom_right").addClass("gd");
		}else{
			$("#bottom_wrap").removeClass("gd");
			$(".bottom_right").removeClass("gd");
		}
	});
	
	
	

var Imga = $(".L-I img");
var Img = $(".L-B img");
for(var i = 0; i < Img.length; i++){		
	Img[i].index=i;
	Img[i].onmouseover=function(){
		console.log(Img[this.index])
		$(".L-I")[0].children[0].src = Img[this.index].src;
			//console.log($(".L-I")[0].children[0].src)
	}
}

	var products = [{
	id: 1001,
	title: "子歆家2018春夏新品复古甜美透视蕾丝刺绣仙女裙喇叭袖荷叶边宽松显瘦网纱两件套连衣裙中长裙",
	price: 180,
	imgUrl: "img/1.jpg"
}, {
	id: 1002,
	title: "性感透视网纱重工蝴蝶刺绣高腰连衣裙镂空绣花仙女裙礼服裙长裙子",
	price: 168,
	imgUrl: "img/2.jpg"
},{
	id: 1003,
	title: "子歆家文艺复古碎花刺绣网纱连衣裙名媛气质性感露背度假沙滩裙子",
	price: 168,
	imgUrl: "img/3.jpg"
},{
	id: 1004,
	title: "夏季七分袖喇叭袖大摆碎花刺绣雪纺连衣裙森女系清新仙女裙长裙子",
	price: 189,
	imgUrl: "img/4.jpg"
},{
	id: 1005,
	title: "子歆家一字肩镂空刺绣雪纺连衣裙波西米亚度假露肩沙滩裙长裙女夏",
	price: 148,
	imgUrl: "img/5.jpg"
}];


console.log(location.search);
var ID = location.search.split("=")[1];
console.log(ID);
var attr = [];
for(var i = 0; i < products.length; i++){
	if(ID == products[i].id){
		console.log(products[i]);
		attr.push(products[i]);
	}
}
console.log(attr[0].imgUrl);

$(".right_p h2").html(attr[0].title);
$(".L-I")[0].children[0].src = attr[0].imgUrl;
$(".color")[0].children[0].src = attr[0].imgUrl;
$(".L-B")[0].children[0].children[0].src = attr[0].imgUrl;
$(".price .ps .sp em").html(attr[0].price);
/*var aBtn = document.getElementById("btt");
var oNum = document.getElementsByClassName("s");
if(getCookie("cart") !== undefined) {
	var obj = JSON.parse(getCookie("cart"));
} else {
	var obj = {};
}
var sum = 0;
for(var b in obj) {
	sum += obj[b];
	//console.log(sum);
}
oNum.innerHTML = sum;
for(var i = 0; i < aBtn.length; i++) {
	aBtn[i].onclick = function() {
		oNum.addClass("num");
		var productId = this.getAttribute("data-id");
		console.log(product-id);
		if(obj[productId] == undefined) {
			obj[productId] = 1;
		} else {
			obj[productId]++;
		}
		var sum = 0;
		for(var b in obj) {
			sum += obj[b];
		}
		oNum.innerHTML = sum;
		var objToStr = JSON.stringify(obj);
		setCookie("cart", objToStr, 7);
	}
}*/
})