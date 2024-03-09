import './monsterCard.css';
import { useEffect,useState } from 'react';


function MonsterCardsList() {
  const [monsters, setMonsters] = useState([]);
//  const [loading, setLoading] = useState(true);

useEffect(() => {
//    setLoading(true);
    fetch("https://getpantry.cloud/apiv1/pantry/eab0f25a-9d10-4fdb-9af3-b49c71d9f3c9/basket/newMonsters")
        .then((response) => response.json())
        .then((resasjson) => setMonsters(resasjson.monsters))
        .catch((err) => console.log(err))
//        .finally(() => setLoading(false));
}, []);
// hacer request y carga de datos
// monsters = resultado de request
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
          <button><a href="/monster">Ver más</a></button>
        </div>
      </div>
    );
  }
  
export default MonsterCardsList;

