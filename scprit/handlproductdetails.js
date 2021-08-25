function appendproductdetails() {
  let dataset = JSON.parse(localStorage.getItem(`productdetails`));
  //brand name
  let brand = document.getElementById(`brand`);
  brand.innerHTML = dataset.brand;

  ///product name

  let productname = document.getElementById(`productname`);
  productname.innerHTML = dataset.name;

  //model info

  let modelifo = document.getElementById(`model`);
  modelifo.innerHTML = dataset.model;

  let mainimg = document
    .getElementById(`productimg`)
    .getElementsByTagName("img")[0];
  mainimg.src = dataset.img[0];

  //small img showcase

  let showcaseimg = document
    .getElementById(`productimgs`)
    .getElementsByTagName(`img`);
  for (let i = 0; i < showcaseimg.length; i++) {
    showcaseimg[i].src = dataset.img[i];
  }
  //product price
  let priceofproduct = document.getElementById(`productprice`);
  priceofproduct.innerHTML = dataset.price;

  //emi
  let emaicost = document.getElementById(`emaicost`);
  let numprice = Number(dataset.price.split("").splice(1, dataset.price.length).join(""));
  emaicost.innerText = "$"+(numprice/12 | 0)+`/mo.*`;
}
appendproductdetails();

document.getElementById(`chkbx`).addEventListener(`click`, function () {
  prtotectionmoney();
});

function prtotectionmoney() {
  console.log("hi");
}

function suggestprodtyc() {
  let suggestion = [];
  let data = JSON.parse(localStorage.getItem(`Products`));
  let trgt = JSON.parse(localStorage.getItem(`productdetails`));
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].brand === trgt.brand &&
      data[i].name !==
        `Apple - 10.9-Inch iPad Air - Latest Model - (4th Generation) with Wi-Fi - 64GB - Sky Blue` &&
      data[i].name !==
        `Apple Watch Series 6 (GPS) 44mm Space Gray Aluminum Case with Black Sport Band - Space Gray`
    ) {
      suggestion.push(data[i]);
    }
  }
  localStorage.setItem("suggestion", JSON.stringify(suggestion));
}

suggestprodtyc();
function appendsuggestion(d) {
  let data = d;
  let maindiv = document.getElementById(`probopx`);
  data.forEach(function (el) {
    let div = document.createElement(`div`);
    div.setAttribute("class", "proimg");
    let pname = document.createElement(`p`);
    pname.innerHTML = el.name;
    let img = document.createElement(`img`);
    img.src = el.img[1];
    let price = document.createElement("p");
    price.innerHTML = el.price;
    price.setAttribute(`id`, "priceodsug");
    div.append(img, pname, price);
    maindiv.append(div);
  });
}
appendsuggestion(JSON.parse(localStorage.getItem("suggestion")));
