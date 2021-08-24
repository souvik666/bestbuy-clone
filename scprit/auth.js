function validationoflogin() {
  let givenemail = document.getElementById("loginemail").value;
  let givenpass = document.getElementById(`loginpass`).value;
  let data = JSON.parse(localStorage.getItem(`user`));
  for (let i in data) {
    if (data[i].pass === givenpass && data[i].email === givenemail) {
      ans = true;
      localStorage.setItem("username", JSON.stringify(data[i].fanme));
      break;
    } else {
      ans = false;
    }
  }
  return ans;
}

let btn = document.getElementById("loginbtn");
btn.addEventListener("click", function () {
  if (validationoflogin()) {
    window.location.href = "loginsucess.html";
    localStorage.setItem("logedin", "true");
  } else {
    alert(`invalid credential`);
  }
});

function checkstatus() {
  let hook = JSON.parse(localStorage.getItem("logedin"));
  let name = JSON.parse(localStorage.getItem("username"));
  if (hook === true) {
    document.getElementById(`loginbtn`).textContent += "hi," + " " + name + "▼";
    document.getElementById("signmein").style.display = "none";
    document.getElementById("addme").style.display = "none";
    document.getElementById(`signout`).style.display = "block";
    localStorage.setItem("cart", JSON.stringify([]));
  }
}
checkstatus();
