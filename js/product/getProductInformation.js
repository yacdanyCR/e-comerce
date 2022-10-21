export const getProductInformation = () => {
    const $a = document.querySelectorAll("a") || null;
    let productId = null;
    $a.forEach(element => {
        element.addEventListener("click", (e) => {
            productId = e.target.parentNode.dataset.id;
            findLocalStorageElement(productId);
        });
    });
}

const findLocalStorageElement = (productId) => {
    const products=JSON.parse(localStorage.getItem("Product"));

    console.log(products.find((el) => el.id === productId))
}