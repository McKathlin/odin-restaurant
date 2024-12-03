import doc from "./lib/doc.js";
import lorem from "./lib/lorem.js";

import shopWindowImage from "./img/christmas-shop-window.jpg";

function render(contentNode) {
    contentNode.append(
        doc.make(".section", [
            doc.img({ src: shopWindowImage }),
            doc.make(".text-block", [
                doc.h2("Do you need a little Christmas?"),
                doc.p("Visit the 34th Street Café for Christmas cheer, any time of year."),
                doc.p(lorem(1)),

                doc.make(".filigree"),

                doc.h2("Hours"),
                doc.p(["10:00 AM - 4:00 PM", doc.br(), "Monday through Saturday"]),

                doc.h2("Address"),
                doc.p(["34th Street Café", doc.br(), 
                    "1225 34th Street", doc.br(),
                    "New Donk, USA"]
                ),
            ]),
        ]),
    );
}

export default render;