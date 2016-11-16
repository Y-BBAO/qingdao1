

var guanyu1=document.getElementById('guanyu-head1-con2');
var guanyu2=document.getElementById('guanyu-head2-con1');
var guanyu3=document.getElementById('guanyu-head2-con2');
var bt=document.getElementById('bt');
var guanyua1=bt.getElementsByTagName('a');
var dvs1=guanyu1.getElementsByTagName('div');
var vrs1=guanyu1.getElementsByTagName('var');
var vrs2=guanyu2.getElementsByTagName('var');
var dvs2=guanyu3.getElementsByTagName('div');
console.log(guanyua1.length);
	
	guanyua1[0].style.color="#090909";
for (var i = 0; i < dvs1.length; i++) {
	dvs1[i].onclick=function(){
		for (var i = 0; i < dvs1.length; i++) {
			dvs1[i].className="";
			dvs2[i].className="";
			vrs1[i].className="";
			vrs2[i].className="";
			if (dvs1[i]==this) {
				dvs1[i].className="show1";
				dvs2[i].className="show3";
				vrs1[i].className="show1";
				vrs2[i].className="show2";
			};
		};
	}
};