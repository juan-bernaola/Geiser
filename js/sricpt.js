document.getElementById("captcha").innerHTML = generarCaptcha();
document.getElementById("generar_captcha").addEventListener("click", generarNuevoCaptcha);

function generarCaptcha() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        captcha += caracteres.charAt(indice);
    }
    return captcha;
}

function generarNuevoCaptcha() {
    document.getElementById("captcha").innerHTML = generarCaptcha();
}

let formulario = document.getElementById("formulario")
formulario.addEventListener("submit", enviarDatos);

function enviarDatos(e) {
    e.preventDefault()
    let form = new FormData(formulario)
    let captchaIngresado = form.get("captcha_input")
    const captchaGenerado = document.getElementById("captcha").innerHTML;

    if (captchaIngresado !== captchaGenerado) {
        document.getElementById("captcha_input").value = ""
        document.getElementById("captcha").innerHTML = generarCaptcha();
        document.getElementById("err").innerHTML = "Error de captcha";
    } else {
        window.location.href = "index.html";
    }
}