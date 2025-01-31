
export default function DOMCreated(){

const ctn = document.getElementById("content");
const newdiv = document.createElement("div");
newdiv.innerHTML = 

`
<h2>Welcome to Los Cabos Restaurant! </h2>
At Los Cabos Restaurant , we're more than just a place to eat – we're a celebration of authentic Mexican flavors!
Whether you're craving bold, savory tacos, sizzling fajitas, or refreshing margaritas, our menu offers a delicious variety of dishes 
made from the freshest ingredients.
Known for our vibrant atmosphere and unique twists on classic recipes, we promise a dining experience that feels like a fiesta in every bite. 
Come enjoy a warm welcome, irresistible food, and drinks that will keep you coming back for more. ¡Bienvenidos!
`;

ctn.appendChild(newdiv);
}
