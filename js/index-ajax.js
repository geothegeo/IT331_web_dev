// variable to hold the XML Http Request
var request = new XMLHttpRequest();

// function to implement the Ajax
function retrieveIntro(url){
	if(request) {
		request.addEventListener("readystatechange", stateChange, false);
		request.open('GET', url, true);
		request.send(null);
	}
}

// function to display the text if retrieval was successful
function stateChange() {
	if (request.readyState == 4 && request.status == 200) {
		document.getElementById("introduction").innerHTML = request.responseText;
	}
}

// Add load event for the AJAX retrievel
window.addEventListener("load", function(){
	retrieveIntro("introduction.txt")
}, false);