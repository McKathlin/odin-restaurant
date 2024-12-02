import doc from "./lib/doc.js";
import lorem from "./lib/lorem.js";

import sandwichImage from "./img/roast-beef-sandwich.jpg";
import saladImage from "./img/berry-fruit-salad.jpg";
import cocoaImage from "./img/hot-cocoa.jpg";
import pieImage from "./img/plum-pie.jpg";

function render(contentNode) {
    contentNode.append(
        doc.make(".section", [
            doc.img({ src: sandwichImage }),
            doc.make(".text-block", [
                doc.make("h2.left", "Sandwiches"),
            ]),
        ]),
    );

    contentNode.append(
        doc.make(".section", [
            doc.make(".text-block", [
                doc.make("h2.right", "Sides"),
            ]),
            doc.img({ src: saladImage }),
        ]),
    );

    contentNode.append(
        doc.make(".section", [
            doc.img({ src: cocoaImage }),
            doc.make(".text-block", [
                doc.make("h2.left", "Beverages"),
            ]),
        ]),
    );

    contentNode.append(
        doc.make(".section", [
            doc.make(".text-block", [
                doc.make("h2.right", "Sweet Treats"),
            ]),
            doc.img({ src: pieImage }),
        ]),
    );
}

export default render;