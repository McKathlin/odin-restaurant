// Stylesheet
import "./styles.css";

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

import renderHomePage from "./render-home.js";
import renderMenuPage from "./render-menu.js";
import renderAboutPage from "./render-about.js";
import renderContactPage from "./render-contact.js";

function renderTab(tabNode) {
    clearPageContent();
    setCurrentTab(tabNode);
    allTabsById[tabNode.id].render(contentNode);
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

// Tab events

for (const tabId in allTabsById) {
    let tabNode = allTabsById[tabId].tabNode;
    tabNode.addEventListener("click", function(event) {
        renderTab(tabNode);
    });
}

// Startup

renderTab(document.getElementById("home-tab"));