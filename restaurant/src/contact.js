
export default function contact(){

const divContent = document.getElementById("content");
const newDiv = document.createElement("div");
newDiv.innerHTML=

`Contact Us
We’d love to hear from you! Whether you have a question, want to make a reservation, or just want to give us some feedback, feel free to reach out.

Location:
Las Cabos
11986 145th 
street, B.C, V36A1

Phone:
250-698-7894

Email:
info@lascabos.com

Social Media:
Follow us for the latest updates, specials, and events!

Facebook: facebook.com/lcabos
Instagram: @lcabos
Twitter: @lcabos
Hours of Operation:
Monday - Thursday: 11:00 AM - 9:00 PM
Friday - Saturday: 11:00 AM - 10:00 PM
Sunday: 11:00 AM - 8:00 PM

Reservations:
To book a table, call us at 250-698-7894 or use our online reservation system on our website.
Walk-ins welcome!

`;

divContent.appendChild(newDiv);

}

