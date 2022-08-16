import Book from "./modules/constructor.js";
import Method from "./modules/methods.js";

/* Objects in const */
// Nav bar:
const navContainer = document.querySelector(".navbar-links");
const list = document.getElementById("list");
const addNew = document.getElementById("add-new");
const contact = document.getElementById("contact");

// Form inputs:
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const addButton = document.querySelector(".addBtn");
/* console.log(title.value); **************************** */

// Sections:
const main = document.querySelector(".main-container");
const add = document.querySelector(".add-section");
const info = document.querySelector(".contact-info");

/* Event: click "List" in the nav bar */
// Add a new book:
navContainer.addEventListener("click", (e) => {
  if (e.target.textContent === "List") {
    //Active class changing every click
    list.classList.remove("active");
    addNew.classList.add("active");
    contact.classList.add("active");
    //sections hide
    main.classList.remove("hide");
    add.classList.add("hide");
    info.classList.add("hide");
  }
  if (e.target.textContent === "Add new") {
    //Active class changing every click
    list.classList.add("active");
    addNew.classList.remove("active");
    contact.classList.add("active");
    //sections hide
    main.classList.add("hide");
    add.classList.remove("hide");
    info.classList.add("hide");
  }
  if (e.target.textContent === "Contact") {
    //Active class changing every click
    list.classList.add("active");
    addNew.classList.add("active");
    contact.classList.remove("active");
    //sections hide
    main.classList.add("hide");
    add.classList.add("hide");
    info.classList.remove("hide");
  }
});

// Event: display books
// document.addEventListener('DOMContentLoaded', UI.displayBooks);

addButton.addEventListener("click", () => {
  if (title.value !== '' && author.value !== '' ) {
    Method.addStorage(title, author);
    Method.addBook(title, author);
  }
}); 
