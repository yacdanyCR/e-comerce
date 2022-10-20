export const getProducts=()=>{
    if(localStorage.getItem("Product") !== null){
        let products=JSON.parse(localStorage.getItem("Product"));
        return products;
    }
    return null;
}