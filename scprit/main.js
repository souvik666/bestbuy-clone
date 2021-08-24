//event lisnter to underline menu item
function underline() {
  let d = document.getElementsByClassName(`opt`);
  for (let i = 0; i < d.length; i++) {
    d[i].addEventListener("mouseover", function () {
      d[i].style = ` text-decoration: underline;`;
    });
  }
  for (let i = 0; i < d.length; i++) {
    d[i].addEventListener("mouseout", function () {
      d[i].style = ``;
    });
  }
}
underline();

//slidebar under interval
function showSlides() {
  let tmp = document.getElementById("slideshowcont");
  let img = document.createElement("img");
  let dots = document.getElementsByClassName("dot");
  img.src = slideshowdata[0];
  img.setAttribute("id", "tmimg");
  tmp.append(img);
  let i = 0;
  setInterval(() => {
    if (i === slideshowdata.length) {
      for (let j = 0; j < dots.length; j++) {
        dots[j].style.background = "";
      }
      i = 0;
    }
    img.src = slideshowdata[i];
    dots[i].style.background = `yellow`;
    i++;
  }, 3000);
}
showSlides();

function appendpro() {
  let data = JSON.parse(localStorage.getItem("Products"));
  let mainDiv = document.getElementById("products");
  data.forEach(function (el) {
    let div = document.createElement("div");
    div.addEventListener("click", function () {
      showdetails(el);
    });
    let p_name = document.createElement("p");
    p_name.innerHTML = el.name.split(" ").slice(0, 6);
    p_name.setAttribute("class", "pname");
    let p_Price = document.createElement("p");
    p_Price.innerHTML = el.price;

    let rating = document.createElement("img");
    rating.src = `https://image.shutterstock.com/image-vector/stars-rating-icon-four-golden-260nw-1729995094.jpg`;
    rating.setAttribute("class", "rating");
    let img = document.createElement("img");
    img.src = el.img[0];
    div.append(img, p_name, rating, p_Price);
    mainDiv.append(div);
  });
}
appendpro();

function showdetails(el) {
  let data = el;
  localStorage.setItem("productdetails", JSON.stringify(data));
  window.location.href = `prodcutdetails.html`;
}

ghost.underlineme("bns");
ghost.removeunderline("bns");

function secondsliderinhomephae() {
  let maindiv = document.getElementById(`featuredProducts`);
  let data = JSON.parse(localStorage.getItem("Products"));
  data.forEach(function (el) {
    let div = document.createElement("div");
    let pnme = document.createElement("p");
    pnme.innerHTML = el.name.split(" ").slice(0, 4);
    pnme.setAttribute("class", "fepname");
    let pprice = document.createElement("p");
    pprice.innerHTML = el.price;
    pprice.setAttribute("class", "fepprce");
    let img = document.createElement("img");
    img.src = el.img[0];
    let rating = document.createElement("img");
    rating.src = `https://image.shutterstock.com/image-vector/stars-rating-icon-four-golden-260nw-1729995094.jpg`;
    rating.setAttribute("class", "ferating");
    let discount = document.createElement("p");
    discount.textContent =
      (el.price.split("$").map(Number).splice(1) - 100) | 0;
    discount.setAttribute("class", "fediscountprice");
    div.append(img, pnme, rating, pprice, discount);
    maindiv.append(div);
  });
}
secondsliderinhomephae();
