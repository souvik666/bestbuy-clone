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
    remove.innerHTML = `remove`;

    let count = document.createElement(`p`);
    count.innerHTML = "count" + " " + el.count;

    let price = document.createElement("p");
    price.setAttribute("id", "productprice");
    price.innerHTML = el.price;

    div.append(img, name, price, remove, count);
    maindiv.append(div);
  });
}
appendcartitems();
