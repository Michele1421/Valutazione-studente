
let voto= 18; 

switch (true) {
    case (voto< 18):
        console.log("voto:insufficiente");
        break;
    case (voto >= 18 && voto < 21):
        console.log("voto:sufficiente");
        break;
    case (voto >= 21 && voto < 24):
        console.log("voto:buono");
        break;
    case (voto >= 24 && voto < 27):
        console.log("voto:distinto");
        break;
    case (voto >= 27 && voto < 30):
        console.log("voto:ottimo");
        break;
    case (voto === 30):
        console.log("voto:eccellente");
        break;
}    

