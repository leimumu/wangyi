var products = [{
	id: 1001,
	title: "守望先锋 艺术设定集 中文版画册",
	price: 180,
	imgUrl: "http://c.cotton.netease.com/buckets/1BquJi/files/02H37Mp9WU.jpeg"
}, {
	id: 1002,
	title: "暗黑破坏神III 拉链卫衣",
	price: 399,
	imgUrl: "http://c.cotton.netease.com/buckets/1BquJi/files/03F8cVac0P.jpeg"
},{
	id: 1003,
	title: "暗黑破坏神III 夺魂之镰 硅胶卡套",
	price: 48,
	imgUrl: "http://c.cotton.netease.com/buckets/1BquJi/files/03FWovhEvq.jpeg"
},{
	id: 1004,
	title: "《守望先锋》雷蛇（Razer）D.Va同款 游戏耳麦 电脑手机通用耳麦",
	price: 599,
	imgUrl: "http://c.cotton.netease.com/buckets/1BquJi/files/03HmFygW0K.jpeg"
},{
	id: 1005,
	title: "守望先锋 死神 图标 短袜",
	price: 18,
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

$(".main-end h2").html(attr[0].title);
$(".pic-big")[0].children[0].src = attr[0].imgUrl;
//$(".color")[0].children[0].src = attr[0].imgUrl;
$(".pic-small")[0].children[0].children[0].src = attr[0].imgUrl;
$(".jiage .sp").html(attr[0].price);