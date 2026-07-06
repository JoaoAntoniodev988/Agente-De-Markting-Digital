import app from "./firebase-config.js";

import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const db = getFirestore(app);

export async function salvarUtilizador(user) {

    await setDoc(
        doc(db, "users", user.uid),
        {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            provider: "facebook",
            createdAt: serverTimestamp(),
            lastLogin: serverTimestamp()
        },
        { merge: true }
    );

}

export default db;