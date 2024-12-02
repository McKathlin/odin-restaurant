import doc from "./lib/doc.js";

function render(contentNode) {
    contentNode.append(
        doc.h2("Home"),
        doc.p("This is the home page."),
        doc.div([
            "We can put ",
            doc.strong("all"),
            " the paragraphs we need in here.",
        ]),
    );
}

export default render;