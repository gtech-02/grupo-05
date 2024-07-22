import Icon from "awesome-react-icons/lib/cjs/Icon";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss'
const Footer = () => {
    return (
        <>
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
            <p>(85) 3051-3411</p>
            <p>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </p>
            <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3545215968225!2d-38.51298212446148!3d-3.732678096241236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7485edb300001%3A0x6782b2efe8bc747b!2sAv.%20Santos%20Dumont%2C%201510%20-%201%20andar%20-%20Aldeota%2C%20Fortaleza%20-%20CE%2C%2060150-161!5e0!3m2!1spt-BR!2sbr!4v1721410253987!5m2!1spt-BR!2sbr" width="300" height="200"  allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
      <hr />
      <p className="copy-footer">&copy; 2024 Digital College</p>
    </footer>
        </>
    )
}

export default Footer