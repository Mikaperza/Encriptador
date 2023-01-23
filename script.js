const textArea= document.querySelector(".text-area");
const mensaje =document.querySelector(".mensaje");


function btnencriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = " ";
    mensaje.style.backgroundImage ="none"
}

function encriptar(mensajeEncriptar){
    let llaveMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensajeEncriptar = mensajeEncriptar.toLowerCase();

    for(let i = 0; i < llaveMatriz.length; i++){
        if(mensajeEncriptar.includes(llaveMatriz[i][0])){
            mensajeEncriptar = mensajeEncriptar.replaceAll(llaveMatriz[i][0],llaveMatriz[i][1])    
        }
    }
    return mensajeEncriptar
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = " ";
    }

function desencriptar(mensanjeDesencriptado){
    let llaveClave =[["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    mensanjeDesencriptado = mensanjeDesencriptado.toLowerCase()

    for(let i = 0; i < llaveClave.length; i++){
        if(mensanjeDesencriptado.includes(llaveClave[i][0])){
            mensanjeDesencriptado = mensanjeDesencriptado.replaceAll(llaveClave[i][0], llaveClave[i][1])    
        }
    }
    return mensanjeDesencriptado
}

function btnCopiar() {
    var textoEncriptado = document.getElementById("mensaje.value");
  navigator.clipboard.writeText(mensaje.value);
    alert("texto copiado: " + mensaje.value);
  }