import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.scss";


export default function Header() {
    return (
    <header>
    <nav className="navbar bg-body-tertiary nav-header">
      <div className="container-fluid">
        <img className="logo-header" src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/logo-header.svg" />
        <form className="d-flex campo-busca" role="search">
          <input
            id="busca"
            className="form-control me-2"
            type="search"
            placeholder="Pesquisar"
            aria-label="Pesquisar"
          />
          <button className="button-nav" type="submit" >
            <img src="images/icon-lupa.png" />
          </button>
        </form>

        <div className="d-flex botoes-header" role="search">
          <Link to="/" id="cad">Cadastre-se</Link>
          <button className="btn btn-outline-success" type="submit">
            Entrar
          </button>
        </div>

        <a href="#" id="mini-cart"><img src="https://raw.githubusercontent.com/gtech-02/grupo-05/23b9d6b09f82ee9cc8f0e4b69f67d873845d8cb3/images/mini-cart.svg" /></a>
      </div>
    </nav>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid menu">
        <Link className="navbar-brand" to="/home">Home</Link>
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
            <Link className="nav-link" aria-current="page" to="/produtos">Produtos</Link>
            <Link className="nav-link" to="/categorias">Categoria</Link>
            <Link className="nav-link" to="/home">Meus Pedidos</Link>
          </div>
        </div>
      </div>
    </nav>
  </header>)
//   (item) => (
//     <a className="flex align-items-center p-menuitem-link ">
//       <span className={item.icon} />
//       <span className="mx-2">{item.label}</span>
//     </a>
//   );
//   const items = [
//     {
//       label: "Home",
//       icon: <Icon name="star" />,
//     },
//     {
//       label: "Produtos",
//       icon: <Icon name="tag" />,
//     },
//     {
//       label: "Categorias",
//       icon: <Icon name="user" />,
//     },
//   ];

//   const start = (
//     <img
//       alt="logo"
//       src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/logo-header.svg"
//       height="40"
//       className="mr-2 logo"
//     ></img>
//   );
//   const end = (
//     <div className="divEnd">
//       <div className="flex">
//         <InputText
//           placeholder="Search"
//           type="text"
//           className="w-8rem sm:w-auto pesquisa"
//         />

//         <div className="card flex justify-content-center">
//           <Button
//             label="Cadastre-se"
//             link
//             onClick={() => window.open("https://react.dev", "_blank")}
//           />
//           <a
//             href="https://react.dev"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-button font-bold"
//           >
//             Entrar
//           </a>
//         </div>
//       </div>
//     </div>
//   );

//   return (
    
//       <div className="menu-container">
//         <Menubar model={items} start={start} end={end} />
//       </div>
    
//   );
}
