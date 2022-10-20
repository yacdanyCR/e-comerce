import { ValidateLogin } from "./login/validatingLogin.js";

export const inputType = (input) => {
    const inputType = input.dataset.type;
    if (inputType) {
        validators[inputType](input);
    }
}

export const typeErrors = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
    "tooShort"
];

export const errorsMessages = {
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

const validators = {
    login: (input) => ValidateLogin(input)
}