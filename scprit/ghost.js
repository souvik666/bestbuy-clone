//defualt is set to querySelector
function ghost(selector) {
  const self = {
    element: document.querySelector(selector),
    html: () => self.element,
    //mother event lisnter
    on: (event, callback) => {
      self.element.document.addEventListener(event, callback);
    },

    css: (arg) => {
      self.element.style = `${arg}`;
    },
  };
  return self;
}

//target element by ID
ghost.getsoulID = function (id) {
  const methods = {
    element: document.getElementById(id),
    html: () => methods.element,
    //mother event
    on: (event, callback) => {
      // document.getaddEventListener(event, callback);
      document.getElementById(id).addEventListener(event, callback);
    },
    //click event
    click: (callback) => {
      document.getElementById(id).addEventListener("click", callback);
    },
    hover: (callback) => {
      document.addEventListener("mouseover", callback);
    },
    hoverout: (callback) => {
      document.addEventListener("mouseout", callback);
    },
    ghostAdd: (hide, display) => {
      setInterval(function () {
        document.getElementById(id).style.display = "none";
      }, hide);
      setInterval(function () {
        document.getElementById(id).style.display = "block";
      }, display);
    },
    border: (num, clr) => {
      document.getElementById(id).style.border = `${num}px solid ${clr}`;
    },
    val: () => {
      return document.getElementById(id).value;
    },
    css: (arg) => {
      document.getElementById(id).style = `${arg}`;
    },
  };
  return methods;
};

ghost.localgrave = function (name, data) {
  const graves = {
    set: () => {
      localStorage.setItem(name, JSON.stringify(data));
    },
    get: () => {
      return JSON.parse(localStorage.getItem(name));
    },
    del: (key) => {
      localStorage.removeItem(key);
    },
  };
  return graves;
};

ghost.cart = function (localStorageid, data) {
  let cart = [];
  cart = localStorage.getItem(localStorageid);
  if (cart == null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem(localStorageid));
  }
  cart.push(data);
  localStorage.setItem(localStorageid, JSON.stringify(cart));
};

//signup
ghost.adduser = function (data, id) {
  let arr;
  arr = localStorage.getItem(id);
  if (arr === null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem(id));
  }
  arr.push(data);
  localStorage.setItem("user", JSON.stringify(arr));
};

ghost.who = function (id) {
  return document.getElementById(id);
};

ghost.underlineme = function (el) {
  document.getElementById(el).addEventListener("mouseover", function () {
    ghost.getsoulID(el).css(`text-decoration: underline;`);
  });
};

ghost.removeunderline = function (el) {
  document.getElementById(el).addEventListener("mouseout", function () {
    ghost.getsoulID(el).css(`
   text-decoration: "";
   `);
  });
};
