export const authLogin = ({ email, password }) => {
    const localUser = JSON.parse(localStorage.getItem("User"));
    if ((localUser.email === email.value) && (localUser.password) === password.value) {
        sessionStorage.setItem("login", true);
        window.location.href = "addProduct.html";
    } else {
        alert("Correo o contraseña incorrecta..!!!");
    }
}

export const changinLoginButtonState = () => {
    const $loginButton = document.querySelector('[data-button="login"]');
    $loginButton.href = "addProduct.html";
    $loginButton.innerText = "Menú Administrador";
} 