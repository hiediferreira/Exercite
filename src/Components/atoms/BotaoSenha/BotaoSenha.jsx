import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import {useState} from 'react'

function BotaoSenha(){
    //Criado com base no site do Material UI
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show); 
    //toda vez que clicar o botão recebe o estado oposto

    return(
        <TextField
            variant="standard" 
            color="success"
            label="Senha" 
            placeholder="Digite a senha"

            type={showPassword ? 'text' : 'password'}
            InputProps={{
                endAdornment:(                
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}>                                  
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                )       
            }}
        />
    )
}

export default BotaoSenha