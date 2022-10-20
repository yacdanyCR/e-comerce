import { getProducts } from "./db/__db.js";
import { authLogin } from "./js/login/login.js";
import { addProduct } from "./js/product/addProduct.js";
import { inputType } from "./js/validations.js";

const user = {
    email: "admin@hotmail.com",
    password: "123"
}
console.log(getProducts())
localStorage.setItem("User", JSON.stringify(user));

const $logUser = document.querySelector('[data-login="save"]') || null;
const $saveProduct = document.querySelector('[data-product="save"]') || null;
const $input = document.querySelectorAll('input');

$input.forEach(element => {
    element.addEventListener("blur", (e) => {
        inputType(e.target);
    })
})

if ($saveProduct !== null) {
    $saveProduct.addEventListener("click", (e) => {
        e.preventDefault();
        addProduct();
    });
}

if ($logUser !== null) {
    $logUser.addEventListener("click", (e) => {
        e.preventDefault();

        const objUser = {
            email: document.querySelector('[data-login="email"') || "",
            password: document.querySelector('[data-login="password"') || "",
        }

        authLogin(objUser);
    });
}