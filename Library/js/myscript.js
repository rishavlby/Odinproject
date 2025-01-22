
// Book class to define individual book
class Book {
  constructor(title, author, pages, read = false, notes = "") {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.notes = notes;
  }
}

class library{
  
  constructor() {
    this.myLibrary = [
      { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 295, read: false, notes: "magnificent" },
      { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pages: 1178, read: true, notes: "" },
      { title: "1984", author: "George Orwell", pages: 328, read: true, notes: "" },
      { title: "Pride and Prejudice", author: "Jane Austen", pages: 432, read: false, notes: "" }
    ];
    
    this.addEventListener();

    }

  addEventListener(){

          const mainbtn = document.getElementById("favdialog");
          const displaydial = document.getElementById("displaybookdialog");
          const submitBtn = document.getElementById("sumitEntry");
          const addnewbookdialog = document.getElementById("addnewbook");
          const removebookbtn = document.getElementById("removebook");
          const changestatusbtn = document.getElementById("changestatus");  
          const newbookbtn = document.getElementById("newbook");
          const addbookcancelbtn = document.getElementById("newbookcancelbtn");
          const Closebtn = document.getElementById("Closebtn");
          const showlibrarybtn = document.getElementById("showDialog");
          const displaybtn = document.getElementById("displaybooks");
          const closeDialogBtn = document.getElementById("closeDialogBtn");

            // Open library 
          document.getElementById("showDialog").addEventListener("click", () => {
            favdialog.showModal();
          });
  
            // Open add new book 
            document.getElementById("newbook").addEventListener("click", () => {
              addnewbook.showModal();
            });
            
            // Cancel button on add new book modal
            document.getElementById("newbookcancelbtn").addEventListener("click", () => {
              addnewbookdialog.close();
            });
  
            // Close button for open library modal
            document.getElementById("Closebtn").addEventListener("click", () => {
              mainbtn.close();
            });
  
            // Display books in modal 
            document.getElementById("displaybooks").addEventListener("click", () => {
             this.displaybooks();
            });
  
            // Close display 
            document.getElementById("closeDialogBtn").addEventListener('click', () => {
              displaydial.close();
            });
  
 // Remove book from list
  document.getElementById("removebook").addEventListener('click', () => {
  const selectedRow = document.querySelector('tr.selected');
  if (selectedRow) {
    const index = Array.from(selectedRow.parentElement.children).indexOf(selectedRow) - 1; 
    this.deleteEntry(index);
  } else {
    alert('Please select a row to delete.');
  }
});

// Change book status (Triggered by changestatusbtn)
document.getElementById("changestatus").addEventListener('click', () => {
  const selectedRow = document.querySelector('tr.selected');
  if (selectedRow) {
    const index = Array.from(selectedRow.parentElement.children).indexOf(selectedRow) - 1; 
    this.toggleReadStatus(index);
  } else {
    alert('Please select a row to change the status.');
  }
});

// Add new book entry
const formentries = document.getElementById("newbookform");
formentries.addEventListener('submit', (event) =>{
  event.preventDefault();

  const newBook = new Book(
  document.getElementById("title").value, 
  document.getElementById("author").value, 
  document.getElementById("pages").value, 
  document.getElementById("read").checked);

  this.myLibrary.push(newBook);
  formentries.reset();
  this.displaybooks();
});

  }

displaybooks() {
  const table = document.getElementById("displaybookdialog").querySelector('table');
  table.innerHTML = '<tr><th>Title</th><th>Author</th><th>Pages</th><th>Read Status</th><th>Notes</th></tr>';

  this.myLibrary.forEach((book, index) => {
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
    
    row.addEventListener('click', () => {
     this.highlightTableRow(row);
    });
  });
  document.getElementById("displaybookdialog").showModal();
}

// Remove book entry
deleteEntry(index) {
  this.myLibrary.splice(index, 1);  
  this.displaybooks();  
}

highlightTableRow(row) {
  const previouslySelectedRow = document.querySelector('tr.selected');
  if (previouslySelectedRow) {
    previouslySelectedRow.classList.remove('selected');
  }
  row.classList.add('selected');
}

toggleReadStatus(index) {
  const book = this.myLibrary[index];
  book.read = !book.read;  
  this.updateTableRow(index);   
}

updateTableRow(index) {
  const table = document.getElementById("displaybookdialog").querySelector('table');
  const rows = table.querySelectorAll('tr');
  const row = rows[index + 1]; 
  const statusCell = row.cells[3]; 
  statusCell.textContent = this.myLibrary[index].read ? 'Read' : 'Not Read';
}
  }

const myLibrary = new library();
