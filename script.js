const texto_encriptar = document.querySelector("#texto-a-encriptar");
const campo_mensaje = document.querySelector("#mensaje-desencriptado");

const codigo_secreto = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];

function btn_encriptar() {
    const texto = encriptar(texto_encriptar.value);
    campo_mensaje.value = texto;
}

function encriptar(codigo_sec) {
    for (let index = 0; index < codigo_secreto.length; index++) {
        if (codigo_sec.includes(codigo_secreto[index][0])) {
            codigo_sec = codigo_sec.replaceAll(codigo_secreto[index][0],codigo_secreto[index][1]);
        }
    }
    return codigo_sec;
}

function copiar() {
    texto_encriptar. value = campo_mensaje.value;
    campo_mensaje.value="";
}

function btn_desencriptar() {
    const texto2 = desencriptar(texto_encriptar.value);
    campo_mensaje.value = texto2;
}

function desencriptar(codigo_desc) {
    for (let index = 0; index < codigo_secreto.length; index++) {
        if (codigo_desc.includes(codigo_secreto[index][1])) {
            codigo_desc = codigo_desc.replaceAll(codigo_secreto[index][1],codigo_secreto[index][0]);
        }
    }
    return codigo_desc;
}
