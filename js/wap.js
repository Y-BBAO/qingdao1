

var wap1=document.getElementById('wap-head1-con2');
var wap2=document.getElementById('wap-head2-con2');
var sls=wap2.getElementsByTagName('em');
var dvs1=wap1.getElementsByTagName('div');
var bt=document.getElementById('bt');
var a1=bt.getElementsByTagName('a');
var wap3=document.getElementById('wap-head2-con1');
var vrs=wap3.getElementsByTagName('var');
var vrs1=wap1.getElementsByTagName('var');
console.log(vrs1.length);

	a1[3].style.color="#090909";
	for (var i = 0; i < dvs1.length; i++) {
		dvs1[i].onclick=function(){
			for (var i = 0; i < dvs1.length; i++) {
				dvs1[i].className="";
				sls[i].className="";
				vrs[i].className="";	
				vrs1[i].className="";	
				if (dvs1[i]==this) {
					dvs1[i].className="show1";
					vrs[i].className="show2";
					vrs1[i].className="show3";
					sls[i].className="select";
				};
			};			
		}
	};