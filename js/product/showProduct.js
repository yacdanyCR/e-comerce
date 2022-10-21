import { getProducts } from "../../localStorage/localStorage.js";

export const showProducts = () => {
    if (getProducts() === null) return null;
    const product = getProducts();

    product.forEach(element => {
        cardTemplate(element)
    });
}

const cardTemplate = (element) => {
    let $section = document.querySelector(`[data-section="${element.categorie}"]`);
    const $div = document.createElement("div");
    const $img = document.createElement("img");
    const $labelProductName = document.createElement("label");
    const $labelProductPrice = document.createElement("label")
    const $a = document.createElement("a");

    $img.src = element.file;
    $div.classList.add("galery__container");
    $div.setAttribute('data-id',element.id);
    $labelProductPrice.classList.add("product__price");
    $a.classList.add("show__product--link");
    $a.href = `#`;
    $a.innerText = "Ver Producto";

    $div.appendChild($img);
    $labelProductName.innerText = element.name;
    $div.appendChild($labelProductName);
    $labelProductPrice.innerText = element.price;
    $div.appendChild($labelProductPrice);
    $div.appendChild($a);

    buildDivFragment($section, $div);
}

const buildDivFragment = ($section, $div) => {
    const fragment = document.createDocumentFragment();
    fragment.appendChild($div);
    $section.appendChild(fragment);
}