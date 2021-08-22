/* let fanme = document.getElementById(`fname`).value;
let lname = document.getElementById(`lname`).value;
let email = document.getElementById(`email`).value;
let pass = document.getElementById(`password`).value;
let consfirm = document.getElementById(`confirm`).value;
let phone = document.getElementById(`number`).value;
 */

function addusertolocalstrogae(el) {
  let arr;
  arr = localStorage.getItem("user");
  if (arr === null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("user"));
  }
  arr.push(el);
  localStorage.setItem("user", JSON.stringify(arr));
}
let triger = document.getElementById(`signup`);
triger.addEventListener(`click`, function () {
  let fanme = document.getElementById(`fname`).value;
  let lname = document.getElementById(`lname`).value;
  let email = document.getElementById(`email`).value;
  let pass = document.getElementById(`password`).value;
  let confirm = document.getElementById(`confirm`).value;
  let phone = document.getElementById(`number`).value;

  let data = {
    fanme,
    lname,
    email,
    pass,
    confirm,
    phone,
  };
  if (validation()) {
    addusertolocalstrogae(data);
    localStorage.setItem("cart", []);
  } else {
    alert(`invalid attempt`);
  }
});

//email validation
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
//passwod validation
function passwondchek(el1, el2) {
  if (el1 === el2) return true;
  else false;
}

//phone number validation
function telephoneCheck(str) {
  var a = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(
    str
  );
  return a;
}
function validation() {
  let fanme = document.getElementById(`fname`).value;
  let lname = document.getElementById(`lname`).value;
  let email = document.getElementById(`email`).value;
  let pass = document.getElementById(`password`).value;
  let confirm = document.getElementById(`confirm`).value;
  let phone = document.getElementById(`number`).value;
  if (
    validateEmail(email) &&
    passwondchek(pass, confirm) &&
    telephoneCheck(phone) &&
    fanme.length !== 0 &&
    lname.length !== 0
  ) {
    return true;
  }
  return false;
}
