function validationoflogin() {
  let givenemail = document.getElementById("loginemail").value;
  let givenpass = document.getElementById(`loginpass`).value;
  let data = JSON.parse(localStorage.getItem(`user`));
  for (let i in data) {
    if (data[i].pass === givenpass && data[i].email === givenemail) {
      ans = true;
      localStorage.setItem("username", JSON.stringify(data[i].fanme));
      localStorage.setItem("userinfo", JSON.stringify(data[i]));

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
    handelusercart();
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
  }
}
checkstatus();

//signout
function signout() {
  let outbtn = document.getElementById(`signout`);
  outbtn.addEventListener(`click`, function () {
    handlelogout();
  });
}
signout();

function handlelogout() {
  let user = JSON.parse(localStorage.getItem(`userinfo`));
  let cart = JSON.parse(localStorage.getItem("cart"));
  let dataset = {};
  dataset = {
    user,
    cart,
  };

  addcartwithuser(dataset);
  localStorage.setItem("logedin", JSON.stringify(false));
  localStorage.removeItem("cart");
}
function addcartwithuser(el) {
  let arr;
  arr = localStorage.getItem("alluser");
  if (arr === null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem(`alluser`));
  }
  arr.push(el);
  localStorage.setItem("alluser", JSON.stringify(arr));
}

function handelusercart() {
  let data = JSON.parse(localStorage.getItem(`alluser`));
  let username = JSON.parse(localStorage.getItem(`username`));
  let newdata = [];
  let cart = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].user.fanme !== username) {
      newdata.push(data[i]);
    } else {
      cart = data[i].cart;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem(`alluser`, JSON.stringify(newdata));
}

