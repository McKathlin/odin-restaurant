import doc from "./lib/doc.js";
import lorem from "./lib/lorem.js";

import cookiesImage from "./img/milk-and-cookies.jpg";
import shopWindowImage from "./img/christmas-shop-window.jpg";

function render(contentNode) {
    contentNode.append(
        doc.make(".section", [
            doc.img({ src: cookiesImage }),
            doc.make(".text-block", [
                doc.h2("About Us"),
                doc.p("Our mission is to warm up your inner child with Christmas wonder, all year round."),
                doc.p(lorem(20)),
                doc.p(lorem(21)),
            ]),
        ]),
        doc.make(".section", [
            doc.make(".text-block", [
                doc.h2("Our History"),
                doc.p([
                    "Our name is inspired by the classic movie ",
                    doc.em("Miracle on 34th Street"), ". ",
                    lorem(22),
                ]),
                doc.p(lorem(23)),
                doc.p(lorem(24)),
                doc.p(lorem(25)),
                doc.make(".filigree"),
            ]),
            doc.img({ src: shopWindowImage }),
        ]),
    );
}

export default render;