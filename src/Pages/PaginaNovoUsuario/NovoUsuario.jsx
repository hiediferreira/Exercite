import NavbarInicio from "../../Components/Navbar/NavbarInicio"
function NovoUsuario(){
    
    return(
        <div>
            <NavbarInicio/>

            <form >
                <label htmlFor="">Nome</label> <br />
                <input type="text" placeholder="Informe seu nome"/>
                <br />
                <label htmlFor="">CPF</label> <br />
                <input type="text" placeholder="Informe seu CPF"/>
                <br />
                <label htmlFor="">Data Nascimento</label> <br />
                <input type="date" />
                <br />
                <label htmlFor="">E-mail</label> <br />
                <input type="email" placeholder="Informe seu e-mail"/>
                <br />
                <label htmlFor="">Senha</label> <br />
                <input type="password" placeholder="Cadastre uma senha"/>
                <br />
                <label htmlFor="">CEP</label> <br />
                <input type="text" placeholder="Digite seu CEP" maxLength={8} />
                <br />
                <label htmlFor="">Rua</label> <br />
                <input type="text" placeholder="Logradouro"/>
                <br />
                <label htmlFor="">Bairro</label> <br />
                <input type="text" placeholder="Bairro"/>
                <br />
                <label htmlFor="">Número</label> <br />
                <input type="number" placeholder="Número"/>
                <br />
                <label htmlFor="">Complemento</label> <br />
                <input type="text" placeholder="Complemento (se houver)"/>
                <br />
                <label htmlFor="">Cidade</label> <br />
                <input type="text" placeholder="Cidade"/>
                <br />
                <label htmlFor="">Estado</label> <br />
                <input type="text" placeholder="Estado"/>
                <br />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default NovoUsuario