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
                doc.p("Actually, this is not a real restaurant. I made this mock website as part of the Odin Project curriculum to practice my webpack skills."),
                doc.p(["While I have your attention, I would like to acknowledge the photographers of this site's images. ",
                    "The Christmas shop window on the home page was photographed by ",
                    doc.a({ href: "https://unsplash.com/@alexandra_p_d", text: "Alexandra P. D. on Unsplash" }),
                    ". Credit for the menu photos, top to bottom, goes to ",
                    doc.a({ href: "https://unsplash.com/@thenixcompany", text: "The Nix Company" }),
                    ", ",
                    doc.a({ href: "https://unsplash.com/@carissagan", text: "Carissa Gan" }),
                    ", ",
                    doc.a({ href: "https://unsplash.com/@micheile", text: "Micheile Henderson" }),
                    ", and ",
                    doc.a({ href: "https://unsplash.com/@anitaaustvika", text: "Anita Austvika" }),
                    ". The milk and cookies on the About page were photographed by ",
                    doc.a({ href: "https://unsplash.com/@annesophiephotographe", text: "Anne-Sophie Benoit"}),
                    "."
                ]),
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