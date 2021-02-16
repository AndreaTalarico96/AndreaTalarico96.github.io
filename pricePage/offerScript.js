//Array di Servizi da cui prendere i dati
const services = [
    {
        title: "Basic website",
        text:"Choose a basic site from our templates",
        image:"../firstStar.svg",

        barValue:5,
        choosen:true
    },{
        title: "Customize",
        text:"Customize your old webSite or the basic one",
        image:"../gradientinkspot.svg",

        barValue:15,
        choosen:false
    },{
        title: "Copywriting",
        text:"Design a logo, style your coherent way to your customers",
        image:"../CCLogoSVG.svg",

        barValue:10,
        choosen:false
    }
]

//il nodo del DOM a cui appendere i dati una volta rielaborati in HTML
//avrei potuto semplicemente chiamare document.getelement nel parametro della funzione CreateAndAppendServix
place = document.getElementById("servicesList");

//Chiamata alla funzione che elabora ed appende
CreateAndAppendServix(place, services);

//
function CreateAndAppendServix(place, services){

    for (const serv of services) {
        //console.log(serv.title);
        //CREAZIONE DELL'ELEMENTO
        let element = document.createElement("div");
        element.innerHTML = 
        `<div class="serviceContainer d-flex">
            <div class="serviceText">
                <h1>${serv.title}</h1>
                <p>${serv.text}</p>
            </div>
            <div class="serviceImage">
                <img src="${serv.image}" alt="explicative image">
            </div>
        </div>`;
        //console.log(element); 

        //APPENDERE L'ELEMENTO
        place.appendChild(element);
    }

}

