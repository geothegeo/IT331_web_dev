window.onload = function() {
	document.getElementById("appender").addEventListener("click", appendLi, false);
	startUp();
}

// function that sets up the color change for he outline
function startUp() {
	var bgColor = document.getElementById("outlineBg");
	bgColor.value = "#69d499";
	bgColor.addEventListener("input", updateFirst, false);
}

// function that changes the color of the outline
function updateFirst(event) {
	document.getElementById("learningList").setAttribute("style", "background-color: " + event.target.value + ";");
}

// function that adds the list node to the end of the 
function appendLi() {
	var inputTxt = document.getElementById("itemTxt").value;
	var newNode = document.createElement("li");
	var newText = document.createTextNode(inputTxt);
	newNode.appendChild(newText);
	document.getElementById("learningList").appendChild(newNode);z
}