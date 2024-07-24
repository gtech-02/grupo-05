import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './Layout.scss'
import ScrollToTop from '../../components/ScrollToTop';


// Definindo o componente de layout
const Layout = ({ children }) => {
  return (
    <div className='teste'>

      <header>
      <Header />
      </header>
      <ScrollToTop>

      <main>
      {children}
      </main>
      </ScrollToTop>

      <footer>
      <Footer />
      </footer>
    </div>
  );
};

export default Layout;