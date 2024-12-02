import doc from "./lib/doc.js";
import lorem from "./lib/lorem.js";

import shopWindowImage from "./img/christmas-shop-window.jpg";

function render(contentNode) {
    contentNode.append(
        doc.img({ className: "image-left", src: shopWindowImage }),
        doc.h2("Do you need a little Christmas?"),
        doc.p("Visit the 34th Street Café for Christmas cheer, any time of year."),
        doc.p(lorem(1)),
        doc.p("Conveniently and meaningfully located on 1225 34th Street, we're open from 10:00am to 4:00pm.")
    );
}

export default render;