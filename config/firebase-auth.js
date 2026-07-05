import app from "./firebase-config.js";

import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const auth = getAuth(app);
const provider = new FacebookAuthProvider();

// LOGIN FACEBOOK
export async function loginFacebook() {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    console.log("Utilizador logado:", user);

    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "pages/painel.html";

  } catch (error) {
    console.error("Erro no login Facebook:", error);
  }
}

// LOGOUT
export async function logout() {
  await signOut(auth);
  localStorage.removeItem("user");
  window.location.href = "../index.html";
}