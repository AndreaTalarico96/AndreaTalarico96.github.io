const services = [
    {
        title: "Basic website",
        text:"Choose a basic site from our templates",
        barValue:5,
        choosen:true,
        image:"../firstStar.svg"    
    },{
        title: "Customize",
        text:"Customize your old webSite or the basic one",
        barValue:15,
        choosen:false,
        image:"../gradientinkspot.svg"    
    },{
        title: "Copywriting",
        text:"Design a logo, style your coherent way to your customers",
        barValue:10,
        choosen:false,
        image:"../CCLogoSVG.svg"    
    }
]
place = document.getElementById("servicesList");
CreateAndAppendServix(place, services);

function CreateAndAppendServix(place, services){
    for (const serv of services) {
        console.log(serv.title);
    }
}
