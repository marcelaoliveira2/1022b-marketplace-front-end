import { useEffect, useState } from 'react'
import './App.css'

type ProdutoType = {
  id:number,
  nome:string,
  descricao:string,
  preco:string,
  imagem:string
}
function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  //useEffect(O QUe fazer, Quando Fazer)
  useEffect(()=>{
    fetch("http://localhost:8000/produtos")
    .then(resposta=>resposta.json())
    .then(dados=>setProdutos(dados))
  },[])
  return (
    <>  
      <div className="container-produtos">
        {produtos.map(prod=>{
          return(
            <div key={prod.id} className="produto-item">
              <h1>{prod.nome}</h1>
              <img src={prod.imagem} alt="Imagem de celular" />
              <p>{prod.preco}</p>
              <p>{prod.descricao}</p>
            </div>
          )
        })}
      </div>
      
    </>
  )
}

export default App