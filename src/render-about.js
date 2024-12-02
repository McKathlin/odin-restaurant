import doc from "./lib/doc.js";

function render(contentNode) {
    contentNode.append(
        doc.h2("About Us"),
        doc.p("This is the about page."),
    );
}

export default render;