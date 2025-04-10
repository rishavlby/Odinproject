
// create new node 
class node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkedlist  {
   constructor() {
        this.head = null;
        this.tail = null;
    }
}

function append(data) {
    // if list is empty, set new node as head
    const newnode = new node(data);

    if(this.head === null){
        this.head = newnode;
        return;
    }
// get last element
    let current = this.head;
    while(current.next != null){
        current = current.next;
    }
    //apend new node
    current.next = newnode;
}

function prepend(data){
    const newnode = new node(data);
    newnode.next = this.head;
    this.head = newnode;
}

function size(){
    let count = 0;
    let current = this.head;

    while(current !== null){
        count++;
        current = current.next;
    }

    return count; 
}
// returns Head 
function getHead(){

    return this.head;
}
// returns Last node in the List
function getTail(){
    return this.tail;
}

function getIndex(data){
    let current = this.head;
    let count = 0;

    while (current != null){
        if(count == index){
            return current;
        }
        count++
        current = current.next;
    }

return null;
}

//pop
function pop(){
    let current = this.head;
    let newTail = current;
    while(current.next != null){
        newTail = current;
        current = current.next;
    }
 this.tail = newTail
 this.tail.next = null;
}
// return 
function contains(data){
    let current = this.head;
    if(current.value === data)
    {
        return true;
    }else {
        return false;
    }
}

function file(data){
    let current = this.head;
    let index = 0;

    while(current){
        if(current.data === data){
            return index;
        }
        current = current.next;
        index++;
    }
    return null;
}

function toString(){
    let current = this.head;
    let result =[];
    while(current){
        result.push(current.data);
        current = current.next;
    }
    return result.join('->');
}

const list = new node(data);

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamester");
list.append("snake");
list.append("turtle");

console.log(list.toString());

function insertAt(index, newnode){
// start traversal from the head node
    let node = this.head;
    // if the specified index is 0
    if (index == 0){
        newnode.next = node;
        this.head = newnode;
        return;
    }
while(--index){
    if(node.next != null)
        node = node.next;
    else
     console.log("Error")
}

let val = node.next;
   
}