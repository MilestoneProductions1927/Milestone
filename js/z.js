document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const closeMenu = document.querySelector(".close-menu");
    const navLinks = document.querySelector(".nav-links");
    const menuText = document.querySelector(".menu-toggle p"); // Seleziona il testo "MENU"
    const menuImage = document.querySelector(".menu-toggle img"); // Seleziona il testo "MENU"


    menuToggle.addEventListener("click", () => {
        navLinks.classList.add("active");
        menuText.classList.add("hidden"); // Aggiungi classe per nascondere il testo
        menuImage.classList.add("hidden"); // Aggiungi classe per nascondere il testo
    });

    closeMenu.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuText.classList.remove("hidden"); // Rimuovi classe per mostrare il testo
        menuImage.classList.remove("hidden"); // Aggiungi classe per nascondere il testo

    });
});
