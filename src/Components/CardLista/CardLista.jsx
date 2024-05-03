import styles from "./cardLista.module.css"

import { Button } from '@mui/material'
import theme from '../../Components/Temas/temaBotao'
import { ThemeProvider } from '@mui/material/styles'

function CardLista({dadosLista, onClickEditar, onClickExcluir}){
    return(
        <div className={styles.cardContainer}>
            <div className={styles.divTitulo}>
                <h3>{dadosLista.nomeLocal}</h3>
                <p>{dadosLista.cidadeLocal}/{dadosLista.estadoLocal}</p>
                <p>Por: {dadosLista.idUsuario}</p>
            </div>

            <hr />
            <hr />
            
            <div className={styles.divConteudo}>
                <p className={styles.descricao}>{dadosLista.descricao}</p>
                <p>Sugestões de atividades físicas nesse local:</p>
                <ul type={"circle"}>
                    {dadosLista.tipo.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className={styles.divFlex}>
                    <img src="./src/assets/Logo/local.png" alt="imagem-ilustrativa"  height={"50px"}/>
                    <div className={styles.divGrid}>
                        <p className={styles.rua}>Rua: {dadosLista.ruaLocal}</p>
                        <p className={styles.cep}>CEP: {dadosLista.cepLocal}</p>
                        <p className={styles.bairro}>Bairro: {dadosLista.bairroLocal}</p>
                        <p className={styles.num}>Número: {dadosLista.numeroLocal}</p>
                        <p className={styles.compl}>Complemento: {dadosLista.complementoLocal}</p>
                    </div>
                </div>

                <div className={styles.divBotoes}>
                    <ThemeProvider theme={theme}>
                        <Button
                            onClick={onClickEditar}
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{"mt":2, "mr":2}}>
                                Editar
                        </Button>
                    </ThemeProvider>
                    <ThemeProvider theme={theme}>
                        <Button
                            onClick={onClickExcluir}
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{"mt":2}}>
                                Excluir
                        </Button>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    )
}
export default CardLista