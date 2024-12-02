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
  create_at: string;
  updated: string;

};

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([])
  //useEffect(O QUe fazer, Quando Fazer)
  useEffect(()=>{
    fetch("http://localhost:5173/produtos")
    .then(resposta=>resposta.json())
    .then(dados=>setProdutos(dados))
  },[])

  useEffect(()=>{
    fetch("http://localhost:5173/usuarios")
    .then(resposta=>resposta.json())
    .then(dados=>setUsuarios(dados))
  },[])
  return (
    <>  
      <div className='titulo-lista'>
        <h2>Lista de Produtos</h2>
      </div>
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
      
      <div className='titulo-lista'>
        <h2>Lista de Usuários</h2>
      </div>
      <div className="container-usuarios">
        {usuarios.map(user=>{
          return(
            <div key={user.id} className="usuario-item">
            <h3>{user.nome}</h3>
            <p>{user.email}</p>
            <p>{user.create_at}</p>
            <p>{user.updated}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App