export const addProduct = () => {
    const name = document.querySelector('[data-product="name"]');
    const price = document.querySelector('[data-product="price"]');
    const description = document.querySelector('[data-product="description"]');

    if (localStorage.getItem("Product") === null) {
        const objProduct = [{
            name: name.value,
            price: price.value,
            description: description.value
        }];
        localStorage.setItem("Product", JSON.stringify(objProduct));
    } else {
        const getProducts = JSON.parse(localStorage.getItem("Product"));
        const newProduct = {
            name: name.value,
            price: price.value,
            description: description.value
        }
        getProducts.push(newProduct);
        localStorage.setItem("Product", JSON.stringify(getProducts));
    }
}