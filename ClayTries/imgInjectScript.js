//Array di Servizi da cui prendere i dati
const imageSet = [
    {
        title: "Basic website",
        text:"Choose a basic site from our templates",
        image:"firstStar.svg"
    },{
        title: "Customize",
        text:"Customize your old webSite or the basic one",
        image:"gradientinkspot.svg"
    },{
        title: "Copywriting",
        text:"Design a logo, style your coherent way to your customers",
        image:"CCLogoSVG.svg"
    }
]
//il nodo del DOM a cui appendere i dati una volta rielaborati in HTML
//avrei potuto semplicemente chiamare document.getelement nel parametro della funzione CreateAndAppendServix
place = document.getElementById("crlInner");

//Chiamata alla funzione che elabora ed appende
CreateAndAppendServix(place, imageSet);
SetActiveClass(place);
//
function CreateAndAppendServix(place, array){

    for (const set of array) {
        //console.log(serv.title);
        //CREAZIONE DELL'ELEMENTO
        let element = document.createElement("div");
        element.innerHTML = 
       `<img class="d-block carolImage" src="${set.image}" alt="Image rended improperly">`;
        //console.log(element); 
        element.classList.add("carousel-item")
        element.classList.add("carolImageContain")

        //APPENDERE L'ELEMENTO
        place.appendChild(element);
    }

}
function SetActiveClass(place){
    let element = place.firstElementChild;
    console.log(element);
    element.classList.add("active");
}