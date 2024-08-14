export default function createMenu () {
    const content = document.getElementById("content");

    const title = document.createElement("h1")
    title.textContent = "Girl Diner";
    content.appendChild(title);


    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menuDiv");
    content.appendChild(menuDiv);

    const menuH1 = document.createElement("h2");
    menuH1.textContent = "Menu";
    menuDiv.appendChild(menuH1);

   


    const snacksDiv = document.createElement("div");
    menuDiv.appendChild(snacksDiv);
    const snacks = document.createElement("h3");
    snacks.textContent = "Snacks That Pretend to Be Meals";
    snacksDiv.appendChild(snacks);


    const snack1 = document.createElement("h4");
    snack1.textContent = "The Almost-A-Salad";
    snacksDiv.appendChild(snack1);
    const snack1Description = document.createElement("p");
    snack1Description.textContent = "A carefully curated pile of lettuce with just enough croutons, shredded cheese, and maybe a slice of tomato to technically qualify as a salad. Dressing optional—but let’s be real, you’re just here for the croutons";
    snacksDiv.appendChild(snack1Description);

    const snack2 = document.createElement("h4");
    snack2.textContent = "Charcuterie Chaos";
    snacksDiv.appendChild(snack2);
    const snack2Description = document.createElement("p");
    snack2Description.textContent = "An assortment of random cheeses, mystery meats, and a variety of crackers (mostly the broken ones). Served with a side of “Is this still good?” fruit and the tiniest drizzle of honey to make it feel fancy.";
    snacksDiv.appendChild(snack2Description);

    const snack3 = document.createElement("h4");
    snack3.textContent = "The Nibble Platter";
    snacksDiv.appendChild(snack3);
    const snack3Description = document.createElement("p");
    snack3Description.textContent = "A platter of whatever we found in the pantry: half a bag of chips, some pretzels, a handful of nuts, and a couple of sad-looking grapes. It’s like a tasting menu, but with zero commitment.";
    snacksDiv.appendChild(snack3Description);

    const snack4 = document.createElement("h4");
    snack4.textContent = "The Fridge Clean-Out Special";
    snacksDiv.appendChild(snack4);
    const snack4Description = document.createElement("p");
    snack4Description.textContent = "Everything that was on the verge of expiring, artfully arranged on a plate. This ever-changing dish is a surprise even to us! Will it be leftover pasta, two slices of cheese, or that yogurt no one touched? Come find out!";
    snacksDiv.appendChild(snack4Description);




    const dipsDiv = document.createElement("div");
    menuDiv.appendChild(dipsDiv);
    const dips = document.createElement("h3");
    dips.textContent = "Dips & Spreads: Because We’re Fancy Like That";
    dipsDiv.appendChild(dips);

    const dip1 = document.createElement("h4");
    dip1.textContent = "The I-Shouldn’t-Be-Eating-This Hummus";
    dipsDiv.appendChild(dip1);
    const dip1Description = document.createElement("p");
    dip1Description.textContent = "Hummus served with a variety of dipping tools: carrot sticks, celery, and—let’s not kid ourselves—an entire sleeve of crackers.";
    dipsDiv.appendChild(dip1Description);

    const dip2 = document.createElement("h4");
    dip2.textContent = "Sad Guacamole";
    dipsDiv.appendChild(dip2);
    const dip2Description = document.createElement("p");
    dip2Description.textContent = "Freshly mashed avocado with a squeeze of lime and a sprinkle of salt. Served with three tortilla chips (because we ran out) and a look of mild disappointment.";
    dipsDiv.appendChild(dip2Description);

    const dip3 = document.createElement("h4");
    dip3.textContent = "The Cream Cheese Surprise";
    dipsDiv.appendChild(dip3);
    const dip3Description = document.createElement("p");
    dip3Description.textContent = "Cream cheese slathered on a bagel half with your choice of: whatever jam we have, or a dash of cinnamon and sugar. It’s breakfast, dessert, and a snack all in one!";
    dipsDiv.appendChild(dip3Description);




    const EntreesDiv = document.createElement("div");
    menuDiv.appendChild(EntreesDiv);
    const Entrees = document.createElement("h3");
    Entrees.textContent = "Entrees for When You Just Can’t Anymore";
    EntreesDiv.appendChild(Entrees);

    const Entree1 = document.createElement("h4");
    Entree1.textContent = "The Single Slice of Pizza";
    EntreesDiv.appendChild(Entree1);
    const Entree1Description = document.createElement("p");
    Entree1Description.textContent = "One lonely slice of leftover pizza that we definitely didn’t microwave long enough. Served with a side of whatever condiment you find in the fridge—ketchup, anyone?";
    EntreesDiv.appendChild(Entree1Description);

    const Entree2 = document.createElement("h4");
    Entree2.textContent = "The Last-Minute Pasta";
    EntreesDiv.appendChild(Entree2);
    const Entree2Description = document.createElement("p");
    Entree2Description.textContent = "A small bowl of plain pasta with a splash of olive oil and a sprinkle of Parmesan cheese. No sauce? No problem! This is minimalist cuisine at its finest.";
    EntreesDiv.appendChild(Entree2Description);

    const Entree3 = document.createElement("h4");
    Entree3.textContent = "The Everything-Is-Fine Grilled Cheese";
    EntreesDiv.appendChild(Entree3);
    const Entree3Description = document.createElement("p");
    Entree3Description.textContent = "A single slice of cheese, barely melted, between two pieces of bread that might have seen better days. Served with a pickle spear, because we’re feeling generous.";
    EntreesDiv.appendChild(Entree3Description);



    const dessertsDiv = document.createElement("div");
    menuDiv.appendChild(dessertsDiv);
    const desserts = document.createElement("h3");
    desserts.textContent = "Desserts for When You Need a Little Something Sweet";
    dessertsDiv.appendChild(desserts);

    const dessert1 = document.createElement("h4");
    dessert1.textContent = "The Ice Cream Dregs";
    dessertsDiv.appendChild(dessert1);
    const dessert1Description = document.createElement("p");
    dessert1Description.textContent = "The last two scoops of ice cream from the bottom of the carton, served with a spoonful of whatever toppings we could scavenge: sprinkles, chocolate chips, or that weird strawberry sauce.";
    dessertsDiv.appendChild(dessert1Description);

    const dessert2 = document.createElement("h4");
    dessert2.textContent = "The Just-Three-Cookies";
    dessertsDiv.appendChild(dessert2);
    const dessert2Description = document.createElement("p");
    dessert2Description.textContent = "Exactly three cookies, freshly taken out of the package. Enjoy them while you can—they’re the last ones in the house!";
    dessertsDiv.appendChild(dessert2Description);

    const dessert3 = document.createElement("h4");
    dessert3.textContent = "The Emergency Chocolate";
    dessertsDiv.appendChild(dessert3);
    const dessert3Description = document.createElement("p");
    dessert3Description.textContent = "A single square of chocolate (okay, maybe two), because sometimes, that’s all you need to keep it together.";
    dessertsDiv.appendChild(dessert3Description);



    const drinksDiv = document.createElement("div");
    menuDiv.appendChild(drinksDiv);
    const drinks = document.createElement("h3");
    drinks.textContent = "Beverages: Hydrate or Diedrate";
    drinksDiv.appendChild(drinks);

    const drink1 = document.createElement("h4");
    drink1.textContent = "The Half-Finished Bottle of Wine";
    drinksDiv.appendChild(drink1);
    const drink1Description = document.createElement("p");
    drink1Description.textContent = "Choose from red, white, or rosé—whatever’s left over from last night. Pairs perfectly with everything on the menu.";
    drinksDiv.appendChild(drink1Description);

    const drink2 = document.createElement("h4");
    drink2.textContent = 'The "Is This Still Fizzy?" Soda';
    drinksDiv.appendChild(drink2);
    const drink2Description = document.createElement("p");
    drink2Description.textContent = "A glass of soda that’s either flat or overly fizzy. It’s a mystery every time!";
    drinksDiv.appendChild(drink2Description);

    const drink3 = document.createElement("h4");
    drink3.textContent = 'The "It’s 5 o’clock Somewhere" Cocktail';
    drinksDiv.appendChild(drink3);
    const drink3Description = document.createElement("p");
    drink3Description.textContent = "A mix of whatever liquor we have on hand with a splash of juice. No two drinks are the same—just like our customers!";
    drinksDiv.appendChild(drink3Description);

    const drink4 = document.createElement("h4");
    drink4.textContent = 'Tap Water (with Ice, if you’re lucky)';
    drinksDiv.appendChild(drink4);
    const drink4Description = document.createElement("p");
    drink4Description.textContent = "Simple, classic, and free! Served in a glass that may or may not be clean.";
    drinksDiv.appendChild(drink4Description);


    
}

