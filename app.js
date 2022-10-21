import { authLogin } from "./js/login/login.js";
import { addProduct, convertFileToBase64 } from "./js/product/addProduct.js";
import { getProductInformation } from "./js/product/getProductInformation.js";
import { showProducts } from "./js/product/showProduct.js";
import { inputType } from "./js/validations.js";

const user = {
    email: "admin@hotmail.com",
    password: "123"
}

localStorage.setItem("User", JSON.stringify(user));

const $logUser = document.querySelector('[data-login="save"]') || null;
const $saveProduct = document.querySelector('[data-product="save"]') || null;
const $input = document.querySelectorAll('input');

document.addEventListener("DOMContentLoaded", () => {
    showProducts();
    console.log(getProductInformation());
});

$input.forEach(element => {
    element.addEventListener("blur", (e) => {
        inputType(e.target);
    });
});

if ($saveProduct !== null) {
    const $fileBase64 = convertFileToBase64();
    console.log($fileBase64)
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