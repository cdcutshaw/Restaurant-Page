import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import "./styles.css"

function clearContent() {
    const content = document.getElementById("content");
    content.innerHTML = "";
}

function loadHome() {
    clearContent();
    createHome();
};

function loadMenu() {
    clearContent();
    createMenu();
};

function loadContact() {
    clearContent();
    createContact();
}

function eventListeners() {
    const homeBtn = document.querySelector("button:nth-child(1)");
    homeBtn.addEventListener("click", loadHome);

    const menuBtn = document.querySelector("button:nth-child(2)");
    menuBtn.addEventListener("click", loadMenu);

    const contactBtn = document.querySelector("button:nth-child(3)");
    contactBtn.addEventListener("click", loadContact);
}
eventListeners();

function initialize() {
    document.addEventListener("DOMContentLoaded", () => {
        eventListeners();
        loadHome();
    });
}
initialize();