import Grid from "@mui/material/Grid2";
import {Button, Card, Container, Stack, TextField, Typography} from "@mui/material";

export const LoginPage = () => {
    return (
        <Grid className="login-page" container sx={{ flexGrow: 1 }}>
            <Grid size={6} className="login-page__form-container">
                <Container maxWidth="xs">
                    <span className="logo"></span>
                    <Typography variant="h4" gutterBottom>Acceda a su cuenta</Typography>

                    <Card variant="elevation" className="card">
                        <Stack spacing={2}>
                            <TextField fullWidth required label="Usuario"></TextField>
                            <TextField fullWidth required label="Contraseña"></TextField>

                            <Button variant="contained" size="large">CONTINUAR</Button>
                        </Stack>
                    </Card>
                </Container>
            </Grid>

            <Grid size={6} className="login-page__banner">
                <Stack className="text">
                    <Typography variant="h1" >Bienvenido!</Typography>
                    <Typography variant="h6" className="sub-title">Inicia sesión y sigue gestionando tus tareas.</Typography>
                </Stack>
                <div className="image"></div>
            </Grid>
        </Grid>
    );
}
