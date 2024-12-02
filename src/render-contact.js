import doc from "./lib/doc.js";

import shopWindowImage from "./img/christmas-shop-window.jpg";

function render(contentNode) {
    contentNode.append(
        doc.make(".section", [
            doc.img({ src: shopWindowImage }),
            doc.make(".text-block", [
                doc.h2("Contact Us"),
                doc.p("Would you like us to cater an event? Do you have questions about our menu?"),
                doc.p("Use the form below to get in touch with us."),

                doc.make("form#contact-form", [
                    doc.fieldset([
                        doc.label({ for: "name", children: [
                            doc.span("Name:"),
                            doc.input({
                                id: "name",
                                name: "name",
                                type: "text",
                                placeholder: "Jane Doe"
                            }),
                        ]}),
                        doc.label({ for: "email", children: [
                            doc.span("Email:"),
                            doc.input({
                                id: "email", 
                                name: "email", 
                                type: "email",
                                required: true,
                                placeholder: "your.email@example.com"
                            }),
                        ]}),
                    ]),
                    doc.fieldset({ className: "wide", children: [
                        doc.label({ for: "message" , children: [
                            doc.span("Message: "),
                            doc.textarea({ id: "message", name: "message", required: true,
                                placeholder: "Your message goes here" }),
                        ]}),
                    ]}),
                    doc.button({ id: "send-button", text: "Send Message" }),
                ]),
                doc.make("h3#contact-response.hidden",
                    "Thank you! We'll email you a reply as soon as we can."),
                doc.make(".filigree"),
            ]),
        ]),
    );

    const formNode = document.getElementById("contact-form");
    const responseNode = document.getElementById("contact-response");

    formNode.classList.remove("hidden");
    responseNode.classList.add("hidden");

    document.getElementById("send-button").addEventListener("click", (e) => {
        if (formNode.checkValidity()) {
            e.preventDefault();
            formNode.classList.add("hidden");
            responseNode.classList.remove("hidden");
        }
    });
}

export default render;