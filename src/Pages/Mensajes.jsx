import ChatPersona from "../Components/ChatPersona"
import EstadoPersona from "../Components/EstadoPersona"
import NavBar from "../Shared/NavBar"

const Mensajes = () => {
    return (
      <>
        <h2>Mensajes</h2>
        <NavBar/>
        <EstadoPersona/>
        <ChatPersona/>
      </>
    )
  }
  export default Mensajes