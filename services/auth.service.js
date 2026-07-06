import app from "../config/firebase-config.js";

import {
    getAuth,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const auth = getAuth(app);

/**
 * Obtém o utilizador autenticado.
 */
export function getCurrentUser() {

    return new Promise((resolve) => {

        onAuthStateChanged(auth, (user) => {

            resolve(user);

        });

    });

}

/**
 * Termina a sessão do utilizador.
 */
export async function logout() {

    await signOut(auth);

}