import db from "../config/firestore.js";

import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";


// =========================
// Obter utilizador
// =========================

export async function obterUtilizador(uid) {

    try {

        const documento = await getDoc(doc(db, "users", uid));

        if (!documento.exists()) {

            return null;

        }

        return documento.data();

    } catch (error) {

        console.error("Erro ao obter utilizador:", error);

        throw error;

    }

}



// =========================
// Criar ou atualizar
// =========================

export async function criarOuAtualizarUtilizador(user) {

    try {

        const referencia = doc(db, "users", user.uid);

        const documento = await getDoc(referencia);

        if (!documento.exists()) {

            await setDoc(referencia, {

                uid: user.uid,

                displayName: user.displayName,

                email: user.email,

                photoURL: user.photoURL,

                provider: "facebook",

                saldo: 0,

                plano: "Gratuito",

                empresa: "",

                campanhas: 0,

                paginasFacebook: [],

                instagramAccounts: [],

                configuracoes: {

                    idioma: "pt",

                    notificacoes: true

                },

                createdAt: serverTimestamp(),

                lastLogin: serverTimestamp()

            });

            console.log("Novo utilizador criado.");

        } else {

            await updateDoc(referencia, {

                displayName: user.displayName,

                email: user.email,

                photoURL: user.photoURL,

                lastLogin: serverTimestamp()

            });

            console.log("Utilizador atualizado.");

        }

    } catch (error) {

        console.error("Erro ao guardar utilizador:", error);

        throw error;

    }

}