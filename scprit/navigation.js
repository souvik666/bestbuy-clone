let status = JSON.parse(localStorage.getItem("logedin"));
let cartlen = JSON.parse(localStorage.getItem("cart"));
document.getElementById(`logo`).addEventListener("click", function () {
  window.location.href = "index.html";
});

let tmps = document.getElementById(`loginbtn`);
if (JSON.parse(localStorage.getItem(`logedin`)) === true) {
  tmps.innerHTML =
    "Hi" +
    " " +
    JSON.parse(localStorage.getItem(`username`)) +
    `<i class="fa fa-caret-down" aria-hidden="true"></i>`;
}

document.getElementById(`cartlogo`).addEventListener("click", function () {
  if (JSON.parse(localStorage.getItem(`logedin`)) === true) {
    window.location.href = "cart.html";
  } else {
    alert(`please login`);
    setTimeout(function () {
      window.location.href = "login.html";
    }, 2000);
  }
});

const convert = (arr) => {
  const res = {};
  arr.forEach((obj) => {
    const key = `${obj.name}${obj["New Lv1−Lv2"]}`;
    if (!res[key]) {
      res[key] = { ...obj, count: 0 };
    }
    res[key].count += 1;
  });
  return Object.values(res);
};

document.getElementById(`gotocart`).addEventListener("click", function () {
  let data = JSON.parse(localStorage.getItem("cart"));
  let newcart = convert(data);
  localStorage.setItem("cart", JSON.stringify(newcart));
  setTimeout(function () {
    window.location.href = "cart.html";
  }, 2000);
});
