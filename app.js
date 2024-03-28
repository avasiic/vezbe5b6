//console.log(obrisiDugmad);

function menjanjeBoje(boja){
    let obrisiDugmad=document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor=boja;  
    }
}

//menjanjeBoje("purple");

let menjanjeBojeA=(boja)=>{

    let obrisiDugmad=document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor=boja;
        
    }
}

//menjanjeBojeA("pink");

let menjanjeBojeB=(boja)=>Array.from(document.getElementsByClassName("obrisi")).forEach(dugme=> dugme.style.backgroundColor=boja);
menjanjeBojeB("magenta");

let obrisiDugmad=document.getElementsByClassName("obrisi");

for (const dugme of obrisiDugmad) {
    dugme.addEventListener("click", function(e){
        console.log(this);
        console.log(this.parentNode);
        let elementZaBrisanje=this.parentNode;
        elementZaBrisanje.remove();

    })
    
}

//function obrisiRed(){
    //this.parentNode.remove();
//}

//for (const dugme of obrisiDugmad) {
    //dugme.addEventListener("click", obrisiRed);
    
//}

function dodajDestinaciju(event){
    event.preventDefault();
    let inputPolje=document.querySelector("#dodajDestinaciju input");

    let nazivNoveDestinacije=inputPolje.value;

    if(nazivNoveDestinacije){
        let ul=document.getElementById("lista");
        let novili=document.createElement("li");
        novili.innerHTML=`<span class="naziv">${nazivNoveDestinacije}</span>
        <span class="obrisi">obriši</span>`;
        ul.appendChild(novili);

        inputPolje.value="";
        
    }

    function pozivFunkcije(){
        let forma=document.forms["dodaj destinaciju"];
        forma.addEventListener("submit", dodajDestinaciju);
    }
}

document.addEventListener("DOMContentLoaded", pozivFunkcije);