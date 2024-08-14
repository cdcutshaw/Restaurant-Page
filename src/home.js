import homepageImg from "./images/homepage.jpg";

export default function createHome () {
    const content = document.getElementById("content");

    const title = document.createElement("h1")
    title.textContent = "Girl Diner";
    content.appendChild(title);

    const image = document.createElement("img"); 
    image.src = homepageImg;
    content.appendChild(image);

    

    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about");
    content.appendChild(aboutDiv);
    const aboutPara1 = document.createElement("p");
    aboutPara1.textContent = "Welcome to Girl Diner, where our menu is a chaotic symphony of 'What’s in the fridge?' and 'Is this enough to be a meal?' We’re the culinary equivalent of that one friend who makes a meal out of cheese cubes, olives, and half a bag of chips—and somehow, it works. "
    const aboutPara2 = document.createElement("p");
    aboutPara2.textContent = "At Girl Diner, we specialize in the art of assembling dinners from what most people call 'snacks.' Whether it’s a charcuterie board that’s 90% crackers or a salad that’s mostly croutons, we’ve perfected the fine balance between “I should probably eat something' and 'I guess this counts.' Pair it with a glass of wine that might just be the entire bottle, and you've got yourself a five-star meal—at least by our standards."
    const aboutPara3 = document.createElement("p");
    aboutPara3.textContent = "So come on in, embrace the chaos, and treat yourself to a dinner that’s more of a vibe than a meal. After all, who needs a full course when you can have just enough to keep hunger at bay?"
    aboutDiv.appendChild(aboutPara1);
    aboutDiv.appendChild(aboutPara2);
    aboutDiv.appendChild(aboutPara3);

    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("hours");
    content.appendChild(hoursDiv);
    const hoursHead = document.createElement("h3");
    hoursHead.textContent = "Hours of Operation";
    hoursDiv.appendChild(hoursHead);
    const monFri = document.createElement("h4");
    monFri.textContent = "Monday-Friday:"
    hoursDiv.appendChild(monFri);
    const monFriUl = document.createElement("ul")
    hoursDiv.appendChild(monFriUl);
    const monFriLi1 = document.createElement("li")
    monFriLi1.textContent = "Lunch-ish: 11:30 AM - 1:30 PM (or whenever we feel like starting)";
    monFriUl.appendChild(monFriLi1);
    const monFriLi2 = document.createElement("li")
    monFriLi2.textContent = "Dinner-ish: 6:00 PM - 9:00 PM (or until we run out of snacks)";
    monFriUl.appendChild(monFriLi2);

    const sat = document.createElement("h4");
    sat.textContent = "Saturday:"
    hoursDiv.appendChild(sat);
    const satUl = document.createElement("ul")
    hoursDiv.appendChild(satUl);
    const satLi1 = document.createElement("li")
    satLi1.textContent = "Brunch-ish: 10:00 AM - 2:00 PM (because who really eats before 10 on a Saturday?)";
    satUl.appendChild(satLi1);
    const satLi2 = document.createElement("li")
    satLi2.textContent = "Dinner-ish: 5:00 PM - 8:00 PM (but let’s be honest, we’re flexible)";
    satUl.appendChild(satLi2);

    const sun = document.createElement("h4");
    sun.textContent = "Sunday:"
    hoursDiv.appendChild(sun);
    const sunUl = document.createElement("ul")
    hoursDiv.appendChild(sunUl);
    const sunLi1 = document.createElement("li")
    sunLi1.textContent = "Closed for 'Meal Prepping' (a.k.a. panic-buying snacks for the week)";
    sunUl.appendChild(sunLi1);
    const note = document.createElement("i");
    note.textContent = "Note: Hours may vary depending on our moods, fridge contents, and whether or not we remembered to restock the wine."
    hoursDiv.appendChild(note)

    
    
    

}



