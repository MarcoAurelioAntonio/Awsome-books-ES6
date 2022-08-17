/* import Book from './modules/constructor.js'; */
import Method from './modules/methods.js';

/* Objects in const */
// Nav bar:
const navContainer = document.querySelector('.navbar-links');
const list = document.getElementById('list');
const addNew = document.getElementById('add-new');
const contact = document.getElementById('contact');

// Form inputs:
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const addButton = document.querySelector('.addBtn');

// Sections:
const main = document.querySelector('.main-container');
const add = document.querySelector('.add-section');
const info = document.querySelector('.contact-info');

// Delete button
const deleteBtn = document.querySelector('.book-list');

/* Event: click "List" in the nav bar */
// Add a new book:
navContainer.addEventListener('click', (e) => {
  if (e.target.textContent === 'List') {
    // Active class changing every click
    list.classList.remove('active');
    addNew.classList.add('active');
    contact.classList.add('active');
    // sections hide
    main.classList.remove('hide');
    add.classList.add('hide');
    info.classList.add('hide');
  }

  if (e.target.textContent === 'Add new') {
    // Active class changing every click
    list.classList.add('active');
    addNew.classList.remove('active');
    contact.classList.add('active');
    // sections hide
    main.classList.add('hide');
    add.classList.remove('hide');
    info.classList.add('hide');
  }

  if (e.target.textContent === 'Contact') {
    // Active class changing every click
    list.classList.add('active');
    addNew.classList.add('active');
    contact.classList.remove('active');
    // sections hide
    main.classList.add('hide');
    add.classList.add('hide');
    info.classList.remove('hide');
  }
});

addButton.addEventListener('click', () => {
  if (title.value !== '' && author.value !== '') {
    Method.addStorage(title, author);
    Method.addBook(title, author);
  }
});

window.addEventListener('load', () => {
  // load from localStorage
  let storagedBooks = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
  for (let i = 0; i < storagedBooks.length; i += 1) {
    // create book container
    const div1 = document.createElement('div');
    div1.classList.add('div1');

    // create p to title and author
    const p = document.createElement('p');
    p.classList.add('text-book');
    p.textContent = `${storagedBooks[i].title} by ${storagedBooks[i].author}`;

    // add p to div1
    div1.appendChild(p);

    // delete button and appended to div1
    const deleted = document.createElement('button');
    deleted.classList.add('delete');
    deleted.textContent = 'Delete 🗑️';
    div1.appendChild(deleted);

    // Conteiner for all books
    const bookList = document.querySelector('.book-list');
    bookList.appendChild(div1); // Book and button added to a container!
  }
  storagedBooks = [];
});

deleteBtn.addEventListener('click', (event) => {
  if (event.target.textContent === 'Delete 🗑️') {
    // erase the parent of the delete button checking its content.
    const byeObject = event.target.previousSibling.textContent;
    event.target.parentElement.remove();

    /* erase the object in localStorage. */
    // split string of 'byeObject' and use the 1st word
    const objectArray = byeObject.split(' ');
    // LOAD the local Storage and filter the erased object in a new const.
    const books = JSON.parse(localStorage.getItem('data'));
    const erasedBook = books.filter((x) => x.title !== objectArray[0]);
    localStorage.setItem('data', JSON.stringify(erasedBook));
  }
});
