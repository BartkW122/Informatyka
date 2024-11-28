var btn_zal = document.querySelector(".zal");
var btn_zar = document.querySelector(".zar");
var btn_log = document.querySelector(".log");
var btn_rej = document.querySelector(".rej");
var form_rej = document.querySelector(".rejestr");
var form_log = document.querySelector(".logowanie");

document.addEventListener("DOMContentLoaded", () => {
   
    form_rej.style.display = "block"; 
    form_log.style.display = "none"; 
    document.body.style.height = `${window.innerHeight}px`;
});


form_rej.addEventListener("submit", (e) => {
    e.preventDefault(); 
    window.location.href = "strona_g.html";
});


form_log.addEventListener("submit", (e) => {
    e.preventDefault(); 
    window.location.href = "strona_g.html";
});


btn_log.addEventListener("click", () => {
    form_rej.style.display = "none"; 
    form_log.style.display = "block"; 
});


btn_rej.addEventListener("click", () => {
    form_rej.style.display = "block"; 
    form_log.style.display = "none"; 
});

//

function myFunction() {
    var links = document.querySelector("header .links");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}
