export default function mainPage(){


const divContent = document.getElementById("content");
const newDiv = document.createElement("div");

newDiv.innerHTML=
`
</h2> 
At Los Cabos, we’ve been serving up the best of Mexican cuisine for 25 years. Our story began with a passion for sharing the rich,
bold flavors of Mexico with our community. What started as a small kitchen, inspired by traditional family recipes passed down through generations, 
has now grown into a beloved local hotspot known for its authenticity and vibrant atmosphere.
We take pride in using only the freshest ingredients, from hand-picked produce to authentic spices, 
all carefully combined to create dishes that honor Mexico's rich culinary heritage.
Our chefs craft each dish with love and respect for the traditions of the region, while adding their own unique twists to make every meal a memorable experience.
Favorite Dish: The Ultimate Tacos al Pastor
One of our most popular dishes is our Tacos al Pastor—sweet, savory, and perfectly spiced. 
Made with marinated pork cooked on a vertical spit, it’s served on a soft corn tortilla with pineapple, onions, and fresh cilantro.
This classic dish has been a fan favorite since the beginning and will transport your taste buds straight to the streets of Mexico City.
Favorite Drink: Margarita de la Casa
What better way to wash down our flavorful tacos than with our signature Margarita de la Casa? Made with 100% agave tequila, 
fresh lime juice, and a splash of orange liqueur, this margarita strikes the perfect balance between tart and sweet. Served on the rocks with a salted rim, 
it’s the ideal drink to pair with any of our signature dishes.
`;

divContent.appendChild(newDiv);

}

