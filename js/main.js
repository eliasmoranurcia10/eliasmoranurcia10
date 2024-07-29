
let  enlacewsp= document.getElementById("btnEnviarmensaje");
let  enlacewsp2= document.getElementById("btnEnviarmensaje2");


function ftnEnviarMensajeWsp(){
    let numero = 51938724975;
    let textoEnvio = "Buen día, vengo desde su página web, solicito información sobre sus servicios de Desarrollo de Software.";
    
    let winEnvio = window.open(`https://wa.me/${numero}?text=${textoEnvio}`,'_blank');
}

enlacewsp.onclick = function() {
    ftnEnviarMensajeWsp();
}

enlacewsp2.onclick = function() {
    ftnEnviarMensajeWsp();
}

