//header

function myFunction() {
    var links = document.querySelector("header .links");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}

//galeria z zdjęciami

var zdjecia=document.querySelectorAll(".img");
zdjecia.forEach(item=>{
    item.addEventListener("mouseover",()=>{
        console.log("click")
        
    })
})