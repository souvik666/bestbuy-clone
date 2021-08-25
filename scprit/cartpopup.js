function appendinfo() {
  let data = JSON.parse(localStorage.getItem(`productdetails`));
  let trgt = document
    .getElementById(`myrpoductimg`)
    .getElementsByTagName(`img`)[0];
  trgt.src = data.img[0];
  let secondtrgt = document
    .getElementById(`carsoul`)
    .getElementsByTagName(`img`)[0];
  secondtrgt.src = data.img[2];

  let thrid = document.getElementById(`productnames`);
  thrid.innerText = data.name;
}
appendinfo();

let closetbtn = document.getElementById(`closebtn`);
closetbtn.addEventListener("click", function () {
  document.getElementById(`cartpopup`).style.display = "none";
});
