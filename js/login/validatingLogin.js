import { typeErrors, errorsMessages } from "../validations.js";

export const ValidateLogin = (input) => {
    let errorMessage = "";
    const inputSection = input.dataset.login;
    typeErrors.forEach(error => {
        if (input.validity[error]) {
            errorMessage = errorsMessages[inputSection][error];
        }
    });
    showLoginmessages(input, errorMessage);
}

export const showLoginmessages = (input, errorMessages) => {
    if (!input.validity.valid) {
        input.nextElementSibling.innerText = errorMessages;
        input.nextElementSibling.classList.remove('login--correct');
        input.nextElementSibling.classList.add('login--error');
    }
}