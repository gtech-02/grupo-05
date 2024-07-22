
import './Cadastro.scss'

export default function Cadastro(){
    function alerta(){
        alert("Usuário Cadastrado")
    }
    return(
        <>
        

        <div className="containerCadastro">
            <div className="contentCadastro">
                <form className="formulario" action="">
                    <h2 className="titleForm">Cadastrar</h2>
                    <label htmlFor="name">Nome </label>
                    <input className="input" type="text" name="name" id="name" placeholder="Digte seu nome:"/>
                    <label htmlFor="email">Email  </label>
                    <input className="input"  type="email" name="email" id="email" placeholder="Digite seu email:"/>
                    <label htmlFor="senha">Senha</label>
                    <input className="input" type="password" name="senha" id="senha" placeholder="Crie uma senha" />
                    <label htmlFor="senha">Confirmar senha </label>
                    <input className="input" type="password" name="senha" id="senha" placeholder="Confirmar Senha" />
                    <div className="btnForm">
                        <button onClick={alerta} className="botao" type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
        
        </>
    )
}