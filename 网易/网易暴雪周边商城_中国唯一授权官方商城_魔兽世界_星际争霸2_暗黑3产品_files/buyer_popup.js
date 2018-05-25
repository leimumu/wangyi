//$Id: buyer_popup.js 87901 2012-07-13 10:49:30Z zhouzhi@NETEASE.COM $
/* ����Ϊ���÷�ʽ��ʾ

 * Popup.confirmMsg("������ʾ",function(a){alert(a)});

 * Popup.alertMsg("������ʾ",function(a){alert(a)});
 * Popup.showLogin();
 * Popup.closeLogin();
 */

function getObj(id){
	return document.getElementById(id);	
}
function getBrowserHeight(){
	if (window.innerHeight){
		winHeight = window.innerHeight;
	}else if ((document.body) && (document.body.clientHeight)){
		winHeight = document.body.clientHeight;
	}
	if (document.documentElement && document.documentElement.clientHeight){
		winHeight = document.documentElement.clientHeight;
	}
	return winHeight;
}
function getBrowserWidth(){
	if (window.innerWidth){
		winWidth = window.innerWidth;
	}else if ((document.body) && (document.body.clientWidth)){
		winWidth = document.body.clientWidth;
	}
	if (document.documentElement && document.documentElement.clientWidth){
		winWidth = document.documentElement.clientWidth;
	}
	return winWidth;
}
function creatInput(val,tipe){
	var input=document.createElement("input");
	input.type=tipe;
	input.value=val;
	input.className="btn-warm";
	return input;	
}

function popup(){
	this.html='<div class="popInfo" id="sysMsg"><h3><a class="close" href="#" onclick="Popup.closeWin();return false;">��</a></h3><p id="msgText"></p><div id="btnCont" class="btns"></div></div>';
	this.dom=document.createElement("div");
	this.dom.innerHTML=this.html;
	this.dom.style.display="none";
	document.body.appendChild(this.dom);
	
	this.bodyHeight=document.body.offsetHeight;
	this.bodyWidth=document.body.offsetWidth;
	this.clientHeight=getBrowserHeight();
	this.clientWidth=getBrowserWidth();
	this.bodyHeight=this.bodyHeight<this.clientHeight?this.clientHeight:this.bodyHeight;
	this.msgWin=getObj("sysMsg");
	this.cover=getObj("cover");
	this.cover.style.height=this.bodyHeight+"px";
	this.cover.style.width=this.bodyWidth+"px";
	this.btnYes=creatInput("ȷ ��","button");
	this.btnCancel=creatInput("ȡ ��","button");
}


function isIE(){
    return navigator.appName=="Microsoft Internet Explorer";
}

popup.prototype={
	alertMsg:function(s,func){
		getObj("msgText").innerHTML=s;
		var m=this;
		this.show();
		this.btnYes.onclick=function(){
			m.closeWin();
			if(func){func(false)};
		}
		getObj("btnCont").appendChild(this.btnYes);
	},
	confirmMsg:function(s,func){
		getObj("msgText").innerHTML=s;
		var m=this;
		this.show();
		this.btnYes.onclick=function(){
			m.closeWin();
			if(func){func(true)};
		}
		this.btnCancel.onclick=function(){
			m.closeWin();
			if(func){func(false)};
		}
		getObj("btnCont").appendChild(this.btnCancel);
		getObj("btnCont").appendChild(this.btnYes);
	},
	show:function(){
		this.cover.appendChild(document.createElement("iframe"));
		this.cover.style.display="block";
		this.msgWin.style.display="block";
		this.dom.style.display="block";
		
		this.msgWin.style.top=(this.clientHeight-this.msgWin.offsetHeight)/2+document.documentElement.scrollTop+document.body.scrollTop+"px";
		this.msgWin.style.left=(this.clientWidth-this.msgWin.offsetWidth)/2+document.documentElement.scrollLeft+"px";
	},
	closeWin:function(){
		getObj("msgText").innerHTML="";
		getObj("btnCont").innerHTML="";
		this.cover.innerHTML="";
		this.cover.style.display="none";
		this.msgWin.style.display="none";
	},
	showLogin:function(){
		var login=getObj("popLogin");
		login.style.display="block";
		/*if(isIE()){
			this.cover.appendChild(document.createElement("iframe"));
		}*/
		this.cover.style.display="block";
		login.style.display="block";
		login.style.top=(this.clientHeight-login.offsetHeight)/2+document.documentElement.scrollTop+document.body.scrollTop+"px";
		login.style.left=(this.clientWidth-login.offsetWidth)/2+document.documentElement.scrollLeft+"px";
	},
	closeLogin:function(){
		getObj("popLogin").style.display="none";
		this.cover.innerHTML="";
		this.cover.style.display="none";
		this.msgWin.style.display="none";
        var nmenu = document.getElementById("nmenu");
        if(nmenu){
            document.getElementById("nmenu").style.display="none";
        }
	},
	bwcCardShow:function(){
		$("body").append("<div id='popLogin'  style='display:none'><a onclick='Popup.bwcCardRemove();' class='aClose'>�ر�</a><p class='txt'>����ѡ���ֳ�ȡ�����ͷ�ʽ֮��ֻ��ƾ���֤ԭ���Ͷ���������BWC�᳡����ȡ����Ԥ������Ʒ��</p><p class='bluetxt'>��ȷ���Ѿ�������BWC��Ʊ����</p><p class='bwcOk'><a onclick='Popup.bwcCardRemove();' class='btnW100' href='#'>�ǣ���ȷ��</a></p></div>");
		var login=$("#popLogin")[0];
		login.style.display="block";
		/*if(isIE()){
			this.cover.appendChild(document.createElement("iframe"));
		}*/
		this.cover.style.display="block";
		login.style.display="block";
		login.style.top=(this.clientHeight-login.offsetHeight)/2+document.documentElement.scrollTop+document.body.scrollTop+"px";
		login.style.left=(this.clientWidth-login.offsetWidth)/2+document.documentElement.scrollLeft+"px";		
	},
	bwcCardRemove:function(){
		$("#popLogin").remove();	
		$("#cover").hide();
	}
}

function new_popup(){
    if(typeof(Popup) != "undefined"){
        document.body.removeChild(Popup.dom);
    }
    return new popup();
}

window.onload=function(){
    Popup = new_popup();
}
window.onresize=function(){
	Popup=new_popup();//�������ڴ�Сʱ���¼��㴰�ڴ�С,�ṩ��������ж�λ
}
