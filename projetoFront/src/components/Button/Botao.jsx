import { Button } from "primereact/button";
import './Botao.scss'

function Botao() {
  return (
    <div className="main">
    <div className="card flex justify-content-center">
      <Button
        label="Cadastre-se"
        link
        onClick={() => window.open("https://react.dev", "_blank")}
      />
      <a
        href="https://react.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="p-button font-bold"
      >
        Entrar
      </a>
    </div>
    </div>
  );
}

export default Botao;
