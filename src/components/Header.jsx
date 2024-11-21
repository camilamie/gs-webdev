import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header className="bg-green-600 text-white py-4 shadow-md">
                <div className='flex items-center justify-between max-w-7xl mx-auto px-4"' >
                    <img src="./assets/logo-semfundo" alt="logo" className="h-12 w-12" />
                    <h1 className="text-2xl font-bold">Eco Switch</h1>
                </div>
                <nav>
                    <ul className='flex gap-4'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/detalhes">Detalhes</NavLink></li>
                        <li><NavLink to="/contato">Contato</NavLink></li>
                        <li><NavLink to="/pagenotfound"></NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>
                </nav>
            </header>

        </>
    )
}