import './Cadastro.scss'
export default function Login() {
    function alerta(){
        alert("Usuário Logado")
    }
  return (
    <>
      <div className="containerCadastro">
        <div className="contentCadastro">
          <form className="formulario" action="">
            <h2 className="titleForm">Login</h2>
            <label htmlFor="email">Email </label>
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu email:"
            />
            <label htmlFor="senha">Senha</label>
            <input
              className="input"
              type="password"
              name="senha"
              id="senha"
              placeholder="Digite sua senha"
            />
            <div className="btnForm">
              <button onClick={alerta} className="botao" type="submit">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
