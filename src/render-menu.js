import doc from "./doc.js"

function render(contentNode) {
    contentNode.append(
        doc.h2("Menu"),
        doc.p("This is the menu page."),
    );
}

export default render;