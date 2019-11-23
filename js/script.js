$(document).ready(function(){
	clock();
	document.querySelector("#searchengine input:first-child").addEventListener("change", e => {
		alert("google");
	});
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
};

