import * as Yup from 'yup';

export const LoginValidation = Yup.object().shape({
    email: Yup.string()
        .required('El campo es requerido')
        .email('Valor inválido')
        .trim().max(50, 'El máximo de caracteres son 50')
});
