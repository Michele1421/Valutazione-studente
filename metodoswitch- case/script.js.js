
let temperatura= parseFloat(prompt("Inserire la temperatura")); ; 

switch (true) {
    case (temperatura <20 ):
        console.log("non ci sono più le mezze stagioni");
        break;
    case (temperatura >= 30 ):
        console.log("lu mare, lu sole, lu vientu");
        break;
    case (temperatura <30):
        console.log("mi dia una peroni sudata");
        break;
    case (temperatura <0):
        console.log("non è tanto il freddo quanto l'umidità");
        break;
    case (temperatura <-10):
        console.log("copriti..ancora ti fa freddo");
        break;
   
}    

