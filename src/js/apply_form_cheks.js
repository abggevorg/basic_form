import { validateName, validateAddress } from "./validators.js";

export function setEventListener() {
  document.getElementById("btnSend").addEventListener("click", buttonClicked);
}

function buttonClicked() {
  //don't reload the page
  event.preventDefault();

  //get valu of name and test it
  var name = document.getElementById("inputName").value;
  var text = "";
  if (validateName(name) == false) {
    text = "Bad name pls try again <br> ";
  }

  //get valu of adress and test it
  var address = document.getElementById("inputAddress").value;
  console.log(validateAddress(address));
  if (validateAddress(address) == false) {
    text += "Bad address pls try again <br>";
  } 

  // is de text is not empty or undifined show the error
  if (text) {
    document.getElementById("validation").innerHTML = text;
    document.getElementById("validationAlert").style.display = "block";
  } else {
    document.getElementById("validationAlert").style.display = "none";
  }
  
  console.log(text);

}
