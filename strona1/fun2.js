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

//pytania

// Select elements
var pytanie = document.querySelectorAll(".pytanie");

for (let i = 0; i < pytanie.length; i++) {
    
    pytanie[i].addEventListener("mouseover", () => {
        console.log(i);

        
        let node = pytanie[i].childNodes[2];

        if (node && node.style.visibility !== "visible") {
            node.style.visibility = "visible";
        }
    });

    pytanie[i].addEventListener("mouseout", () => {
        console.log(i);

       
        let node = pytanie[i].childNodes[2];

        if (node && node.style.visibility !== "hidden") {
            node.style.visibility = "hidden";
        }
    });
}

//Ankieta
var ankieta = [];

var btn_input = document.querySelector(".btn_sub");
var pokaz_ank = document.querySelector(".pokaz_ank");
var zamknij=document.querySelector(".zamknij")
var pokaz=document.querySelector(".pokaz")

var wybor_ankiety = document.querySelector(".wybor_ankiety");

var Select = document.querySelector("select");

var u_name_value=document.querySelector(".u_name_value")
var u_rate_valuee=document.querySelector(".u_rate_value")
var u_poprawki_value=document.querySelector(".u_poprawki_value")
var u_query_value=document.querySelector(".u_query_value")

pokaz_ank.addEventListener("click", () => {
    wybor_ankiety.style.visibility = "visible";
});

zamknij.addEventListener("click", () => {
    wybor_ankiety.style.visibility = "hidden";
});


btn_input.addEventListener("click", () => {
    
    var name_input = document.querySelector(".name").value.trim();
    var pop_input = document.querySelector(".pop").value.trim();
    var pyt_input = document.querySelector(".pyt").value.trim();
    var rad_input = document.querySelectorAll(".rad");

    var selectedRadio = Array.from(rad_input).find(radio => radio.checked);

    if (name_input && pop_input && pyt_input && selectedRadio) {
    
        var an = {
            imie: name_input,
            rad: selectedRadio.value,
            poprawki: pop_input,
            pytanie: pyt_input
        };

    
        ankieta.push(an);

        
        var option = document.createElement("option");
        option.value = an.imie;
        option.textContent = an.imie;
        Select.appendChild(option);

        
    } else {
        alert("Wypełnij wszystkie pola!");
    }

});

pokaz.addEventListener("click", () => {
    console.log(Select.value)
    ankieta.forEach(item=>{
        console.log(item)
        if(Select.value==item.imie){
            console.log(item.pytanie)
            u_name_value.textContent=item.imie
            if(item.rad=="sl"){
                u_rate_valuee.textContent="tak sobie"
            }
            if(item.rad=="ok"){
                u_rate_valuee.textContent="okej"
            }
            if(item.rad=="bd"){
                u_rate_valuee.textContent="bardzo fajna"
            }
            u_poprawki_value.textContent=item.poprawki
            u_query_value.textContent=item.pytanie
            console.log(u_name_value)
            console.log(u_poprawki_value)
            console.log(u_query_value)
        }
    })
});