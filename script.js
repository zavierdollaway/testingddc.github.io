const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// Hamburger menu
if (menuToggle && nav) {
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

        // Reset dropdowns when closing the hamburger menu
        if (!isOpen) {
            nav.querySelectorAll(".dropdown.open, .sub-dropdown.open")
                .forEach((dropdown) => dropdown.classList.remove("open"));

            nav.querySelectorAll(".dropbtn")
                .forEach((button) => button.setAttribute("aria-expanded", "false"));
        }
    });
}

// Mobile dropdown menus
document.querySelectorAll(
    ".dropdown > .dropbtn, .sub-dropdown > .dropbtn"
).forEach((button) => {
    button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", (event) => {
        // Keep normal hover behavior on desktop
        if (window.innerWidth > 1000) return;

        event.preventDefault();
        event.stopPropagation();

        const parent = button.parentElement;
        const isOpen = parent.classList.toggle("open");

        button.setAttribute("aria-expanded", String(isOpen));
    });
});