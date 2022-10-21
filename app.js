import { authLogin, changinLoginButtonState } from "./js/login/login.js";
import { addProduct, convertFileToBase64 } from "./js/product/addProduct.js";
import { getProductInformation, showProductDescription } from "./js/product/getProductInformation.js";
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
const $product__information_page = document.querySelector('.product__information') || null;
const $loginButton = document.querySelector('[data-button="login"]') || null;

document.addEventListener("DOMContentLoaded", () => {
    showProducts();
    getProductInformation();
});

if ((JSON.stringify(sessionStorage.getItem("login") === true)) && ($loginButton !== null)) {
    changinLoginButtonState();
}

$input.forEach(element => {
    element.addEventListener("blur", (e) => {
        inputType(e.target);
    });
});

if ($product__information_page !== null) {
    document.addEventListener("DOMContentLoaded", showProductDescription);
}

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