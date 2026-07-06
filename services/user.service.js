import db from "../config/firestore.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

export async function getUser(uid) {

    const documento = await getDoc(doc(db, "users", uid));

    if (!documento.exists()) {

        return null;

    }

    return documento.data();

}