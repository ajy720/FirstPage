$(document).ready(function(){
	clock();

})

function clock(){
		var d = new Date();
		var msg;

		if(d.getHours()<10) $("#hour").text("0" + d.getHours());
		else $("#hour").text(d.getHours());

		if(d.getMinutes()<10) $("#min").text("0" + d.getMinutes());
		else $("#min").text(d.getMinutes());

		if(d.getSeconds()<10) $("#sec").text("0" + d.getSeconds());
		else $("#sec").text(d.getSeconds());

		setTimeout("clock()",1000);
};

function Alert(){
	alert("물론 검색은 안 됨 ㅎ ㅋ");
};

