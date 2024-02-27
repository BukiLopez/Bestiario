import './monsterCard.css';

 /* 
function MonsterCard({ monster,des, ima }) {
  return (
    <div className='margen'>
        <div class="tarjeta">
            <div class="titulo">{monster}</div>
                <div class="cuerpo">
                    <img src={ima} alt="muestra"/>
                    {des}
                    </div>
            <div class="pie">
                <button>Ver más</button>
            </div>
        </div>
    </div>
    
  );
}

function MonsterCardsList(){
    return (
        <div>
            {monsters.map((monsterd) => (
                <MonsterCard monster={monsterd.monster} des={monsterd.description} ima={monsterd.image} />
            ))}
        </div>
    )
}
*/
/*
function MonsterCard({ monster, description, image }) {
    return (
      <div className="card-container">
        <div className="card-item">
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
        </div>
      </div>
    );
  }
*/

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