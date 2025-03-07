import * as Yup from 'yup';

export const TaskValidation = Yup.object().shape({
    title: Yup.string()
        .required('El campo es requerido')
        .trim().max(50, 'El máximo de caracteres son 50'),
    description: Yup.string()
        .required('El campo es requerido')
        .trim().max(50, 'El máximo de caracteres son 50'),
});
