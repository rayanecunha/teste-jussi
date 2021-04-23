import './styles.scss'
import logo from '../../assets/images/logo.png'
import cart from '../../assets/images/shopping-cart.png'
import search from '../../assets/images/search.png'

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <div>
          <img src={logo} alt="Logo" />
          <a href="/">Nossas Soluções</a>
          <a href="/">Conheça a Jüssi</a>
        </div>
        <div>
          <div className="search">
            <input placeholder="Buscar" />
            <img src={search} alt="Search" />
          </div>
          <a href="/">Login</a>
          <a href="/">
          <img src={cart} alt="Cart" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;