export function validateName(name) {
  var fullname = name.split(" ");
  for (var i = 0; i < fullname.length; i++) {
    console.log(fullname[i]);
    if (fullname[i].length < 2) {
      return false;
    }
  }
  return true;
}
export function validateAddress(address) {
  //split the address and get the last section of the addres
  var fulladdress = address.split(" ");
  var addressnummer = fulladdress[fulladdress.length - 1];
  //search for numbers in the last section of the address 
  var regex = /[0-9]+/g;
  var l = addressnummer.search(regex);
  console.log(addressnummer.search(regex));
  if (l == -1) {return false;}else {return true; }
}

export function validateCity(name) {}
export function validatePostalCode(name) {}
