import { criarOuAtualizarUtilizador } from "../services/user.service.js";

export async function loginFacebook() {

    try {

        const result = await signInWithPopup(auth, provider);

        const user = result.user;

        await criarOuAtualizarUtilizador(user);

        console.log("Login efetuado com sucesso!");

        return user;

    } catch (error) {

        console.error("Erro no login:", error);

        throw error;

    }

}