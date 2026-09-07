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
    // Sign-In Form
    // --------------------

    const signInForm = document.querySelector(".signin-form");

    if (signInForm) {

        const usernameInput = signInForm.querySelector(
            'input[type="text"], input[type="email"]'
        );

        const passwordInput = signInForm.querySelector(
            'input[type="password"]'
        );

        const rememberMe = signInForm.querySelector(
            'input[type="checkbox"]'
        );

        // Restore saved username
        if (usernameInput) {

            const savedUsername = localStorage.getItem(
                "hopecoreUsername"
            );

            if (savedUsername) {
                usernameInput.value = savedUsername;

                if (rememberMe) {
                    rememberMe.checked = true;
                }
            }
        }

        signInForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const username = usernameInput
                ? usernameInput.value.trim()
                : "";

            const password = passwordInput
                ? passwordInput.value.trim()
                : "";

            if (username === "" || password === "") {

                alert(
                    "Please enter your username and password."
                );

                return;
            }

            if (rememberMe && rememberMe.checked) {

                localStorage.setItem(
                    "hopecoreUsername",
                    username
                );

            } else {

                localStorage.removeItem(
                    "hopecoreUsername"
                );
            }

            window.location.href = "portfolio.html";
        });
    }

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