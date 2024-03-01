function cifradoCesar(texto, desplazamiento) {
    const alfabeto = '!#$%&()*+,-./:;<>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_abcdefghijklmnopqrstuvwxyz{|}éÉáíóúñÑ¿ÁÍÓÚ0123456789';
    let resultado = '';

    // Ajustar el desplazamiento para casos negativos y positivos
    desplazamiento = (desplazamiento % alfabeto.length + alfabeto.length) % alfabeto.length;

    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        let indiceActual = alfabeto.indexOf(caracter);

        if (indiceActual !== -1) { // Si el caracter está en el alfabeto
            let indiceCifrado = (indiceActual + desplazamiento) % alfabeto.length;
            let caracterCifrado = alfabeto[indiceCifrado];
            resultado += caracterCifrado;
        } else {
            // Añadir el caracter tal cual si no está en el alfabeto
            resultado += caracter;
        }
    }
    return resultado;
}

function encryptText() {
    var inputText = document.getElementById("inputText").value;
    var modulo = parseInt(document.getElementById("modulo").value, 10);
    var encryptedText = cifradoCesar(inputText, modulo);
    document.getElementById("result").textContent = encryptedText;
}

function decryptText() {
    var inputText = document.getElementById("inputText").value;
    var modulo = parseInt(document.getElementById("modulo").value, 10);
    var decryptedText = cifradoCesar(inputText, -modulo);
    document.getElementById("result").textContent = decryptedText;
}
