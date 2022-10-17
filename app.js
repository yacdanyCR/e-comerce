import { authLogin } from "./js/login.js";

const $logUser = document.querySelector('[data-login="save"]');
const $input = document.querySelectorAll('input');
const user = {
    email: "admin@hotmail.com",
    password: "123"
}

localStorage.setItem("User", JSON.stringify(user));

$logUser.addEventListener("click", (e) => {
    e.preventDefault();

    const objUser = {
        email: document.querySelector('[data-login="email"') || "",
        password: document.querySelector('[data-login="password"') || "",
    }

    authLogin(objUser)
})