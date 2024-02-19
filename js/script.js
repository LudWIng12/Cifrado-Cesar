function cifradoCesar(texto, desplazamiento) {
    const alfabeto = 'abcdefghijklmnñopqrstuvwxyz';
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        if (caracter.match(/[a-zñ]/i)) {
            const esMayuscula = caracter === caracter.toUpperCase();
            let indiceActual = alfabeto.indexOf(caracter.toLowerCase());

            if (indiceActual !== -1) { // Si el caracter está en el alfabeto
                let indiceCifrado = (indiceActual + desplazamiento) % alfabeto.length;
                let caracterCifrado = alfabeto[indiceCifrado];
                resultado += esMayuscula ? caracterCifrado.toUpperCase() : caracterCifrado;
            } else {
                resultado += caracter;
            }
        } else {
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
