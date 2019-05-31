import { validateName } from "./validators.js";

export function setEventListener() {
  document.getElementById("btnSend").addEventListener("click", buttonClicked);
}

function buttonClicked() {
  event.preventDefault();
  var name = document.getElementById("inputName").value;
  console.log(name);

  if (validateName(name) == false) {
    var text = "fucking shit";
    var elementName = (document.getElementById("validation").innerHTML = text);
    document.getElementById("validationAlert").style.display = "block";
  } else {
    document.getElementById("validationAlert").style.display = "none";
    location.reload();
  }
}
