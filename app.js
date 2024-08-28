let elementoPresentacionTexto;
document.getElementById("botonEncriptar").addEventListener("click", procesarTexto);
document.getElementById("botonDesencriptar").addEventListener("click", procesarTexto);
document.getElementById("presentacionLleno").style.display = "none";
document.getElementById("presentacionVacio").style.display = "block";
document.getElementById("presentacionBotonCopiar").addEventListener("click", copiarTexto);


function procesarTexto(opcionBoton) {
    const texto = document.getElementById("textoOriginal").value;
    let resultado;

    if (texto === "") {
        document.getElementById("presentacionLleno").style.display = "none";
        document.getElementById("presentacionVacio").style.display = "block";
        
    } else {
        // Identifica qué botón fue clicado
        if (opcionBoton.target.id === "botonEncriptar") {
            resultado = encriptarTexto(texto);
        } else if (opcionBoton.target.id === "botonDesencriptar") {
            resultado = desencriptarTexto(texto);
        }
        // Muestra el resultado en la página
        elementoPresentacionTexto = document.getElementById("presentacionTexto");
        elementoPresentacionTexto.innerHTML = resultado;
        
        document.getElementById("presentacionLleno").style.display = "block";
        document.getElementById("presentacionVacio").style.display = "none";

        // Limpia la caja de entrada
        limpiarCaja();
    }
}
document.getElementById('textoOriginal').addEventListener('input', bloqTexto );
function bloqTexto(e) {
    const regex = /^[^0-9A-ZÁÉÍÓÚáéíóú!@#$%^&*()_+\-=\[\]{}´;':"\\|,.<>\/¡¿?]*$/;
    const valorFiltrado = e.target.value.split('').filter(char => regex.test(char)).join('');
    e.target.value = valorFiltrado;
}
function limpiarCaja() {
    document.querySelector('#textoOriginal').value = '';
}

function copiarTexto() {
    navigator.clipboard.writeText(elementoPresentacionTexto.value)
  .then(() => {
      alert('Texto copiado al portapapeles');
  })
  .catch(err => {
      //console.error('Error al copiar: ', err);
  });
}

function copyTx() {
    const textoCopiar = document.querySelector("#outputText");

}

function encriptarTexto(texto) {
    return texto
        .toLowerCase()
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        
}

function desencriptarTexto(texto) {
    return texto
        .toLowerCase()
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}
