import doc from "./lib/doc.js";

function render(contentNode) {
    contentNode.append(
        doc.h2("Contact Us"),
        doc.p("Our fake email address and phone number go here."),
    );
}

export default render;