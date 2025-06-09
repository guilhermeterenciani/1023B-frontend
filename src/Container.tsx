//Props -> é utilizado para passar um 
// dados diferente para cada 
// componente em sua criação.

//States -> Estados, salvam estados de variáveis
// do react e quando esses estados mudam.
// Automaticamente o React Entende que ele 
// precisa atualizar a página para mostrar
// os novos valores do componente.
//Class
import React from 'react'
interface ContainerProps{
  nome:string
}
interface ContainerInfoState{
  nome:string
}

//Container é filha de React.Component
class Container extends React.Component<ContainerProps,ContainerInfoState>{
  constructor(props:ContainerProps){
    super(props)
    this.state = {
      nome:"Nome antes de Mudar"
    }
  }
  mudar = ()=>{
    this.setState({nome:"Nome depois de Mudar"})
  }
  render(): React.ReactNode {
    return (
      <>
        <h1>{this.props.nome}</h1>
        <p>{this.state.nome}</p>
        <button onClick={this.mudar}>Mudar Estado</button>
      </>
    )
  }
}
export default Container