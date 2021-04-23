import './styles.scss'
import brastemp from '../../assets/images/logo-brastemp.png'
import compra from '../../assets/images/logo-compra-certa.png'
import consul from '../../assets/images/logo-consul.png'
import thebar from '../../assets/images/logo-thebar.png'
import arrow from '../../assets/images/arrow.png'

function Partners() {
  return(
    <div className="partners">
      <div className="partner-bar">
        <p>Nossas principais lojas VTEX</p>
        <img src={arrow} alt="Arrow" />
        <img src={brastemp} alt="Brastemp" />
        <img src={compra} alt="Compra" />
        <img src={consul} alt="Consul" />
        <img src={thebar} alt="Thebar" />
      </div>
    </div>
  );
}

export default Partners;