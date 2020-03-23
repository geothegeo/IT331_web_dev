// run setCampusImg() function as soon as the webpage is loaded
window.onload = setCampusImg;

// variable that is a text array holding the image file paths
var campusImg = new Array("img/jc.jpg","img/aerial.jpg","img/rac.jpg");
// variable that stores the index of the image src
var randomNum;

// function that gets a random number and uses that number as the index for the text array
// to set an image for the Mason campus
function setCampusImg() {
    randomNum = Math.floor(Math.random() * 3);
    document.getElementById("myCampusImg").src = campusImg[randomNum]; 
}

// function that goes through the image file paths when the arrow buttons are clicked
function changeImg(num) {
    randomNum+= num;
    // make sure the index numbers stay within the bounds of the array
    if (randomNum == 3)
        randomNum = 0;
    if (randomNum == -1)
        randomNum = 2;
    document.getElementById("myCampusImg").src = campusImg[randomNum];
}
