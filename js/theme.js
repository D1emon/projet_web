// 1) on enlève tout ancien lien vers dark.css qui serait resté dans la page
document.querySelectorAll('link[href*="dark.css"]').forEach((l) => l.remove());

// 2) le lien du thème sombre est créé ici, uniquement quand on en a besoin
const sombre = document.createElement("link");
sombre.rel = "stylesheet";
// chemin calculé à partir de l'emplacement de theme.js (js/ -> ../css/dark.css)
sombre.href = new URL("../css/dark.css", document.currentScript.src).href;

// 3) le bouton : on le crée s'il n'existe pas dans la page
let bouton = document.getElementById("btn-theme");
if (!bouton) {
    bouton = document.createElement("button");
    bouton.type = "button";
    bouton.className = "bouton";
    bouton.id = "btn-theme";
    (document.getElementById("entete") || document.body).appendChild(bouton);
}

function appliquer(mode) {
    if (mode === "dark") {
        document.head.appendChild(sombre);
    } else {
        sombre.remove();
    }
    bouton.textContent = mode === "dark" ? "☀️ Mode clair" : "🌙 Mode sombre";
    localStorage.setItem("theme", mode);
}

// au chargement : clair par défaut, sombre seulement si l'utilisateur l'a choisi
appliquer(localStorage.getItem("theme") === "dark" ? "dark" : "light");

bouton.addEventListener("click", () => {
    appliquer(localStorage.getItem("theme") === "dark" ? "light" : "dark");
});