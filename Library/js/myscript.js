const myLibrary = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 295, read: false, notes: "magnificent" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pages: 1178, read: true, notes: "" },
  { title: "1984", author: "George Orwell", pages: 328, read: true, notes: "" },
  { title: "Pride and Prejudice", author: "Jane Austen", pages: 432, read: false, notes: "" }
];

const showlibrarybtn = document.getElementById("showDialog");
const removebookbtn = document.getElementById("removebook");
const changestatusbtn = document.getElementById("changestatus");  
const newbookbtn = document.getElementById("newbook");
const addbookcancelbtn = document.getElementById("newbookcancelbtn");
const Closebtn = document.getElementById("Closebtn");
const mainbtn = document.getElementById("favdialog");
const displaydial = document.getElementById("displaybookdialog");
const displaybtn = document.getElementById("displaybooks");
const submitBtn = document.getElementById("sumitEntry");
const closeDialogBtn = document.getElementById("closeDialogBtn");
const addnewbookdialog = document.getElementById("addnewbook");

// Open library 
showlibrarybtn.addEventListener("click", () => {
  favdialog.showModal();
});

// Open add new book 
newbookbtn.addEventListener("click", () => {
  addnewbook.showModal();
});

// Cancel button on add new book modal
addbookcancelbtn.addEventListener("click", () => {
  addnewbookdialog.close();
});

// Close button for open library modal
Closebtn.addEventListener("click", () => {
  mainbtn.close();
});

// Display books in modal 
displaybtn.addEventListener("click", () => {
  displaybooks();
});

// Close display 
closeDialogBtn.addEventListener('click', () => {
  displaydial.close();
});


// Remove book from list
removebookbtn.addEventListener('click', () => {
  const selectedRow = document.querySelector('tr.selected');
  if (selectedRow) {
    const index = Array.from(selectedRow.parentElement.children).indexOf(selectedRow) - 1; 
    deleteEntry(index);
  } else {
    alert('Please select a row to delete.');
  }
});

// Change book status (Triggered by changestatusbtn)
changestatusbtn.addEventListener('click', () => {
  const selectedRow = document.querySelector('tr.selected');
  if (selectedRow) {
    const index = Array.from(selectedRow.parentElement.children).indexOf(selectedRow) - 1; 
    toggleReadStatus(index);
  } else {
    alert('Please select a row to change the status.');
  }
});


function displaybooks() {
  const table = displaydial.querySelector('table');
  table.innerHTML = '<tr><th>Title</th><th>Author</th><th>Pages</th><th>Read Status</th><th>Notes</th></tr>';

  myLibrary.forEach((book, index) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);

    cell1.textContent = book.title;
    cell2.textContent = book.author;
    cell3.textContent = book.pages;
    cell4.textContent = book.read ? 'Read' : 'Not Read';
    cell5.textContent = book.notes;
    
    // Add click event to highlight row
    row.addEventListener('click', function () {
      highlightTableRow(this);
    });
  });
  displaydial.showModal();
}

// Remove book entry
function deleteEntry(index) {
  myLibrary.splice(index, 1);  
  displaybooks();  
}


function highlightTableRow(row) {
  
  const previouslySelectedRow = document.querySelector('tr.selected');
  if (previouslySelectedRow) {
    previouslySelectedRow.classList.remove('selected');
  }
  row.classList.add('selected');
}


function toggleReadStatus(index) {
  const book = myLibrary[index];
  book.read = !book.read;  
  updateTableRow(index);   
}


function updateTableRow(index) {
  const table = displaydial.querySelector('table');
  const rows = table.querySelectorAll('tr');
  const row = rows[index + 1]; 
  const statusCell = row.cells[3]; 
  statusCell.textContent = myLibrary[index].read ? 'Read' : 'Not Read';
}

// Add new book entry
const formentries = document.getElementById("newbookform");
formentries.addEventListener('submit', function (event) {
  event.preventDefault();
});

const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const notread = document.getElementById("notread");
const notes = document.getElementById("notes");

const newBook = new Book(title.value, author.value, pages.value, read.value);
myLibrary.push(newBook);
formentries.reset();
displaybooks();


