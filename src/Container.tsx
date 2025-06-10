import { useState } from "react"

interface ContainerProps {
  nome:string
}
function Container(props:ContainerProps){
  const [texto,setTexto] = useState("Texto Antes de Mudar") 
  function mudar(){
    setTexto("Texto Depois de Mudar")
  }
  return(
    <>
      <h1>{props.nome}</h1>
      <p>{texto}</p>
      <button onClick={mudar}>Mudar</button>
    </>
  )
}
export default Container