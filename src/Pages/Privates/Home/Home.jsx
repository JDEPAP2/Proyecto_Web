import {ItemAlojamiento} from "../../../Components/"
import './Home.css'

export const Home = () => {
    const places = ['Alameda', 'Siloe', 'Fatima', 'Caney',"Luz", 'Diamante']
    return (
      <>
        <br></br>
        <br></br>
        <h1>Home</h1>
        <hr></hr>
        <br></br>
        <div className="container">
          {places.map((v,i)=><ItemAlojamiento key={i} nombre={v}/>)}
        </div>
        <br></br>
        <div className="container">
          {places.map((v,i)=><ItemAlojamiento key={i} nombre={v}/>)}
        </div>
      </>
    )
  }
