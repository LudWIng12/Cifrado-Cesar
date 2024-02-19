function cifradoCesar(texto, desplazamiento) {
    const alfabeto = 'abcdefghijklmnñopqrstuvwxyz';
    let resultado = '';

    // Ajustar el desplazamiento para casos negativos
    desplazamiento = (desplazamiento % alfabeto.length + alfabeto.length) % alfabeto.length;

    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        // Checar si el caracter es una letra y está en el alfabeto (ignorando mayúsculas/minúsculas)
        if (caracter.toLowerCase() !== caracter.toUpperCase()) {
            const esMayuscula = caracter === caracter.toUpperCase();
            let indiceActual = alfabeto.indexOf(caracter.toLowerCase());

            if (indiceActual !== -1) { // Si el caracter está en el alfabeto
                let indiceCifrado = (indiceActual + desplazamiento) % alfabeto.length;
                let caracterCifrado = alfabeto[indiceCifrado];
                resultado += esMayuscula ? caracterCifrado.toUpperCase() : caracterCifrado;
            } else {
                // Añadir el caracter tal cual si no está en el alfabeto
                resultado += caracter;
            }
        } else {
            // Añadir el caracter tal cual si no es una letra
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
