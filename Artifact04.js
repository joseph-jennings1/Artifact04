function ValidateForm() {
 var validFirstName = false; //done
 var validLastName = false; //done
 var validEmail = false; //done
 var validPhone = false; //done
 var validUsername = false; //done
 var validUserPassword = false; //done
 var validAddress = false; //done
 var validCity = false;  //done
 var validZipcode = false;

 var errorMessages =""; 
 var numbers = /^[0-9]+$/;
 var letters = /^[A-Za-z]+$/;

 // All the error messages are going to stay in this variable
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

/*********** VALIDATES USERNAME ******** */
//required. maximum of 12 characters.
 if (myContact.Username.value.length > 12 ||
 myContact.Username.value===null ||
 myContact.Username.value==="")
 errorMessages += "<p>The Username must be less than 13 characters and it is required.</p>";
  else
 validUsername =true;

 /*********** VALIDATES Firstname ******** */
 if (myContact.firstname.value===null ||
 myContact.firstname.value=== "" ||
 myContact.firstname.value.length >20 ||
 !myContact.firstname.value.match(letters))
 errorMessages += "<p>The Firstname must be less than 20 characters and it is required. Only letters and numbers are accepted.</p>";
 else
 validFirstName = true; 

/*********** VALIDATES Lastname ******** */
 if (myContact.lastname.value===null ||
 myContact.lastname.value=== "" ||
 myContact.lastname.value.length >50 ||
 !myContact.lastname.value.match(letters))
 errorMessages += "<p>The Lastname must be less than 51 characters and it is required. Only letters are accepted.</p>";
 else
 validLastName = true; 

/*********** VALIDATES phone number ******** */
 if (myContact.phone.value===null ||
 myContact.phone.value=== "" ||
 myContact.phone.value.length >15 ||
 !myContact.phone.value.match(numbers))
 errorMessages += "<p>The Phone Number must be less than 16 characters and it is required. Only numbers are accepted.</p>";
 else
 validPhone = true; 

/*********** VALIDATES PASSWORD ******** */
 if (myContact.password.value===null ||
 myContact.password.value=== "" ||
 myContact.password.value.length >7)
 errorMessages += "<p>The Password must be less than 8 characters and it is required</p>";
 else
 validUserPassword = true; 

/*********** VALIDATES Email ******** */
 var userEmail = document.getElementById("email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) 
     errorMessages += "<p>Invalid Email.</p>";
else
   validEmail = true

/*********** VALIDATES Address ******** */
//required. maximum of 12 characters.
 if (myContact.address.value===null ||
 myContact.address.value==="")
  errorMessages += "<p>An Address is required.</p>";
  else
 validAddress =true;

/*********** VALIDATES City ******** */
 if (myContact.lastname.value===null ||
 myContact.lastname.value=== "" ||
 !myContact.lastname.value.match(letters))
 errorMessages += "<p>A City is required. Only letters are accepted.</p>";
 else
 validLastName = true; 


/*********** VALIDATES Zipcode ******** */

 var country = document.getElementById("country").value;
if (country === "USA" &&
(myContact.zipcode.value === null ||
myContact.zipcode.value === "" ||
myContact.zipcode.value.length ===5 ||
!myContact.zipcode.value.match(numbers))
errorMessages += "<p>A valid Zipcode of 5 numbers is required.</p>";
else
	validZipcode = true; 

/*
if (myContact.zipcode.value === null ||
myContact.zipcode.value === "" ||
myContact.zipcode.value.length !=5 ||
!myContact.zipcode.value.match(numbers))
errorMessages += "<p>A valid Zipcode of 5 numbers is required.</p>";
else
	validZipcode = true;
	*/

 document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return (validFirstName && validLastName && validEmail && validPhone && validUsername && validUserPassword && validAddress && validCity && validZipcode) ;
}
