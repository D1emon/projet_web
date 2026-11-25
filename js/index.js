const dialog = document.querySelector("dialog");
const radio = document.querySelector("form").elements["close"];
const warning = document.querySelector(".warning");
const images = ["../media/springfield.png","../media/santiago.png"]


let index = 0;
const image = document.getElementById("imagecoulissante");

function afficher() {
  image.src = images[index];
}

document.getElementById("next").addEventListener("click", (e) => {
  e.preventDefault();
  index = (index + 1) % images.length;
  afficher();
});

document.getElementById("prev").addEventListener("click", (e) => {
  e.preventDefault();
  index = (index - 1 + images.length) % images.length;
  afficher();
});

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
        if (event.key==="F1"  ){ // attention il faut trois egale et non pas deux comment en cpp
        window.location.href = "../pages/recomandation.html";
        }else if (event.key==="F2"){
            window.location.href= "../pages/destinations.html";       
         }else if (event.key==="F3"){
            window.location.href= "../pages/Services.html";       
         }

    });// a la paranthese fermante 