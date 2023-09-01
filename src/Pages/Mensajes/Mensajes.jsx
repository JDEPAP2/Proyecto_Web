import ChatPersona from "../../Components/ChatPersona/ChatPersona"
import EstadoPersona from "../../Components/EstadoPersona/EstadoPersona"
import NavBar from "../../Shared/NavBar/NavBar"

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