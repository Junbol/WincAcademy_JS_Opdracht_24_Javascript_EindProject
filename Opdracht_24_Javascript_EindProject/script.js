/*console.log("Javascript and Node are working");*/

// CODE TO TOGGLE THE HAMBURGER ICON

//________REFERENCES_______

const hamBurger = document.getElementById("hamburger");
const navUl = document.getElementById("nav_menu_toggle");

// ______Function___________

hamBurger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

// CODE FOR TO TOGGLE THE UL LINKS ON THE NAVEGATION MENU

//________REFERENCES_______

const homebutton = document.getElementById("home");
const redButton = document.getElementById("red");
const orangeyButton = document.getElementById("orange");
const purpleButton = document.getElementById("purple");
const greenButton = document.getElementById("green");

const bg_Color = document.querySelector(".bg_Body_Color");

// ______Function___________

homebutton.addEventListener("click", () => {
  bg_Color.className = "yellow_color";
});

redButton.addEventListener("click", () => {
  bg_Color.className = "red_color";
});

orangeyButton.addEventListener("click", () => {
  bg_Color.className = "orange_color";
});

purpleButton.addEventListener("click", () => {
  bg_Color.className = "purple_color";
});

greenButton.addEventListener("click", () => {
  bg_Color.className = "green_color";
});
