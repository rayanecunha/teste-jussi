import './styles.scss'

function Newsletter() {
  return(
    <div className="newsletter">
      <p>Receba novidades da nossa área de produtos digitais.</p>
      <div className="email-register">
        <input placeholder="Digite seu e-mail" />
        <button>Cadastrar</button>
      </div>
    </div>
  );
}

export default Newsletter;