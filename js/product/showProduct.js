import { getProducts } from "../../localStorage/localStorage.js";

export const showProducts = () => {
    if(getProducts() === null) return null;
    const product = getProducts();
    const $section = document.querySelector('[data-section="starwars"]');
    const fragment = document.createDocumentFragment();

    product.forEach(element => {
        const $div = document.createElement("div");
        const $img = document.createElement("img");
        const $labelProductName = document.createElement("label");
        const $labelProductPrice = document.createElement("label")
        const $a = document.createElement("a");

        $img.src = element.file;
        $div.classList.add("galery__container");
        $labelProductPrice.classList.add("product__price");
        $a.classList.add("show__product--link");
        $a.href="#";
        $a.innerText="Ver Producto";

        $div.appendChild($img);
        $labelProductName.innerText = element.name;
        $div.appendChild($labelProductName);
        $labelProductPrice.innerText = element.price;
        $div.appendChild($labelProductPrice);
        $div.appendChild($a);

        fragment.appendChild($div);
    });
    $section.appendChild(fragment);
}