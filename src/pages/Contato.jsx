import { useState } from "react";

export default function Contato() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${nome}, Seu e-mail foi enviado com sucesso!`);

        setNome('');
        setEmail('');
        setMensagem('');
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 ">
            {/* Formulário */}
            <div className="flex justify-center py-10   ">
                <form onSubmit={handleSubmit} className="flex flex-col bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl space-y-4 mt-36">
                    <h2 className="text-2xl font-semibold text-center text-green-700">Fale Conosco</h2>
                    
                    <label htmlFor="nome" className="text-gray-700 font-medium">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        className="text-black border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        required
                    />
                    
                    <label htmlFor="email" className="text-gray-700 font-medium">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="text-black border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    
                    <label htmlFor="mensagem" className="text-gray-700 font-medium">Mensagem:</label>
                    <textarea
                        id="mensagem"
                        cols="30"
                        rows="5"
                        className="text-black border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={mensagem}
                        onChange={e => setMensagem(e.target.value)}
                        required
                    />
                    
                    <button
                        type="submit"
                        className="bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition duration-300"
                    >
                        Enviar
                    </button>
                </form>
            </div>
            
        </div>
    )
}
