// event listeners for the campus images rollover effect
document.getElementById("myCampusImg").addEventListener("mouseover", showBorder, false);
document.getElementById("myCampusImg").addEventListener("mouseout", clearBorder, false);

//function that displays a border around the campus image
function showBorder() {
    document.getElementById("myCampusImg").style.border = "2px dashed rgb(52, 124, 52)";
}

// function that removes the border around the campus image
function clearBorder() {
    document.getElementById("myCampusImg").style.border = "2px solid white";
}

