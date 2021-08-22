let trgt = document.getElementsByClassName(`menu`)[0];
trgt.addEventListener("click", function () {
  let hook = document.getElementById(`menubox`);
  hook.style.display = "block";
});

function closeme(){
    let hook = document.getElementById(`menubox`);
  hook.style.display = "none";

}
ghost.getsoulID(`close`).on('click', closeme)
ghost.getsoulID(`close`).css(`cursor: pointer;`)