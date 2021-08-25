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
}
appendproductdetails();

document.getElementById(`chkbx`).addEventListener(`click`, function () {
  prtotectionmoney();
});

function prtotectionmoney() {
  console.log("hi");
}
