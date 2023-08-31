import CrearAlojamiento from "../Pages/CrearAlojamiento"
import Favoritos from "../Pages/Favoritos"
import MisAlojamientos from "../Pages/MisAlojamientos"
import Reservar from "../Pages/Reservar"

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