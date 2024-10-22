import { useEffect, useState } from 'react'
import './App.css'

type ProdutoType = {
  id:number,
  nome:string,
  descricao:string,
  preco:string,
  imagem:string
}

type UsuarioType = {
  id: number;
  nome: string;
  email: string;
  created_at: string;
  updated_at: string;

};

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([])
  //useEffect(O QUe fazer, Quando Fazer)
  useEffect(()=>{
    fetch("https://one022b-marketplace-eswf.onrender.com/produtos")
    .then(resposta=>resposta.json())
    .then(dados=>setProdutos(dados))
  },[])

  useEffect(()=>{
    fetch("https://one022b-marketplace-eswf.onrender.com/usuarios")
    .then(resposta=>resposta.json())
    .then(dados=>setUsuarios(dados))
  },[])
  return (
    <>  
      <div className="container-produtos">
        {produtos.map(prod=>{
          return(
            <div key={prod.id} className="produto-item">
              <h1>{prod.nome}</h1>
              <img src={prod.imagem} alt="Imagem do produto" />
              
              <p>{prod.preco}</p>
              <p>{prod.descricao}</p>
            </div>
          )
        })}
      </div>
      
      <div className="container-usuarios">
        {usuarios.map(user=>{
          return(
            <div key={user.id} className="usuario-item">
            <h3>{user.nome}</h3>
            <p>{user.email}</p>
            <p>{user.created_at}</p>
            <p>{user.updated_at}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App