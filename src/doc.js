// doc.js
// A module that makes HTML element creation quicker and tighter

const doc = (function() {
    function elementClosure(elementType) {
        const eType = elementType;
        return function(text) {
            let element = document.createElement(eType);
            element.textContent = text;
            return element;
        };
    }

    const p = elementClosure("p");
    const h1 = elementClosure("h1");
    const h2 = elementClosure("h2");
    const h3 = elementClosure("h3");

    return { p, h1, h2, h3 };
})();

export default doc;