// Apparition des cartes et des images au défilement
const items = document.querySelectorAll(".service, .photo");
const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
        }
    });
}, { threshold: 0.15 });
 
items.forEach((el, i) => {
    el.style.transitionDelay = (i % 3) * 120 + "ms";
    obs.observe(el);
});
 
// Raccourcis clavier (comme sur les autres pages)
document.addEventListener("keydown", (event) => {
    if (event.target.closest("input, textarea")) return;
    if (event.key === "Backspace") {
        window.location.href = "../index.html";
    } else if (event.key === "F1") {
        window.location.href = "recomandation.html";
    } else if (event.key === "F2") {
        window.location.href = "destinations.html";
    }
});
 