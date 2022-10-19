export const inputType = (input) => {
    const inputType = input.dataset.type;
    if (inputType) {
        validators[inputType](input);
    }
}

const typeErrors = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
    "tooShort"
];

const errorsMessages = {
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacío",
        patternMismatch: "Al menos 3 caracteres",
        tooShort: "El campo contraseña debe tener al menos 3 caracteres"
    },
};

const ValidateLogin = (input) => {
    console.log(input.validity)
    let errorMessage = "";
    const inputSection = input.dataset.login;
    typeErrors.forEach(error => {
        if (input.validity[error]) {
            errorMessage = errorsMessages[inputSection][error];
        }
    });
    showLoginmessages(input, errorMessage);
}

const showLoginmessages = (input, errorMessages) => {
    input.nextElementSibling.innerText = errorMessages;
    input.nextElementSibling.classList.remove('login--correct');
    input.nextElementSibling.classList.add('login--error');
}

const validators = {
    login: (input) => ValidateLogin(input)
}