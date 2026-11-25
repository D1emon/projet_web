const dialog = document.querySelector("dialog");
const radio = document.querySelector("form").elements["close"];
const warning = document.querySelector(".warning");

// lignes venant de la documentation mdn mais adaptées pour notre site
dialog.addEventListener("cancel", (e) => {
    if (!e.cancelable) {
        return;
    };
    if (radio.value === "no") {
        warning.hidden = false;
        e.preventDefault();
                            } 
    else {
        warning.hidden = true;
    }
});

// Raccourcis clavier
document.addEventListener("keydown", (event) => {
    if (event.target.closest("input, textarea")) return;
    if (event.key === "Backspace") {
        window.location.href = "../index.html";
    } else if (event.key === "F2") {
        window.location.href = "destinations.html";
    }
});
