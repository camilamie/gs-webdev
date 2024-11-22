import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'


export default function App() {
  return (

    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div lassName="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

