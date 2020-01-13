var naverEngine = "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=";
var googleEngine = "https://www.google.com/search?q=";
var daumEngine = "https://search.daum.net/search?w=tot&q=";
var youtubeEngine = "https://www.youtube.com/results?search_query=";

var selectEngine= "google";

$(document).ready(function(){
	clock();

	document.querySelector("#google input").addEventListener("change", ()=>{
		console.log("Google");
		selectEngine = "google";
		$("#search #searchbar").css({
			"border-top" : "10px solid rgb(66,133,244)",
			"border-left" : "10px solid rgb(234,67,53)",
			"border-right" : "10px solid rgb(251,188,5)",
			"border-bottom" : "10px solid rgb(52,168,83)"
		});
	});

	document.querySelector("#naver input").addEventListener("change", ()=>{
		console.log("Naver");
		selectEngine = "naver";
		$("#search #searchbar").css({
			"border" : "10px solid #03cf5d"
		});
	});

	document.querySelector("#daum input").addEventListener("change", ()=>{
		console.log("Daum");
		selectEngine = "daum";
		$("#search #searchbar").css({
			"border" : "10px solid #0089ff"
		});
	});

	document.querySelector("#youtube input").addEventListener("change", ()=>{
		console.log("Youtube");
		selectEngine = "youtube";
		$("#search #searchbar").css({
			"border" : "10px solid #CC2A2A"
		});
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
	else if(selectEngine === "daum") url = daumEngine + keyword;
	else if(selectEngine === "youtube") url = youtubeEngine + keyword;
	window.open(url);
	console.log(url);
};

