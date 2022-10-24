export const getProducts = () => {
    if (localStorage.getItem("Product") !== null) {
        return JSON.parse(localStorage.getItem("Product"));
    }
    return null;
}