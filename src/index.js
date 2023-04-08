// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");
console.log(location.pathname);

// Customize title
function customizeTitle() {
  var x = document.getElementsByTagName("H1")[0]; 
  x.style.background = "";
  x.style.color = "#ff4400";
  x.innerHTML = "El Blog de";
  //
  //y = x.cloneNode(true);
  //y.classList.add("f2", "f1-l", "b", "di", "lh-title", "mb3", "white", "mw6", "bg-primary");
  //y.innerHTML = "Víctor Casas San Miguel";
  var y = document.createElement("H1");
  var t = document.createTextNode("Víctor Casas San Miguel");
  y.appendChild(t);
  y.classList.add("f2", "f1-l", "b", "di", "lh-title", "mb3", "white", "mw6", "bg-primary");
  x.style.background = "";
  y.style.color = "#ff4400";
  //y.style.background = "rgba(175, 73, 1)";
  var z = document.getElementsByClassName("mw7 relative bg-fix-primary mb3")[0];
  z.appendChild(y);
}
if (location.pathname == "/") window.onload = customizeTitle;

