import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#1c1d39"
        },
        secondary: {
            main: "#fefefe"
        },
        customgray: {
            main: "#cdcdcd"
        },
        background: {
            default: '#fefefe', // define el color de fondo predeterminado
            paper: '#ffffff', // define el color de fondo del papel (como un modal)
            counters: '#1c1d39'
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