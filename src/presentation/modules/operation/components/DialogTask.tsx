import {Button, Dialog, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import {Form, Formik, FormikValues} from "formik";
import React from "react";
import {TaskValidation} from "../../../../infraestructure/validators";
import {getTokenFromSessionStorage, useTasksStore} from "../../../../stores";

interface Props {
    open: boolean;
    isCreate: boolean;

    handleClose: () => void;
}

export const DialogTask = (
    {
        open,
        isCreate,

        handleClose
    }: Props) => {
    const setTask = useTasksStore(state => state.setTask);
    const createTask = useTasksStore(state => state.createTask);

    const tokenStorage = getTokenFromSessionStorage();

    const handleFormChange = (values: FormikValues) => {
        setTask({
            user_email: tokenStorage.email,
            title: values.title,
            description: values.description
        })
    };

    const handleSubmit = async () => {
        await createTask();
        handleClose();
    }

    return (
        <Dialog open={open}>
            <DialogTitle>{isCreate ? 'Nueva ' : 'Detalles de '}Tarea</DialogTitle>
            <DialogContent>

                <Formik
                    validationSchema={TaskValidation}
                    initialValues={{
                        title: '',
                        description: ''
                    }} onSubmit={handleSubmit}
                    validate={(values) => handleFormChange(values)}>
                    {
                        ({handleChange, handleBlur, values, errors, touched, isValid, dirty}) => (
                            <Form>
                                <Stack spacing={2} sx={{
                                    py: '1rem'
                                }}>
                                    <TextField label='Titulo'
                                               onBlur={handleBlur}
                                               onChange={handleChange}
                                               value={values.title}
                                               name="title"
                                               error={touched.title && Boolean(errors.title)}
                                               helperText={touched.title && typeof errors.title === 'string' ? errors.title : undefined}/>

                                    <TextField label='Descripción'
                                               onBlur={handleBlur}
                                               onChange={handleChange}
                                               value={values.description}
                                               name="description"
                                               error={touched.description && Boolean(errors.description)}
                                               helperText={touched.description && typeof errors.description === 'string' ? errors.description : undefined}/>
                                </Stack>
                                <Stack spacing={2} direction="row">
                                    <Button onClick={handleClose} variant="text" className="btn-cancel">Cancelar</Button>
                                    <Button type="submit" disabled={!isValid || !dirty} variant="contained">Guardar</Button>

                                </Stack>
                            </Form>
                        )
                    }
                </Formik>

            </DialogContent>
        </Dialog>
    );
}
