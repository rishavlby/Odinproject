

let user = {name:"john", age : 30, status:"single"}
alert(user.name);
alert(user.status)

let key = promot("jatt", "name");
user[key]=true;
alert(user[key]);

let fruit = prompt("which fruit to buy", "apple");
let bag = {
    [fruit]:5
}
alert(bag.apple);