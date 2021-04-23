import './styles.scss'
import produtos from '../../assets/images/produtos-banner.png'

function Banner() {
  return (
    <div className="banner">
        <div className="text-banner">
          <h1>Criamos lojas que vendem mais.</h1>
          <p>A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
          <a href="/">Veja nossas soluções</a>
        </div>
        <div className="product-banner">
          <img src={produtos} alt="Produtos Banner" />
        </div>
      </div>
  );
}

export default Banner;