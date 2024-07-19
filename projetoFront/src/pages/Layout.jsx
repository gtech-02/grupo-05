import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '/home/luan/Documentos/curso-GeraçãoTech/projetos/grupo-05/projetoFront/src/pages/Layout.scss'

// Definindo o componente de layout
const Layout = ({ children }) => {
  return (
    <div>

      <header>
      <Header />
      </header>

      <main>
      {children}
      </main>
      <footer>
      <Footer />
      </footer>
    </div>
  );
};

export default Layout;