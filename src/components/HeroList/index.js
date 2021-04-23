import './styles.scss'

function HeroList({ list, search }) {
  return (
    <div className="heroes">
      <h1>Resultados de busca para: {search}</h1>
      <div className="heroes-list">
        {list?.map((item, index) => (
          <div className="heroes-card" key={index}>
            <div className="card-header">
              <img className="card-image" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Hero"/>
            </div>
            <div className="card-content">
              <h3>{item.name}</h3>
              <ul>
                {item.series.items.map((serie, index) => (
                  index < 3 &&
                    <li key={index}>{serie?.name}</li>
                ))}
              </ul>   
            </div>
          </div> 
        ))} 
      </div>
    </div>
  );
}

export default HeroList;