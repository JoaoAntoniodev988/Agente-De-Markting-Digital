const nome = document.getElementById("user-name");
const email = document.getElementById("user-email");
const foto = document.getElementById("user-photo");

const btnLogout = document.getElementById("btn-logout");

const user = await getCurrentUser();

if (!user) {

    window.location.href = "../index.html";

} else {

    nome.textContent = user.displayName;

    email.textContent = user.email;

    foto.src = user.photoURL;

}

btnLogout.addEventListener("click", async () => {

    await logout();

    window.location.href = "../index.html";

});