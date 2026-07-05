import app from "./firebase-config.js";

import {
  getAuth,
  FacebookAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const auth = getAuth(app);

const provider = new FacebookAuthProvider();

/**
 * Login com Facebook
 */
export async function loginFacebook() {
  try {

    const result = await signInWithPopup(auth, provider);

    console.log("Login realizado!");

    return result.user;

  } catch (error) {

    console.error(error);

    throw error;

  }
}

/**
 * Logout
 */
export async function logoutFacebook() {

  await signOut(auth);

}

/**
 * Observa alterações de sessão
 */
export function observarAutenticacao(callback){

    onAuthStateChanged(auth, callback);

}