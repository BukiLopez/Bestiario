import './monsterCard.css';

function MonsterCardsList({ monsters }) {
    return (
      <div className="card-container">
        {monsters.map((monster) => (
          <div className="card-item" key={monster.id}>
            <MonsterCard {...monster} />
          </div>
        ))}
      </div>
    );
  }
  
  function MonsterCard({ monster, description, image }) {
    return (
      <div className="tarjeta">
        <div className="titulo">{monster}</div>
        <div className="cuerpo">
          <img src={image} alt="muestra" />
          <p>{description}</p>
        </div>
        <div className="pie">
          <button>Ver más</button>
        </div>
      </div>
    );
  }
  
export default MonsterCardsList;










