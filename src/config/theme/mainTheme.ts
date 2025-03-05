import {createTheme} from '@mui/material';

export const mainTheme = createTheme({
        palette: {
            background: {
                default: 'transparent',
            },
            primary: {
                main: '#01579B',
            },
            error: {
                main: '#EF9A9A'
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        backgroundColor: "palette.primary.main",
                        boxShadow: "0 16px 32px -12px rgba(47, 111, 164, 0.8)",
                        padding: ".6rem 1.4rem",
                        fontSize: "1rem"
                    }
                }
            }
        }
    }
);
