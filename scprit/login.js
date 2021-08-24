function shome() {
  document.getElementById(`loginbox`).style.display = "block";
}

function closmelog() {
  document.getElementById(`loginbox`).style.display = "none";
}
ghost.getsoulID(`loginbtn`).on(`click`, shome);
ghost.getsoulID(`closelogin`).on("click", closmelog);

ghost.getsoulID(`signmein`).on("click", function () {
  window.location.href = "login.html";
});

ghost.getsoulID(`addme`).on("click", function () {
  window.location.href = "signup.html";
});

//validation


