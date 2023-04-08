// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");
console.log(location.pathname);

// Customize title
function customizeTitle() {
  var x = document.getElementsByTagName("H1")[0]; 
  x.innerHTML = "El Blog de";  
  var y = document.createElement("H1"); 
  var t = document.createTextNode("Víctor Casas San Miguel");
  y.appendChild(t);
  var z = document.getElementsByClassName("f2 f1-l b di lh-title mb3 white mw6 bg-primary")[0];
  z.appendChild(y);
}
window.onload = customizeTitle;

