import { loginFacebook } from "../../config/firebase-auth.js";
import { salvarUtilizador } from "../../config/firestore.js";

const botaoConectar = document.getElementById("btn-facebook-connect");

botaoConectar.addEventListener("click", async () => {

    botaoConectar.disabled = true;
    botaoConectar.innerHTML = "Conectando...";

    try {

        const user = await loginFacebook();

        await salvarUtilizador(user);

        window.location.href = "pages/painel.html";

    } catch (error) {
    console.error(error);

    alert(error.message);

    botaoConectar.disabled = false;
    botaoConectar.innerHTML = "Conectar com Facebook";
}

});