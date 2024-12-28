const showlibrarybtn = document.getElementById("showDialog");
const removebookbtn = document.getElementById("removebook");
const statusbtn = document.getElementById("changestatus");
const newbookbtn = document.getElementById("newbook");
const addbookbtn = document.getElementById("newbookcancelbtn");
const Closebtn = document.getElementById("Closebtn");
const mainbtn = document.getElementById("favdialog");
const displaybtn = document.getElementById("displaybooks");
const createdisplay = document.getElementById("displaybook");

//Open library 
showlibrarybtn.addEventListener("click" , () =>{
    favdialog.showModal();
});

//Open add new book 
newbookbtn.addEventListener("click", () =>{
    addnewbook.showModal();
});

//cancel button on add new book modal
addbookbtn.addEventListener("click", ()=>{
mainbtn.showModal();
});

//Close button for open library modal
Closebtn.addEventListener("click", () =>{
    mainbtn.close();
});

//display books in an array 
displaybtn.addEventListener("click" , () =>{
   createdisplay.displaybooks();
})
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read'}`;
    }
  }

function addBookToLibrary() {
  
}

function displaybooks() {
   // loops through the array 

   //const disp = myLibrary.forEach(element => {

     
        
        const tbl = document.createElement("table");
        const tblBody = document.createElement("tbody");
      
        
        for (let i = 0; i < 2; i++) {
          const row = document.createElement("tr");
                for (let j = 0; j < 2; j++) {
                        const cell = document.createElement("td");
                        const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
                        cell.appendChild(cellText);
                        row.appendChild(cell);
          }
      
          
          tblBody.appendChild(row);
        }
      
        
        tbl.appendChild(tblBody);
        
        document.body.appendChild(tbl);
        
        tbl.setAttribute("border", "2");
      }
      
   
