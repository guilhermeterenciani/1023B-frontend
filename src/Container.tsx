import { useState } from "react"
interface ProdutosState {
  id: number,
  nome: string,
  preco: number,
  categoria: string
}

function Container() {
  const [produtos, setProdutos] = useState<ProdutosState[]>([
    {
      id: 1,
      nome: "Computador",
      preco: 3500,
      categoria: "Informática"
    }
  ])

  return (
    <>
      <div className="container">
        <div className="container-cadastro">
          <form>
            <input type="text" name="id" id="id" />
            <input type="text" name="nome" id="nome" />
            <input type="text" name="preco" id="preco" />
            <input type="text" name="categoria" id="categoria" />
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