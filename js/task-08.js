const formToSubmit = document.querySelector(".login-form");

formToSubmit.addEventListener("submit", handleSubmit); 


function handleSubmit(event) {
 event.preventDefault();
 const myForm = event.target;
 const myEmail = myForm.elements.email.value;
 const myPassword = myForm.elements.password.value;
 const userData = {
  Email: myEmail,
  Password: myPassword
 }
 if (myEmail === "" || myPassword === "") {
  alert("It is necessary to complete all the fields!");
 } else {
  console.log(userData);
  myForm.reset();
 }
}
