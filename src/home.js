export default function createHome () {
    console.log("home test1");
}

import homepageImg from "./images/homepage.jpg";

const image = document.createElement("img"); 
image.src = homepageImg;

document.body.appendChild(image);