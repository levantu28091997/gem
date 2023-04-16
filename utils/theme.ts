import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#fcba03',
        },
    },
    typography: {
        fontFamily: '\'Barlow\', sans-serif',
        h1: {
            fontSize: 36,
            fontWeight: 800
        },
        h2: {
            fontSize: 18,
            fontWeight: 600
        },
        body1: {
            fontSize: 16,
            fontWeight: 500
        }
    }
})