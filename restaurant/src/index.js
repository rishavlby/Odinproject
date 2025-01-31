import DOMCreated from "./intialload.js";
//document.addEventListener('DOMContentLoaded' , DOMCreated);
//window.addEventListener('click', DOMCreated);
window.onload = DOMCreated;

import mainPage from "./home.js";
//document.addEventListener('homePage', mainPage);
document.getElementById("homeBtn").addEventListener('click', mainPage);

import menuPage from "./menu.js";
//document.addEventListener('Menu', menuPage);
document.getElementById("menuBtn").addEventListener('click', menuPage);

import contact from "./contact.js";
//document.addEventListener('Contact', contact);
document.getElementById("contactBtn").addEventListener('click', contact);

console.log("jatt");