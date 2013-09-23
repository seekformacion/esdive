

function optlog(opt){
	
if(document.getElementById('M_optLbD')){document.getElementById('M_optLbD').style.visibility='hidden';document.getElementById('optLbD').style.visibility='hidden';};	
if(document.getElementById('M_optLbM')){document.getElementById('M_optLbM').style.visibility='hidden';document.getElementById('optLbM').style.visibility='hidden';};
if(document.getElementById('M_optLbS')){document.getElementById('M_optLbS').style.visibility='hidden';document.getElementById('optLbS').style.visibility='hidden';};

document.getElementById('M_' + opt).style.visibility='visible';	
document.getElementById(opt).style.visibility='visible';		
}

function submenu(id){
var current=document.getElementById(id).style.display;
var cl = document.getElementById(id + '_F').className;
if (current=='none'){document.getElementById(id).style.display="inherit";cl =cl.replace("dpD","dpU");}else{document.getElementById(id).style.display="none";cl =cl.replace("dpU","dpD");};	
document.getElementById(id + '_F').className=cl;	

 $(".content").mCustomScrollbar("update");
}




function getpadi(){


var url='http://www.padi.com/mypadi/pros/my-account/student-counts/';

$.getJSON(url, function(data) {
$.each(data, function(key, val) {

	document.getElementById('key').innerHTML=key;
	document.getElementById('val').innerHTML=val;
});
});

	
	
	
}