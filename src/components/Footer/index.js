import './styles.scss'
import wpp from '../../assets/images/wppcompany.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'

function Footer() {
  return(
    <div className="footer">
      <div className="footer-companies">
        <div>
          <img src={wpp} alt="Wpp Company" />
        </div>
        <div className="social-networks">
          <img src={facebook} alt="Cart" />
          <img src={instagram} alt="Cart" />
          <img src={linkedin} alt="Cart" />
        </div>
      </div>
    </div>
  );
}

export default Footer;