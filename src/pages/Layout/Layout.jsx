import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Layout.scss'


// Definindo o componente de layout
const Layout = ({ children }) => {
  return (
    <div className='teste'>

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