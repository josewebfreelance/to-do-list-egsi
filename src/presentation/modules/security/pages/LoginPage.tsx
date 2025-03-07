import Grid from "@mui/material/Grid2";
import {Button, Card, Container, Stack, TextField, Typography} from "@mui/material";
import {Form, Formik, FormikValues} from "formik";
import {useAuthenticationStore} from "../../../../stores";
import React from "react";
import {useNavigate} from "react-router-dom";
import {LoginValidation} from "../../../../infraestructure/validators";

export const LoginPage = () => {
    const setEmail = useAuthenticationStore(state => state.setEmail);
    const login = useAuthenticationStore(state => state.login);
    const navigate = useNavigate();

    const handleFormChange = (values: FormikValues) => {
        setEmail(values.email);
    }

    const handleLogin = async () => {
        await login();
        navigate('/tasks');
    }

    return (
        <Grid className="login-page" container sx={{flexGrow: 1}}>
            <Grid size={{
                xs: 12, lg: 6
            }} className="login-page__form-container">
                <Container maxWidth="xs">
                    <span className="logo"></span>
                    <Typography variant="h4" gutterBottom>Acceda a su cuenta</Typography>

                    <Card variant="elevation" className="card">
                        <Formik
                            validationSchema={LoginValidation}
                            initialValues={{
                                email: ''
                            }}
                            onSubmit={handleLogin}
                            validate={(values) => handleFormChange(values)}>
                            {
                                ({handleChange, handleBlur, values, errors, touched, isValid, dirty}) => (
                                    <Form>
                                        <Stack spacing={2}>
                                            <TextField
                                                name={'email'}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.email}
                                                fullWidth required label="Email"
                                                error={touched.email && Boolean(errors.email)}
                                                helperText={touched.email && typeof errors.email === 'string' ? errors.email : undefined}
                                            />

                                            <Button
                                                type="submit"
                                                disabled={!isValid || !dirty}
                                                variant="contained" size="large">CONTINUAR</Button>
                                        </Stack>
                                    </Form>
                                )
                            }

                        </Formik>
                    </Card>
                </Container>
            </Grid>

            <Grid size={6} className="login-page__banner">
                <Stack className="text">
                    <Typography variant="h1">Bienvenido!</Typography>
                    <Typography variant="h6" className="sub-title">Inicia sesión y sigue gestionando tus
                        tareas.</Typography>
                </Stack>
                <div className="image"></div>
            </Grid>
        </Grid>
    );
}
