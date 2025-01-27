import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CadastroProduto from './componentes/cadastroproduto/CadastroProduto.tsx';
import AlterarProduto from './componentes/alterarproduto/AlterarProduto.tsx';
import Header from './componentes/header/Header.tsx';

//Crie um comentário explicando o que faz o código abaixo
//Cria uma instância do BrowserRouter e passa um array de objetos com as rotas da aplicação
const router = createBrowserRouter([
  {
    path: "/",
    element: <><Header/><App /></>,
  },
  {
    path: "/cadastro-produto",
    element: <><Header/><CadastroProduto/></>,
  },
  {
    path: "/alterar-produto/:id",
    element: <><Header/><AlterarProduto/></>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)