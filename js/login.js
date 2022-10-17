export const authLogin=({email,password})=>{
    const localUser=JSON.parse(localStorage.getItem("User"));
    if((localUser.email === email.value) && (localUser.password) === password.value){
        window.location.href="../addProduct.html";
    }
}