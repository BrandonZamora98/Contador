var valorContador = 0; //iniciamos nuestra variable en 0

function incrementar(){
    valorContador++; //incrementar de 1 en 1
    document.getElementById("contador").innerHTML = valorContador;
}

function decrementar(){
    valorContador--; //decrementar de 1 en uno
    document.getElementById("contador").innerHTML = valorContador
}

function resetear() {
    valorContador = 0;
    document.getElementById("contador").innerHTML = valorContador;
}