const loremSnippets = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem at quidem, eius magnam blanditiis facilis commodi illum repellat molestias, maiores iure eligendi ullam iusto consectetur eaque rem!",
    "Quidem dolores ad rem repellat mollitia quod, optio commodi perferendis autem, praesentium minima explicabo cupiditate iure ipsum possimus necessitatibus nam dolorem? Obcaecati!",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium hic aut in temporibus magnam iusto commodi ex odit quisquam, consequuntur voluptatem placeat reprehenderit iste at fugiat eveniet possimus accusamus aliquam!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit, cumque maiores quis facere aliquid, molestias mollitia vel beatae fugiat vitae qui minus porro explicabo, ipsa deleniti quasi aliquam aspernatur!",
    "Ipsam eaque delectus error, quos accusantium earum sed atque doloremque porro repellendus, laudantium sunt et commodi, minus ratione veritatis assumenda minima cumque!",
];

const lorem = function(seed) {
    if (undefined === seed) {
        seed = Math.random() * 10000;
    }
    const randomIndex = Math.floor(seed % loremSnippets.length);
    return loremSnippets[randomIndex];
}

export default lorem;