import { useState } from "react"
import './Container.css'
interface ProdutosState {
  id: number,
  nome: string,
  preco: number,
  categoria: string
}

function Container() {
  const [id,setId] = useState("")
  const [nome,setNome] = useState("")
  const [preco,setPreco] = useState("")
  const [categoria,setCategoria] = useState("")
  const [produtos, setProdutos] = useState<ProdutosState[]>([
    {
      id: 1,
      nome: "Computador",
      preco: 3500,
      categoria: "Informática"
    }
  ])
  function trataForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const produtoNovo:ProdutosState = {
      id:parseInt(id),
      nome,
      preco:parseFloat(preco),
      categoria
    }
    setProdutos([...produtos,produtoNovo])

  }
  function trataId(event:React.ChangeEvent<HTMLInputElement>){
    setId(event.target.value)
  }
  function trataNome(event:React.ChangeEvent<HTMLInputElement>){
    setNome(event.target.value)
  }
  function trataPreco(event:React.ChangeEvent<HTMLInputElement>){
    setPreco(event.target.value)
  }
  function trataCategoria(event:React.ChangeEvent<HTMLInputElement>){
    setCategoria(event.target.value)
  }
  return (
    <>
      <div className="container">
        <div className="container-cadastro">
          <h1>Cadastro Produto</h1>
          <form onSubmit={trataForm}>
            <input type="text" name="id" id="id" placeholder="Id" onChange={trataId} />
            <input type="text" name="nome" id="nome" placeholder="Nome" onChange={trataNome} />
            <input type="text" name="preco" id="preco" placeholder="Preço" onChange={trataPreco} />
            <input type="text" name="categoria" id="categoria" placeholder="Categoria" onChange={trataCategoria} />
            <input type="submit" value="Cadastrar" />
          </form>
        </div>
        <div className="container-listagem">
          {produtos.map(produto => {
            return (
              <div className="container-produto">
                <div className="produto-nome">
                  {produto.nome}
                </div>
                <div className="produto-preco">
                  {produto.preco}
                </div>
                <div className="produto-categoria">
                  {produto.categoria}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Container