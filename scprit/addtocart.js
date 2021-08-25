let cartbtn = document.getElementById(`addtocart`);
cartbtn.addEventListener("click", function () {
  let data = JSON.parse(localStorage.getItem("productdetails"));
  cartfun(data);
});

function cartfun(el) {
  let status = JSON.parse(localStorage.getItem("logedin"));
  if (status === false) {
    alert(`please login`);
    setTimeout(function () {
      window.location.href = "login.html";
    },2000);
  } else if (status === true) {
    let arr;
    arr = localStorage.getItem("cart");
    if (arr === null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("cart"));
    }
    arr.push(el);
    localStorage.setItem("cart", JSON.stringify(arr));
  }
}
