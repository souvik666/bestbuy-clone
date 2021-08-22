// onclikc event for slider
function slider() {
  let sapn = document.getElementById(`myslider`).getElementsByTagName("span");
  let div = document.getElementById(`myslider`).getElementsByTagName("div");
  let l = 0;
  sapn[1].onclick = () => {
    l++; //for right scroll
    for (var i of div) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-740px";
      }
      if (l == 2) {
        i.style.left = "-1480px";
      }
      /*   if (l == 3) { i.style.left = "-2220px" }
              if (l == 4) { i.style.left = "-2967px" } */
      if (l > 4) {
        l = 4;
      }
    }
  };
  sapn[0].onclick = () => {
    l--; //for left scroll
    document.getElementsByClassName("arow")[0].style.border = "0px";
    for (var i of div) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-740px";
      }
      /*  if (l == 2) { i.style.left = "-1480px" }
             if (l == 3) { i.style.left = "-2220px" } */

      if (l < 0) {
        l = 0;
      }
    }
  };
}

function slider2() {
  let sapn = document.getElementById(`myslider2`).getElementsByTagName("span");
  let div = document.getElementById(`myslider2`).getElementsByTagName("div");
  let l = 0;
  sapn[1].onclick = () => {
    l++; //for right scroll
    for (var i of div) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-740px";
      }
      /*   if (l == 2) {
        i.style.left = "-1480px";
      } */
      /*   if (l == 3) { i.style.left = "-2220px" }
              if (l == 4) { i.style.left = "-2967px" } */
      if (l > 4) {
        l = 4;
      }
    }
  };
  sapn[0].onclick = () => {
    l--; //for left scroll
    document.getElementsByClassName("arow")[0].style.border = "0px";
    for (var i of div) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-740px";
      }
      /*  if (l == 2) { i.style.left = "-1480px" }
             if (l == 3) { i.style.left = "-2220px" } */

      if (l < 0) {
        l = 0;
      }
    }
  };
}

function slider3() {
  let sapn = document.getElementById(`myslider3`).getElementsByTagName("span");
  let div = document.getElementById(`myslider3`).getElementsByTagName("div");
  let l = 0;
  sapn[1].onclick = () => {
    l++; //for right scroll
    for (var i of div) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-740px";
      }
      if (l == 2) {
        i.style.left = "-1480px";
      }
      /* if (l == 3) { i.style.left = "-2220px" } */
      /*   if (l == 4) { i.style.left = "-2967px" } */
      if (l > 4) {
        l = 4;
      }
    }
  };
  sapn[0].onclick = () => {
    l--; //for left scroll
    document.getElementsByClassName("arow")[0].style.border = "0px";
    for (var i of div) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-740px";
      }
      /*   if (l == 2) { i.style.left = "-1480px" }
             if (l == 3) { i.style.left = "-2220px" } */

      if (l < 0) {
        l = 0;
      }
    }
  };
}

function slider4() {
  let sapn = document.getElementById(`myslider4`).getElementsByTagName("span");
  let div = document.getElementById(`myslider4`).getElementsByTagName("div");
  let l = 0;
  sapn[1].onclick = () => {
    l++; //for right scroll
    for (var i of div) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-740px";
      }
      if (l == 2) {
        i.style.left = "-1480px";
      }
      /* if (l == 3) { i.style.left = "-2220px" } */
      /*   if (l == 4) { i.style.left = "-2967px" } */
      if (l > 4) {
        l = 4;
      }
    }
  };
  sapn[0].onclick = () => {
    l--; //for left scroll
    document.getElementsByClassName("arow")[0].style.border = "0px";
    for (var i of div) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-740px";
      }
      /*   if (l == 2) { i.style.left = "-1480px" }
             if (l == 3) { i.style.left = "-2220px" } */

      if (l < 0) {
        l = 0;
      }
    }
  };
}

function slider5() {
  let sapn = document.getElementById(`myslider5`).getElementsByTagName("span");
  let div = document.getElementById(`myslider5`).getElementsByTagName("div");
  let l = 0;
  sapn[1].onclick = () => {
    l++; //for right scroll
    for (var i of div) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-740px";
      }
      if (l == 2) {
        i.style.left = "-1480px";
      }
      /* if (l == 3) { i.style.left = "-2220px" } */
      /*   if (l == 4) { i.style.left = "-2967px" } */
      if (l > 4) {
        l = 4;
      }
    }
  };
  sapn[0].onclick = () => {
    l--; //for left scroll
    document.getElementsByClassName("arow")[0].style.border = "0px";
    for (var i of div) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-740px";
      }
      /*   if (l == 2) { i.style.left = "-1480px" }
             if (l == 3) { i.style.left = "-2220px" } */

      if (l < 0) {
        l = 0;
      }
    }
  };
}
