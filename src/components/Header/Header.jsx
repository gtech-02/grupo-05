import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.scss";


export default function Header() {
    return (
    <header>
    <nav className="navbar bg-body-tertiary nav-header">
      <div className="container-fluid">
        <Link to="/home">
        <img className="logo-header" src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/logo-header.svg" />
        </Link>
        <form className="d-flex campo-busca" role="search">
          <input
            id="busca"
            className="form-control me-2"
            type="search"
            placeholder="Pesquisar"
            aria-label="Pesquisar"
          />
          <button className="button-nav" type="submit" >
            <img src="/images/icon-lupa.png" />
          </button>
        </form>

        <div className="d-flex botoes-header" role="search">
          <Link to="/cadastro" id="cad">Cadastre-se</Link>
          <Link to="/login">
          <button className="btn btn-outline-success" type="submit">
            Entrar
          </button>
          </Link>
          
        </div>

        <a href="#" id="mini-cart"><img src="https://raw.githubusercontent.com/gtech-02/grupo-05/23b9d6b09f82ee9cc8f0e4b69f67d873845d8cb3/images/mini-cart.svg" /></a>
      </div>
    </nav>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid menu">
        <NavLink className="navbar-brand navlink" activeClassName="active" to="/home">Home</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link navlink" activeClassName="active" aria-current="page" to="/produtos">Produtos</NavLink>
            <NavLink className="nav-link navlink" activeClassName="active" to="/categorias">Categoria</NavLink>
            <NavLink className="nav-link navlink" activeClassName="active" to="/pedidos">Meus Pedidos</NavLink>
          </div>
        </div>
      </div>
    </nav>
  </header>)

}
