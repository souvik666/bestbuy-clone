// Set the date we're counting down to
let hook = new Date("Feb 29, 2028 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  let now = new Date().getTime();
  let reamins = hook - now;
  let hours = Math.floor((reamins % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((reamins % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((reamins % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    "Time left" + " " + hours + ":" + minutes + ":" + seconds;

  if (reamins < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function appener() {
  let maindiv = document.getElementById("dealforyou");
  let data = JSON.parse(localStorage.getItem("Products"));
  let div = document.createElement("div");
  div.setAttribute("id", "imgbox");
  div.addEventListener("click", function () {
    let addme = JSON.parse(localStorage.getItem(`Products`));

    localStorage.setItem(
      `productdetails`,
      JSON.stringify(addme[addme.length - 3])
    );
    window.location.href = "/pages/prodcutdetails.html";
  });
  let trgt = data[data.length - 3];
  let img = document.createElement("img");
  img.src = trgt.img[0];
  let pname = document.createElement("p");
  pname.textContent = trgt.name;
  pname.setAttribute("class", "dealoftheproductNmae");
  let rating = document.createElement("img");
  rating.src = `https://image.shutterstock.com/image-vector/stars-rating-icon-four-golden-260nw-1739124839.jpg`;
  rating.setAttribute("class", "ratingdeal");

  let price = document.createElement("p");
  price.setAttribute("class", "pricedeal");
  price.textContent = trgt.price;

  let discount = document.createElement("p");
  discount.textContent = trgt.price.split("$").map(Number).splice(1) + 100;
  discount.setAttribute("class", "discountprice");

  div.append(img, pname, rating, price, discount);
  maindiv.append(div);
}
appener();
