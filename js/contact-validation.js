// Date Picker
$(function() {
	$( "#calendar" ).datepicker(); 
});

// Validation
$.validate({
  lang: 'en'
});
/*$("#myForm").validate({
// Specify validation rules
rules: {
  firstname: {
	required: true
  },
  lastname: {
	required: true
  },
  email: {
	required: true,
	email: true
  },
  phone: {
	required: true,
	phoneUS: true
  }
},
// Specify error messages
messages: {
  firstname: "Please enter your first name",
  lastname: "Please enter your last name",
  email: {
	required: "Please enter a valid email",
	email: "Your email address must be in the format of name@domain.com"
  },
  phone: {
	required: "Please enter a valid phone number",
	phoneUS: "Your phone number must be in the format of ###-###-####"
  }
}  
});*/
