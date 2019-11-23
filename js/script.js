var naverEngine = "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=";
var googleEngine = "https://www.google.com/search?q=";
var selectEngine= "google";

$(document).ready(function(){
	clock();

	document.querySelector("#google input").addEventListener("change", ()=>{
		console.log("Google");
		selectEngine = "google";
	});

	document.querySelector("#naver input").addEventListener("change", ()=>{
		console.log("Naver");
		selectEngine = "naver";
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

function Search(){
	event.preventDefault();
	var keyword = $("#searchinput").val();
	var url;
	if(selectEngine === "google") url = googleEngine + keyword;
	else if(selectEngine === "naver") url = naverEngine + keyword;
	window.open(url);
	console.log(url);
};

