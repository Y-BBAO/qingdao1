
var shuju1=document.getElementById('shuju-head1-con2');
var shuju2=document.getElementById('shuju-head2-con1');
var shuju3=document.getElementById('shuju-head2-con2');
var bt=document.getElementById('bt');
var shujua1=bt.getElementsByTagName('a');
var vrs1=shuju1.getElementsByTagName('var');
var vrs2=shuju2.getElementsByTagName('var');
var dvs1=shuju1.getElementsByTagName('div');
var dvs2=shuju3.getElementsByTagName('div');
console.log(shujua1.length);

	shujua1[2].style.color="#090909";
for (var i = 0; i < dvs1.length; i++) {
	dvs1[i].index=i;
	dvs1[i].onclick=function(){		
		for (var i = 0; i < dvs1.length; i++) {
			dvs1[i].className="";
			dvs2[i].className="";
			vrs1[i].className="";
			vrs2[i].className="";
			if (dvs1[i]==this) {
				this.className="show1";
				vrs1[this.index].className="show1";
				vrs2[this.index].className="show2";
				dvs2[this.index].className="show3";
		    };
		};
	}
};