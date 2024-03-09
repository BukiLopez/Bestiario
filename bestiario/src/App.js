import './App.css';
import Footer from './comps/Footer';
import Header from './comps/Header';
import MonsterCardsList from './comps/MonsterCard';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Monster from './comps/Monster';
import Formulario from './comps/Formulario';
// https://i.redd.it/on84ifk8vey71.png

const monsters = [
  { id: 1, monster: "Rajang", description: "A cosmic horror monster", image: "/imgs/Rajang.webp" },
  { id: 2, monster: "Zinogre", description: "El creador de los monstruos", image: "/imgs/Zinogre.webp" },
  { id: 3, monster: "Kulve Taroth", description: "Un monstruo que vive en el bosque", image: "/imgs/Kulve Taroth.webp" },
  { id: 4, monster: "Namielle", description: "Un monstruo que vive en el lago Ness", image: "/imgs/Namielle.webp" },
  { id: 5, monster: "Nargacuga", description: "Helao?🍧", image: "/imgs/Nargacuga.webp" },
  { id: 6, monster: "Tzitzi-Ya-Ku", description: "Ola", image: "/imgs/Tzitzi-Ya-Ku.webp" }
];
/* 
* const { data, loading } = useFetch("http://localhost:3001/monsters");
* La ruta base sustituyeno la actual y quedaría así:
* <Route path="/" element={<MonsterCardsList monsters={data}></MonsterCardsList>}></Route>
* Esta ruta se encargaría de mostrar todos los monstruos tal como la actual, pero usando nuestro Hook useFetch que por dentro se encarga de hacer el fetch con la ruta que le ingresemos como varible, este hook ya incluye el cambio de estado para que cuando se encuentre haciendo el require muestre un loading y cuando termine muestre los datos.
* También deberíamos usar el loading de esta manera:
* {loading ? <p>Loading...</p> : <MonsterCardsList monsters={data}></MonsterCardsList>}
* En monsters.json se encuentra lo que se espera recibir
*/
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MonsterCardsList monsters={monsters}></MonsterCardsList>}></Route>
        <Route path="/monster" element={<Monster monster={monsters[0].monster} image={monsters[0].image} description={monsters[0].description} />}></Route>
        <Route path="/formulario" element={<Formulario />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;