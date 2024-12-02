import doc from "./lib/doc.js";
import lorem from "./lib/lorem.js";

import sandwichImage from "./img/roast-beef-sandwich.jpg";
import saladImage from "./img/berry-fruit-salad.jpg";
import cocoaImage from "./img/hot-cocoa.jpg";
import pieImage from "./img/plum-pie.jpg";

function render(contentNode) {
    const menuItem = function(name, description) {
        return doc.li([
            doc.make("span.dish-name", name),
            " ",
            doc.make("span.dish-description", description),
        ]);
    }

    contentNode.append(
        doc.make(".section", [
            doc.img({ src: sandwichImage }),
            doc.make(".text-block", [
                doc.make("h2.left", "Sandwiches"),
                doc.ul([
                    menuItem("Roast Beast Sandwich", 
                        "A rich, meaty sandwich carved by the Grinch himself."
                    ),
                    menuItem("Sandwich 2", lorem(2)),
                    menuItem("Sandwich 3", lorem(3)),
                ]),
            ]),
        ]),
    );

    contentNode.append(
        doc.make(".section", [
            doc.make(".text-block", [
                doc.make("h2.right", "Sides"),
                doc.ul([
                    menuItem("Berry Merry Fruit Salad",
                        "An assortment of fresh fruit and nuts: blueberries, strawberries, kiwi, peaches, and walnuts."
                    ),
                    menuItem("Chestnuts Roasting",
                        "Roasted chestnuts, hot off the open fire. Guaranteed to keep Jack Frost at bay."
                    ),
                    menuItem("Chris Kringle's Curly Fries", lorem(23)),
                    menuItem("Who Hash Browns", lorem(24)),
                ]),
            ]),
            doc.img({ src: saladImage }),
        ]),
    );

    contentNode.append(
        doc.make(".section", [
            doc.img({ src: cocoaImage }),
            doc.make(".text-block", [
                doc.make("h2.left", "Beverages"),
                doc.ul([
                    menuItem("Hot Cocoa",
                        "Available in classic, peppermint, or cinnamon."
                    ),
                    menuItem("Polar Espresso", lorem(31)),
                    menuItem("Merry Mocha", lorem(32)),
                    menuItem("Milk",
                        "Your choice of whole, skim, or 2% milk. The Santa-approved complement to cookies."
                    ),
                    menuItem("Chocolate Milk",
                        "Your choice of whole, skim, or 2% milk with our house blend chocolate syrup."
                    ),
                    menuItem("Wassail",
                        "The warm, spicy holiday classic. We flavor our wassail with real orange zest."
                    ),
                    menuItem("Cider",
                        "We serve it the way you like it: warm or cool, plain or spiced."
                    ),
                    menuItem("Peppermint Tea", lorem(33))
                ]),
            ]),
        ]),
    );

    contentNode.append(
        doc.make(".section", [
            doc.make(".text-block", [
                doc.make("h2.right", "Sweet Treats"),
                doc.ul([
                    menuItem("Christmas Pie",
                        "A rich plum pie with a buttery crust. Little Jack Horner would be pleased!"
                    ),
                    menuItem("Figgy Pudding", 
                        "You asked for it (again and again and AGAIN), and we've got it!"
                    ),
                    menuItem("Chocolate Chip Cookies", lorem(43)),
                    menuItem("Christmas Cookie Sampler", lorem(44)),
                    menuItem("Jolly Jelly Scones", lorem(45)),
                ]),
                doc.make(".filigree"),
            ]),
            doc.img({ src: pieImage }),
        ]),
    );
}

export default render;