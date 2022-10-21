export const getProductInformation = () => {
    const $a = document.querySelectorAll("a") || null;
    $a.forEach(element => {
        element.addEventListener("click", (e) => {
            sessionStorage.setItem("ProductId", e.target.parentNode.dataset.id);
        });
    });
}

export const showProductDescription = () => {
    const $productName = document.querySelector('[data-product-info="name"]');
    const $productPrice = document.querySelector('[data-product-info="price"]');
    const $productImg = document.querySelector('[data-product-info="img"]');
    const $productDescription=document.querySelector('[data-product-info="description"]');

    const productToFind = sessionStorage.getItem("ProductId");
    const products = JSON.parse(localStorage.getItem("Product"));
    const product=products.find((el)=>el.id === productToFind);

    $productImg.src=product.file;
    $productName.innerText=product.name;
    $productPrice.innerText=product.price;
    $productDescription.innerText=product.description;
}