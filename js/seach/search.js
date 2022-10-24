import { getProducts } from "../../localStorage/localStorage.js";

const $search_Input = document.querySelector('[data-input="search"]');
const removingElements = document.querySelectorAll('.galeria__section');

$search_Input.addEventListener("change", (e) => {
    removingElements.forEach(element => {
        element.remove();
    });
    productFindit(e.target.value)
});

const productFindit = (product) => {
    const products = getProducts();
    const allProductFindit = products.filter((el) => el.name.match(product));
    showProductsFindit(allProductFindit);
}

const showProductsFindit = (product) => {
    let $section = document.querySelector(`[data-list="search_Result"]`);
    const fragment = document.createDocumentFragment();

    product.forEach(element => {
        const $div = document.createElement("div");
        const $img = document.createElement("img");
        const $labelProductName = document.createElement("label");
        const $labelProductPrice = document.createElement("label")
        const $a = document.createElement("a");

        $img.src = element.file;
        $div.classList.add("galery__container");
        $div.setAttribute('data-id', element.id);
        $labelProductPrice.classList.add("product__price");
        $a.classList.add("show__product--link");
        $a.href = `showProduct.html`;
        $a.innerText = "Ver Producto";

        $div.appendChild($img);
        $labelProductName.innerText = element.name;
        $div.appendChild($labelProductName);
        $labelProductPrice.innerText = element.price;
        $div.appendChild($labelProductPrice);
        $div.appendChild($a);
        fragment.append($div);
    });
    $section.append(fragment);
}