import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#1c1d39"
        },
        background: {
            default: '#fefefe', // define el color de fondo predeterminado
            paper: '#ffffff', // define el color de fondo del papel (como un modal)
        },
    },
    typography: {
        button: {
            display: 'block', textTransform: 'capitalize', fontWeight: 'bold'
        },
        variants:
        {

        }
    }
})