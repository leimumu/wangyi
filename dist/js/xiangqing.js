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
	
var products = [{
	id: 1001,
	title: "守望先锋",
	price: 180,
	imgUrl: "http://c.cotton.netease.com/buckets/1BquJi/files/02H37Mp9WU.jpeg"
}, {
	id: 1002,
	title: "守望先锋",
	price: 168,
	imgUrl: "http://c.cotton.netease.com/buckets/1BquJi/files/03F8cVac0P.jpeg"
},{
	id: 1003,
	title: "守望先锋",
	price: 168,
	imgUrl: "http://c.cotton.netease.com/buckets/1BquJi/files/03FWovhEvq.jpeg"
},{
	id: 1004,
	title: "守望先锋",
	price: 189,
	imgUrl: "http://c.cotton.netease.com/buckets/1BquJi/files/03HmFygW0K.jpeg"
},{
	id: 1005,
	title: "守望先锋",
	price: 148,
	imgUrl: "http://c.cotton.netease.com/buckets/1BquJi/files/03HmwoClfj.jpeg"
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
	
})
