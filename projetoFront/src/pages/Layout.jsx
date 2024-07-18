import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

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