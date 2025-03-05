import {createTheme} from '@mui/material';
import {esES as coreEsES} from '@mui/material/locale';

export const mainTheme = createTheme({
        palette: {
            background: {
                default: '#fff'
            },
            primary: {
                main: '#173341',
                light: '#F5FEFF',
                dark: '000000'
            },
            error: {
                main: '#EF9A9A'
            }
        },
    }
);
