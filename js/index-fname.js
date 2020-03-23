// run getUserFname() function as soon as the webpage is loaded
window.onload = getUserFname;

// function that retrieves (or gets) the user's first name and displays it
function getUserFname() {
	// variable that holds the text value of the user's first name from localStorage
	var fname = localStorage.getItem("fname");

	// check whether there is a 'fname' item in localStorage, otherwise
	// display a prompt to get the user's first name
	while(!fname) {
		fname = prompt("Please enter your first name:");
		if(fname) localStorage.setItem("fname", fname);
	}
	
	// the first paragraph will be customized to greet the user
	greetings = document.getElementById("greetings");
	greetings.innerHTML = "Greetings, " + fname 
		+ "! <br/>(To reset your name, please visit to the Contact Me page and click the reset button.)";
}
