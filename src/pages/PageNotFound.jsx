import { NavLink } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="text-xl text-gray-700 mt-4">Página não encontrada</p>
            <p className="text-gray-500 mt-2">Desculpe, a página que você está procurando não existe.</p>
            <NavLink to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                Voltar para Home
            </NavLink>
        </div>
    )
}