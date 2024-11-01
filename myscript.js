let button = document.querySelector("button");
button.addEventListener('click', ()=>{
clearGrid();
let enterrows = prompt("Enter number of rows");
let entercolumns = prompt ("Enter number of Columns");
let sum = enterrows*entercolumns;

if(sum>100)
{
alert("Re-enter number of rows and columns");
}
else{
createrowsandcolumnsgrid(enterrows,entercolumns);
hovering();
}

});

const element = document.getElementById("container");

function clearGrid() {
while (element.firstChild) {
element.removeChild(element.firstChild);
}
}

function createrowsandcolumnsgrid(enterrows,entercolumns){

    makerows(enterrows);
makecolumns(entercolumns); 
}

function makerows(numberOfRows){

for( i=0; i< numberOfRows;i++) {
let rowdiv = document.createElement("div");
rowdiv.className = "gridRow";
element.appendChild(rowdiv);
}
}


function makecolumns(numberofcolumns) {
const rows = document.getElementsByClassName("gridRow");
for(i=0;i<rows.length;i++) {
for(j=0;j<numberofcolumns;j++){
let newCell = document.createElement("div")
newCell.className = "cell";
newCell.style.width="100px";
newCell.style.height="100px";
newCell.style.border="1px solid black";
rows[i].appendChild(newCell);
}
}
}
function hovering() {
const cells = document.getElementsByClassName("cell");

for (let j = 0; j < cells.length; j++) {
const cell = cells[j];
const hoverlabel = document.createElement("div");
hoverlabel.style.width = "100%"; 
hoverlabel.style.height = "100%"; 
hoverlabel.style.position = "absolute"; 
hoverlabel.style.display = "none"; 
cell.appendChild(hoverlabel);
cell.addEventListener('mouseover', () => {
hoverlabel.style.backgroundColor = randomcolor(); 
hoverlabel.style.display = "block";
});
cell.addEventListener('mouseout', () => {
hoverlabel.style.display = "none"; 
});
}
}
function randomcolor()
{
let color = [];
for(let i=0;i<3;i++){
color.push(Math.floor(Math.random() * 256));
}
return 'rgb(' + color.join(' , ') + ')';
}
