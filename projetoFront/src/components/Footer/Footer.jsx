import Icon from "awesome-react-icons/lib/cjs/Icon";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss'
const Footer = () => {
    return (
        <>
        <div className='body'>
    <footer className="footer-site">
      <div className="container">
        <div className="row">
          <div className="col coluna">
            <img src="https://raw.githubusercontent.com/gtech-02/grupo-05/23b9d6b09f82ee9cc8f0e4b69f67d873845d8cb3/images/logo-footer.svg" alt="" />
          </div>
          <div className="col">
            <h2 className="titulo-footer">Informação</h2>
          </div>
          <div className="col">
            <h2 className="titulo-footer">Categorias</h2>
          </div>
          <div className="col">
            <h2 className="titulo-footer">Contato</h2>
          </div>
        </div>
        <div className="row">
          <div className="col coluna">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="icones-footer">
              <i className=""><Icon name="facebook"/></i>
              <i className=""><Icon name="instagram"/></i>
              <i className=""><Icon name="twitter"/></i>
            </div>
          </div>
          <div className="col">
            <p>Sobre Drip Store</p>
            <p>Segurança</p>
            <p>Wishilist</p>
            <p>Blog</p>
            <p>Trabalhe conosco</p>
            <p>Meus pedidos</p>
          </div>
          <div className="col">
            <p>Camisetas</p>
            <p>Calças</p>
            <p>Bonés</p>
            <p>Headphones</p>
            <p>Tênis</p>
          </div>
          <div className="col">
            <p>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </p>
            <p>(85) 3051-3411</p>
          </div>
        </div>
      </div>
      <hr />
      <p className="copy-footer">&copy; 2024 Digital College</p>
    </footer>
    </div>
        </>
    )
}

export default Footer