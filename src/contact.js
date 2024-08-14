export default function createContact () {
    const content = document.getElementById("content");

    const title = document.createElement("h1")
    title.textContent = "Girl Diner";
    content.appendChild(title);


    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contactDiv")
    content.appendChild(contactDiv);

    const contactH1 = document.createElement("h3");
    contactH1.textContent = "Get in Touch!";
    contactDiv.appendChild(contactH1);

   
    const phone = document.createElement("h4");
    phone.textContent = "Phone: 1-800-GRL-DINR ";
    contactDiv.appendChild(phone);
    const phoneDescription = document.createElement("p");
    phoneDescription.textContent = "(Yes, we made that number up. No, it doesn’t actually work. Just send us an email.)";
    contactDiv.appendChild(phoneDescription);

    const email = document.createElement("h4");
    email.textContent = "Email: info@girldiner.com ";
    contactDiv.appendChild(email);
    const emailDescription = document.createElement("p");
    emailDescription.textContent = "We promise to respond as soon as we’re done snacking. Or napping. Or both.";
    contactDiv.appendChild(emailDescription);


    const social = document.createElement("h4");
    social.textContent = "Follow us on Instagram: @GirlDiner ";
    contactDiv.appendChild(social);
    const socialDescription = document.createElement("p");
    socialDescription.textContent = "Expect daily updates on our latest half-meal creations, plus the occasional meme about how we’re all just one bad day away from eating crackers for dinner.";
    contactDiv.appendChild(socialDescription);

    const address = document.createElement("h4");
    address.textContent = "Address: 123 Snack Street, Munchville, USA";
    contactDiv.appendChild(address);
    const addressDescription = document.createElement("p");
    addressDescription.textContent = "(Just kidding, but wouldn’t that be awesome? We’re actually located somewhere near your fridge.)";
    contactDiv.appendChild(addressDescription);


    


}