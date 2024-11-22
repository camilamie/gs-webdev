import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header className="  text-white py-4 shadow-md">
                <div className='flex items-center justify-center	 max-w-7xl mx-auto px-4"' >
                    <img src='public/logo-semfundo.png' alt="logo" className="h-20 w-50" />
                    <h1 className="text-6xl font-bold  text-ve ">Eco Switch</h1>
                </div>
                <nav>
                    <ul className='flex gap-4 justify-center text-vm'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/detalhes">Detalhes</NavLink></li>
                        <li><NavLink to="/contato">Contato</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>
                </nav>
            </header>

        </>
    )
}