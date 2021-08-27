function appenderforchkout() {
  let data = JSON.parse(localStorage.getItem(`userinfo`));
  let useremailadd = document.getElementById(`useremail`);
  useremailadd.innerHTML = data.pass;
  let cartsum = JSON.parse(localStorage.getItem(`cartsum`));
  document.getElementById(`total`).innerHTML = "$" + cartsum;
}
appenderforchkout();

function validation() {
  let name = document.getElementById(`fname`);
  let email = document.getElementById(`email`);
  let address = document.getElementById(`adr`);
  let city = document.getElementById(`city`);
  let state = document.getElementById(`state`);
  let zip = document.getElementById(`zip`);
  let cname = document.getElementById(`cname`);
  let cnum = document.getElementById("cnum");
  let expmonth = document.getElementById(`expmonth`);
  let expyear = document.getElementById(`expyear`);
  let cvv = document.getElementById(`cvv`);
  if (
    email.value == "" ||
    name == "" ||
    address == "" ||
    city == "" ||
    state == "" ||
    zip == "" ||
    cname == "" ||
    cnum == "" ||
    cvv == "" ||
    expmonth == "" ||
    expyear == ""
  ) {
    alert(`all filed need to be field`);
  } else {
    window.location = "purchasesucess.html";
  }
}

document.getElementById(`donechek`).onclick = function () {
  validation();
};
