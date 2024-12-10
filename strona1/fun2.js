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
var span=document.querySelectorAll("span")

for(let i = 0;i<zdjecia.length;i++){
    zdjecia[i].addEventListener("mouseover",()=>{
        console.log(i);
        let node=zdjecia[i].childNodes
        node.forEach(item=>{
            span.forEach(item2=>{
                if(item.id==item2.id){
                    let elem=item2
                    elem.style.visibility="visible";
                    console.log(elem)
                }
            })
        })
    })
    zdjecia[i].addEventListener("mouseout",()=>{
        console.log(i);
        let node=zdjecia[i].childNodes
        node.forEach(item=>{
            span.forEach(item2=>{
                if(item.id==item2.id){
                    let elem=item2
                    elem.style.visibility="hidden";
                    console.log(elem)
                }
            })
        })
    })
}