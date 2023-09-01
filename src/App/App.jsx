import CrearAlojamiento from "../Pages/CrearAlojamiento/CrearAlojamiento"
import Favoritos from "../Pages/Favoritos/Favoritos"
import MisAlojamientos from "../Pages/MisAlojamientos/MisAlojamientos"
import Reservar from "../Pages/Reservar/Reservar"

const App = () => {
  return (
    <>
      <h1>App</h1>
      <Favoritos/>
      <Reservar/>
      <MisAlojamientos/>
      <CrearAlojamiento/>
    </>
  )
}

export default App