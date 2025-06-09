interface ContainerProps {
  nome:string
}
function Container(props:ContainerProps){
  let texto = "Texto Antes de Mudar"
  function mudar(){
    texto = "Texto Depois de Mudar"
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