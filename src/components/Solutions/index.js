import './styles.scss'
import solutionsList from './content'

function Solutions() {
  return (
    <div className="solutions">
      <h1>Nossas Soluções</h1>
      <div className="solutions-list">
        {solutionsList.map((item, index) => (
          <div className="solutions-card" key={index}>
            <div className="card-header">
              <div className="card-image">{item.image}</div>
            </div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <ul>
                {item.list.map((feature, index) => (
                  <li key={index}>{feature.name}</li>
                ))}
              </ul>
            </div>
            <div className="card-footer">
              <button>Ver solução</button>
            </div>
          </div> 
        ))} 
      </div>
    </div>
  );
}

export default Solutions;