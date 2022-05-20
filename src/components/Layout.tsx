import Header from './header/Header'
import Footer from './footer/Footer'

const Layout = ({ children } : any) => {
  return (
    <div className='content'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;