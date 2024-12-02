import "./styles.css";
import doc from "./doc.js";

// Page elements

const allTabsById = {
    "home-tab": {
        tabNode: document.getElementById("home-tab"),
        render: renderHomePage
    },
    "menu-tab": {
        tabNode: document.getElementById("menu-tab"),
        render: renderMenuPage
    }, 
    "about-tab": {
        tabNode: document.getElementById("about-tab"),
        render: renderAboutPage
    },
    "contact-tab": {
        tabNode: document.getElementById("contact-tab"),
        render: renderContactPage
    }
};

const contentNode = document.getElementById("content");

// Page rendering functions

function renderTab(tabNode) {
    clearPageContent();
    setCurrentTab(tabNode);
    allTabsById[tabNode.id].render();
}

function clearPageContent() {
    contentNode.replaceChildren();
}

function setCurrentTab(currentTabNode) {
    for (const tabId in allTabsById) {
        const tabNode = allTabsById[tabId].tabNode;
        if (tabNode == currentTabNode) {
            tabNode.classList.add("current-tab");
        } else {
            tabNode.classList.remove("current-tab");
        }
    }
}

function renderHomePage() {
    contentNode.append(
        doc.h2("Home"),
        doc.p("This is the home page"),
        doc.p("We can put all the paragraphs we want here."),
    );
}

function renderMenuPage() {
    contentNode.append(
        doc.h2("Menu"),
        doc.p("This is the menu page"),
    );
}

function renderAboutPage() {
    contentNode.append(
        doc.h2("About Us"),
        doc.p("Lorem ipsum dolor sit amet..."),
    );
}

function renderContactPage() {
    contentNode.append(
        doc.h2("Contact Us"),
        doc.p("Here's our fake email address and phone number"),
    );
}

// Tab events

for (const tabId in allTabsById) {
    let tabNode = allTabsById[tabId].tabNode;
    tabNode.addEventListener("click", function(event) {
        renderTab(tabNode);
    });
}

// Startup

renderTab(document.getElementById("home-tab"));