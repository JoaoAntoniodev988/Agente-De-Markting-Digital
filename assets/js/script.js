import { loginFacebook } from "../../config/firebase-auth.js";

const botaoConectar = document.getElementById("btn-facebook-connect");

botaoConectar.addEventListener("click", async () => {

    botaoConectar.disabled = true;
    botaoConectar.innerHTML = "Conectando...";

    try{

        await loginFacebook();

        window.location.href = "pages/painel.html";

    }catch(error){

        alert("Não foi possível entrar com o Facebook.");

        botaoConectar.disabled = false;
        botaoConectar.innerHTML = "Conectar com Facebook";

    }

});