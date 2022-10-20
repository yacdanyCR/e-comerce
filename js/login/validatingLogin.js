import { typeErrors, errorsMessages,showingErrorMessages } from "../validations.js";

export const ValidateLogin = (input) => {
    let errorMessage = "";
    const inputSection = input.dataset.login;
    typeErrors.forEach(error => {
        if (input.validity[error]) {
            errorMessage = errorsMessages[inputSection][error];
        }
    });
    showingErrorMessages(input, errorMessage);
}