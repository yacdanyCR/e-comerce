const reader = new FileReader();

export const addProduct = () => {
    const name = document.querySelector('[data-product="name"]');
    const price = document.querySelector('[data-product="price"]');
    const description = document.querySelector('[data-product="description"]');

    if (localStorage.getItem("Product") === null) {
        const objProduct = [{
            name: name.value,
            price: price.value,
            description: description.value,
            file: getFileConvertedtoBase64(reader.result)
        }];
        localStorage.setItem("Product", JSON.stringify(objProduct));
    } else {
        const getProducts = JSON.parse(localStorage.getItem("Product"));
        const newProduct = {
            name: name.value,
            price: price.value,
            description: description.value,
            file: getFileConvertedtoBase64(reader.result)
        }
        getProducts.push(newProduct);
        localStorage.setItem("Product", JSON.stringify(getProducts));
    }
}

export const convertFileToBase64 = () => {
    const inputFile = document.querySelector('[data-product="file"]');

    inputFile.addEventListener("change", (e) => {
        const file = inputFile.files[0];

        reader.addEventListener("load", (e) => {
            getFileConvertedtoBase64(reader.result);
        });
        reader.readAsDataURL(file);
    });
}

const getFileConvertedtoBase64 = (reader) => {
    return reader;
}