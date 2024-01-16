'use client'

import { deepPurple, indigo } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: deepPurple,
        secondary: indigo
    }
})

export default function Theme(props) {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}