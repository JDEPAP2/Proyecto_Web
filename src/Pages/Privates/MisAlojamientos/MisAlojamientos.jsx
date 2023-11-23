import {ItemAlojamiento} from "../../../Components"

export const MisAlojamientos = () => {
  const places = ['Bipasa', 'Valle del lili']
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <h1>Mis Alojamientos</h1>
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
  
