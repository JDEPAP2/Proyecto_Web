import Alojamiento from "../Pages/Alojamiento"
import Home from "../Pages/Home"
import Iniciar from "../Pages/Iniciar"
import Mensajes from "../Pages/Mensajes"
import Perfil from "../Pages/Perfil"
import CrearAlojamiento from "../Pages/CrearAlojamiento"
import Favoritos from "../Pages/Favoritos"
import MisAlojamientos from "../Pages/MisAlojamientos"
import Reservar from "../Pages/Reservar"

const App = () => {
  return (
    <>
      <h1>App</h1>
      <Home/>
      <Perfil/>
      <Alojamiento/>
      <Iniciar/>
      <Mensajes/>
      <Favoritos/>
      <Reservar/>
      <MisAlojamientos/>
      <CrearAlojamiento/>
    </>
  )
}
export default App