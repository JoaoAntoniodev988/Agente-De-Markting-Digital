import app from "./firebase-config.js";

import {
  getAuth,
  FacebookAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const auth = getAuth(app);
const provider = new FacebookAuthProvider();

export async function loginFacebook() {
  try {
    const result = await signInWithPopup(auth, provider);

    console.log("Login efetuado com sucesso!");
    console.log(result.user);

    return result.user;

  } catch (error) {
    console.error("Erro no login:", error);
    throw error;
  }
}