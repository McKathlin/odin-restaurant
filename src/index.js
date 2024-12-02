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
    contentNode.textContent = "Home Page";
}

function renderMenuPage() {
    contentNode.textContent = "Menu Page";
}

function renderAboutPage() {
    contentNode.textContent = "About Page";
}

function renderContactPage() {
    contentNode.textContent = "Contact Page";
}

// Tab events

for (const tabId in allTabsById) {
    let tabNode = allTabsById[tabId].tabNode;
    tabNode.addEventListener("click", function(event) {
        clearPageContent();
        setCurrentTab(allTabsById[event.target.id].tabNode);
        allTabsById[event.target.id].render();
    });
}

// Startup

renderHomePage();