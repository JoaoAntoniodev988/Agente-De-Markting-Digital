import { loginFacebook } from "../../config/firebase-auth.js";

const botaoConectar = document.getElementById('btn-facebook-connect');

botaoConectar.addEventListener('click', () => {
  loginFacebook();
});