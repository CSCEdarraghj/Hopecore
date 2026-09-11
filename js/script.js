// ===========================
// HOPECORE - MAIN JAVASCRIPT
// ===========================


document.addEventListener("DOMContentLoaded", () => {

    // --------------------
    // Smooth Navigation
    // --------------------

    const navigationLinks = document.querySelectorAll('a[href^="#"]');

    navigationLinks.forEach((link) => {

        link.addEventListener("click", (event) => {
            
            const targetID = link.getAttribute("href");

            if (targetID === "#") {
                return;
            }

            const targetSection = document.querySelector(targetID);

            if (targetSection) {
                
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // --------------------
    // Button Press Effect
    // --------------------

    const buttons = document.querySelectorAll(
        ".primary-button, .secondary-button, button"
    );

    buttons.forEach((button) => {

        button.addEventListener("mousedown", () => {
            button.classList.add("button-active");
        });

         button.addEventListener("mouseup", () => {
            button.classList.remove("button-active");
        });

         button.addEventListener("mouseleave", () => {
            button.classList.remove("button-active");
        });

    });

    // --------------------
    // Page Load Effect
    // --------------------

    document.body.classList.add("page-loaded");

    // --------------------
    // External Links
    // --------------------

    const externalLinks = document.querySelectorAll(
        'a[target="_blank"]'
    );

    externalLinks.forEach((link) => {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });

});