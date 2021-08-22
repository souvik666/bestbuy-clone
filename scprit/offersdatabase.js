let offers = [
  {
    name: "Smart TVs as low as $139.99.",
    meta:
      "Stream directly from your favorite services such as Disney+, Netflix, Hulu, Amazon Prime Video and more.",
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-mmt442401-DER-220391aa-db40-46fa-89c0-1397d9f5dbc8.jpg;maxHeight=504;maxWidth=740",
  },
  {
    name: "Major Appliance Summer Event.",
    meta:
      " industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_MMT-431113_der-fdbc760d-e72c-4c09-9983-e04db2cb700a.jpg;maxHeight=504;maxWidth=740",
  },
  {
    name: "Madden NFL 22.",
    meta:
      "Take your team to the championship in this ultimate test of NFL gaming.",
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/dam/sol-84157-madden-22-pol-c24a70c8-5891-4816-a54a-b2567eb34d8f.jpg;maxHeight=504;maxWidth=740",
  },
  {
    name: `MacBook
    Students save up to $550 total on select models`,
    meta: `after instant savings, Student Deals or both.
    Minimum savings is $100. Excludes open-box items. Terms and conditions apply.`,
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_sd-macbook-pro-6366564-CO-75748-no-touch-0524-der-ef7e340d-c332-4f7d-b032-e6607739d272.jpg;maxHeight=408;maxWidth=600",
  },
  {
    name: "Top Deals.",
    meta: "Explore the latest and greatest deals, all in one place. ",
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/pol_top_deals-99079.jpg;maxHeight=408;maxWidth=600",
  },
  {
    name: "Call of Duty: Vanguard.",
    meta: `Experience World War II combat as never before and witness the origins of the Special Forces in the newest Call of Duty installment.
    Release date: Friday, 11/5/21.`,
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/dam/sol-85998-call-of-duty-pol-a20c0707-18ef-4136-96df-8d27ea45c651.jpg;maxHeight=408;maxWidth=600",
  },
];

localStorage.setItem("offersforyou", JSON.stringify(offers));

//appending the data to offers section

function offerappend(d) {
  let data = d;
  let maindiv = document.getElementById(`offergrid`);
  data.forEach(function (el) {
    let div = document.createElement("div");
    div.setAttribute("class", "card");
    let img = document.createElement("img");
    img.src = el.img;
    let name = document.createElement("p");
    name.textContent = el.name;
    name.setAttribute("id", "ofername");
    let meta = document.createElement("p");
    meta.setAttribute("id", "offermeta");
    meta.innerHTML = el.meta;
    div.append(img, name, meta);
    maindiv.append(div);
  });
}
offerappend(JSON.parse(localStorage.getItem("offersforyou")));

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

function appendreleted(d) {
  let data = d;
  let maindiv = document.getElementById(`relatedpro`);
  data.forEach(function (el) {
    let div = document.createElement("div");
    let pname = document.createElement(`p`);
    pname.innerHTML = el.name.split(" ").slice(0, 7);
    let img = document.createElement("img");
    img.src = el.img[0];
    /*   let rating = document.createElement("img");
    rating.src = `https://image.shutterstock.com/image-vector/stars-rating-icon-four-golden-260nw-1729995094.jpg`;
    rating.setAttribute("class", "reerating") */ let price = document.createElement(
      "p"
    );
    price.setAttribute("id", "relatedpro");
    price.innerHTML = el.price;
    div.append(img, pname, price);
    maindiv.append(div);
  });
}
appendreleted(JSON.parse(localStorage.getItem(`Products`)));

function appendlikedd(d) {
    let data = d;
    let maindiv = document.getElementById(`likedalso`);
    data.forEach(function (el) {
      let div = document.createElement("div");
      let pname = document.createElement(`p`);
      pname.innerHTML = el.name.split(" ").slice(0, 7);
      let img = document.createElement("img");
      img.src = el.img[0];
      /*   let rating = document.createElement("img");
      rating.src = `https://image.shutterstock.com/image-vector/stars-rating-icon-four-golden-260nw-1729995094.jpg`;
      rating.setAttribute("class", "reerating") */ let price = document.createElement(
        "p"
      );
      price.setAttribute("id", "relatedpro");
      price.innerHTML = el.price;
      div.append(img, pname, price);
      maindiv.append(div);
    });
  }
  appendlikedd(JSON.parse(localStorage.getItem(`Products`)))



  function appendFeatured(d) {
    let data = d;
    let maindiv = document.getElementById(`Featuredss`);
    data.forEach(function (el) {
      let div = document.createElement("div");
      let pname = document.createElement(`p`);
      pname.innerHTML = el.name.split(" ").slice(0, 7);
      let img = document.createElement("img");
      img.src = el.img[0];
      /*   let rating = document.createElement("img");
      rating.src = `https://image.shutterstock.com/image-vector/stars-rating-icon-four-golden-260nw-1729995094.jpg`;
      rating.setAttribute("class", "reerating") */ let price = document.createElement(
        "p"
      );
      price.setAttribute("id", "relatedpro");
      price.innerHTML = el.price;
      div.append(img, pname, price);
      maindiv.append(div);
    });
  }
appendFeatured(JSON.parse(localStorage.getItem('Products')))