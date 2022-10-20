import { authLogin } from "./js/login/login.js";
import { inputType } from "./js/validations.js";

const user = {
    email: "admin@hotmail.com",
    password: "123"
}
localStorage.setItem("User", JSON.stringify(user));

const $logUser = document.querySelector('[data-login="save"]');
const $input = document.querySelectorAll('input');

$input.forEach(element =>{
    element.addEventListener("blur",(e)=>{
        inputType(e.target);
    })
})

$logUser.addEventListener("click", (e) => {
    e.preventDefault();

    const objUser = {
        email: document.querySelector('[data-login="email"') || "",
        password: document.querySelector('[data-login="password"') || "",
    }

    authLogin(objUser);
})