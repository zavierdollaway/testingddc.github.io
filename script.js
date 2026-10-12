const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

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
    });

    document.querySelectorAll(".dropdown > .dropbtn, .sub-dropdown > .dropbtn")
        .forEach((button) => {
            button.addEventListener("click", (event) => {
                if (window.innerWidth > 1000) return;

                event.preventDefault();
                event.stopPropagation();

                const parent = button.parentElement;
                const isOpen = parent.classList.toggle("open");

                button.setAttribute("aria-expanded", String(isOpen));
            });
        });
}

document.querySelectorAll(
  ".dropdown > .dropbtn, .sub-dropdown > .dropbtn"
).forEach((button) => {
  button.addEventListener("click", (event) => {
      if (window.innerWidth > 1000) return;

      event.preventDefault();
      event.stopPropagation();

      const parent = button.parentElement;
      const isOpen = parent.classList.toggle("open");

      button.setAttribute("aria-expanded", String(isOpen));
  });
});