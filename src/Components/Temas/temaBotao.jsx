import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#29B473', //cor do botão
            contrastText: 'black', //cor do texto
        },
        secondary:{
            main: '#fff',
            contrastText: '#504908', 
        },

    },
    typography: {
        button: {
            textTransform: "none",  //removendo o upperCase dos botões
            fontWeight: "bold",     //negrito
            border: "none",         //removendo as bordas
            width: "150px"          //largura
        }
    },
})

export default theme