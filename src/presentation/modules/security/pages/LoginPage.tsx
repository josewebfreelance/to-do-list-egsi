import Grid from "@mui/material/Grid2";

export const LoginPage = () => {
    return (
        <Grid className="login-page" container sx={{ flexGrow: 1 }}>
            <Grid size={8}>
                <div className="login-page__banner"></div>
            </Grid>

            <Grid size={4}>
                Login
            </Grid>
        </Grid>
    );
}
