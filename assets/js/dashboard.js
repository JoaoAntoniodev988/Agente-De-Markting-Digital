import app from "../../config/firebase-config.js";

import {
    getAuth,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const auth = getAuth(app);

const nome = document.getElementById("user-name");
const email = document.getElementById("user-email");
const foto = document.getElementById("user-photo");
const logout = document.getElementById("btn-logout");

onAuthStateChanged(auth, (user) => {

    if (!user) {

        window.location.href = "../index.html";
        return;

    }

    nome.textContent = user.displayName;
    email.textContent = user.email;
    foto.src = user.photoURL;

});

logout.addEventListener("click", async () => {

    await signOut(auth);

    window.location.href = "../index.html";

});