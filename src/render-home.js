import doc from "./doc.js";

function render(contentNode) {
    contentNode.append(
        doc.h2("Home"),
        doc.p("This is the home page."),
        doc.div([
            "We can put ",
            doc.strong("all"),
            " the paragraphs we want in here.",
        ]),
    );
}

export default render;