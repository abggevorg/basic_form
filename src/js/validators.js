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
export function validateAddress(address) {}
export function validateCity(name) {}
export function validatePostalCode(name) {}
