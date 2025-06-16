import { useState } from "react"
interface ProdutosState {
  id:number,
  nome:string,
  preco:number,
  categoria:string
}

function Container(){
  const [produtos,setProdutos] = useState<ProdutosState[]>([]) 

  return(
    <>
      <div className="container-cadastro">
        <form>
          <input type="text" name="id" id="id" />
          <input type="text" name="nome" id="nome" />
          <input type="text" name="preco" id="preco" />
          <input type="text" name="categoria" id="categoria" />
          <input type="submit" value="Cadastrar" />
        </form>
      </div>
      <div className="contaner-listagem">

      </div>
    </>
  )
}
export default Container