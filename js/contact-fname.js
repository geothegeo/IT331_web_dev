// run setUserFname() function as soon as the webpage is loaded
/* window.onload = setUserFname; */

// function that retrieves the value of 'fname' from localStorage and sets 
// it as the value of the first name text input field from the contact form
/* function setUserFname() {
    fname = document.getElementById("fname");
    fname.value = localStorage.getItem("fname");
} */

// function that extends the form reset button functionality
// by clearing the localStorage item 'fname'
function resetFname() {
    localStorage.removeItem("fname");
    fname.value = "";
}

/*
$(function() {
    var commonName=["James", "John", "Robert", "Michael", "William", "David", "Richard",
        "Joseph", "Thomas", "Charles", "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth",
        "Barbara", "Susan", "Jessica", "Sarah", "Margaret"];
  $('#fname').autocomplete({
    source: commonName
  });
}); 
*/