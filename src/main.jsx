import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contato from './pages/Contato.jsx'
import Detalhes from './pages/Detalhes.jsx'
import Login from "./pages/login.jsx"

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        // a partir disso aq, tá dando erro, nao sei como arruma
       { index: true, element: <Home /> },
        { path: 'contato', element: <Contato /> },
       { path: 'detalhes', element: <Detalhes/>},
       // { path: '*', element: <PageNotFound /> }
       //{ path: '/login', element: <Login/>}

      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)