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

// lignes venant de la doc et en regardant le site de M Nevot venant  mdn liens utilises:https://developer.mozilla.org/fr/docs/Web/API/Document et https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent

 document.addEventListener("keydown",(event) => { // attention document n'est pas bon apres le if puisque il represent n importe quelle page web mais ne la charge pas 
        if (event.key==="Backspace" ){ // attention il faut trois egale et non pas deux comment en cpp
        window.location.href = "../index.html";
        }

    });// a la paranthese fermante 