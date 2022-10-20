import { getProducts } from "../../localStorage/__db.js";

export const showProducts = () => {
    const product=getProducts();
    const $section=document.querySelector('[data-section="starwars"]');
    const fragment=document.createDocumentFragment();

    product.forEach(element => {
        const $div=document.createElement("div");
        const $img=document.createElement("img");
        const $labelProductName=document.createElement("label");
        const $labelProductPrice=document.createElement("label")
        const $a=document.createElement("a");

        $img.src="img/products/product.png";
        $div.classList.add("galery__container");
        $labelProductPrice.classList.add("product__price");
        $a.classList.add("show__product--link");

        $div.appendChild($img);
        $labelProductName.innerText=element.name;
        $div.appendChild($labelProductName);
        $labelProductPrice.innerText=element.price;
        $div.appendChild($labelProductPrice);
        $div.appendChild($a);

        fragment.appendChild($div);
    });
    $section.appendChild(fragment);
}