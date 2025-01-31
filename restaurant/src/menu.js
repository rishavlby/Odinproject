export default function menuPage()
{

const divContent = document.getElementById("content");
const newDiv = document.createElement("div");
newDiv.innerHTML=

`
¡Bienvenidos!
Enjoy a flavorful journey through Mexico with our delicious dishes, refreshing drinks, and vibrant atmosphere. 
From sizzling fajitas to hand-crafted margaritas, we’ve got something for everyone.

Appetizers
Guacamole & Chips
Freshly made with ripe avocados, tomatoes, onions, cilantro, and a hint of lime. Served with crispy tortilla chips.
Regular - $7 | Large - $11

Queso Fundido
Melted cheese topped with chorizo, roasted peppers, and onions, served with warm tortillas and tortilla chips for dipping.
Small - $8 | Large - $13

Elote Asado
Grilled corn on the cob smothered with creamy cotija cheese, chili powder, lime, and a sprinkle of smoked paprika.
Each - $5

Taquitos Dorados
Crispy, golden-fried tortillas stuffed with seasoned chicken or beef, topped with guacamole and salsa.
4 pieces - $9

Tacos (3 per order)
Tacos al Pastor
Marinated pork, pineapple, onions, and cilantro on soft corn tortillas.
Regular - $12 | Large - $16

Carnitas Tacos
Slow-cooked, tender pulled pork topped with onion, cilantro, and a splash of salsa verde.
Regular - $13 | Large - $17

Tacos de Pescado
Grilled fish with chipotle mayo, cabbage slaw, and avocado. Served in soft flour tortillas.
Regular - $14 | Large - $18

Tacos de Nopales (Vegan)
Grilled cactus, seasoned with lime, chili, and salt, topped with pico de gallo and guacamole.
Regular - $12 | Large - $15

Mains
Fajitas Sizzler
Choose from marinated chicken, beef, or shrimp, grilled with bell peppers, onions, and a side of warm tortillas. Served with rice, beans, and sour cream.
Chicken - $19 | Beef - $22 | Shrimp - $24

Chiles Rellenos
Roasted poblano peppers stuffed with melted cheese and lightly battered, served with a savory tomato sauce and rice.
Vegetarian - $18 | Beef - $21

Mole Poblano
A rich, savory chicken breast smothered in a traditional dark chocolate-based mole sauce, served with rice, beans, and tortillas.
Regular - $20 | Extra Chicken - $6

Burrito Supremo
Flour tortilla filled with your choice of grilled chicken, beef, or carnitas, black beans, rice, cheese, guacamole, and salsa.
Chicken - $15 | Beef - $16 | Carnitas - $17

Sides
Mexican Rice – $3
Refried Beans – $3
Street Corn – $4
Guacamole – $5
Pico de Gallo – $2
Mexican Street Fries – $6 (Crispy fries topped with cotija cheese, jalapeños, and chili powder)

Drinks
Margarita de la Casa
Classic margarita with 100% agave tequila, fresh lime juice, and orange liqueur.
Regular - $8 | Grande - $12

Mango Margarita
A tropical twist on the classic, made with fresh mango puree and a splash of lime.
Regular - $9 | Grande - $13

Tequila Sunrise
Tequila, orange juice, and grenadine, garnished with a cherry.
Regular - $8

Paloma
A refreshing blend of tequila, grapefruit soda, and lime juice.
Regular - $8

Agua Fresca (Non-alcoholic)
Choose from watermelon, hibiscus, or lime.
Regular - $4 | Large - $6

Mexican Horchata (Non-alcoholic)
A sweet, creamy drink made with rice, cinnamon, and vanilla.
Regular - $5

Desserts
Churros con Chocolate
Warm cinnamon-sugar churros served with a side of rich chocolate dipping sauce.
Order of 3 - $6 | Order of 5 - $9

Flan
A traditional creamy caramel custard topped with a hint of vanilla.
Each - $5

Tres Leches Cake
A moist sponge cake soaked in three types of milk and topped with whipped cream.
Each - $7

Enjoy your meal and Viva Mexico! 🎉

`;
divContent.appendChild(newDiv);
}
