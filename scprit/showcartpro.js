function appendcartitems() {
  let data = JSON.parse(localStorage.getItem(`cart`));
  let maindiv = document.getElementById(`mycartitem`);
  data.forEach(function (el) {
    let div = document.createElement(`div`);
    div.setAttribute("id", "productcont");

    let img = document.createElement("img");
    img.src = el.img[2];
    let name = document.createElement(`p`);
    name.innerHTML = el.name;
    let remove = document.createElement("p");
    remove.setAttribute(`id`, `removeme`);
    remove.addEventListener("click", function () {
      removeproduct(el);
    });
    remove.innerHTML = `remove`;

    let count = document.createElement(`p`);
    count.innerHTML = "count" + " " + el.count;

    let price = document.createElement("p");
    price.setAttribute("id", "productprice");
    price.innerHTML = "$" + el.price;

    div.append(img, name, price, remove, count);
    maindiv.append(div);
  });
}
appendcartitems();

function cartsum() {
  let data = JSON.parse(localStorage.getItem(`cart`));
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    let tmp = Number(data[i].price.split("").slice(1).join(""));
    if (tmp !== "NaN") {
      sum += tmp;
    }
  }
  let countsum = 0;
  for (let i = 0; i < data.length; i++) {
    countsum += data[i].count;
  }
  document.getElementById(`total`).getElementsByTagName("span")[0].innerHTML =
    (sum * countsum) | (0 + 92);
  document
    .getElementById(`contforprice`)
    .getElementsByTagName("span")[0].innerHTML = (sum * countsum) | 0;
  let hook = (sum * countsum) | (0 + 92);

  localStorage.setItem("cartsum", JSON.stringify(hook));
}
cartsum();

function removeproduct(el) {
  let cart = JSON.parse(localStorage.getItem(`cart`));
  let newcart = [];
  for (let i = 0; i < cart.length; i++) {
    if (el.name !== cart[i].name) {
      newcart.push(cart[i]);
    }
  }
  localStorage.setItem("cart", JSON.stringify(newcart));
}
