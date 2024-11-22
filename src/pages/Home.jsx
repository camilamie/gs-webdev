import React, { useState, useEffect } from 'react';
import Info from '../components/Info';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const info = [
        {recurso: 'Controle automatizado de luz com base na ocupação do ambiente', explicacao: 'Liga e desliga luzes conforme a presença'},
        {recurso: 'Monitoramento e relatório de uso de energia', explicacao: 'Acompanha o consumo e gera relatórios'},
        {recurso: 'Controle remoto via aplicativo móvel', explicacao: 'Gerencie dispositivos pelo app'},
        {recurso: 'Integração com sistemas de casas inteligentes', explicacao: 'Conecta-se a outros dispositivos da casa'}
    ];

    useEffect(() => {
        fetch('https://6740ce2cd0b59228b7f16a45.mockapi.io/APIv2/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Página parou de responder');
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
        <section className="py-12">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:justify-center">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-green-700 ml-0 lg:ml-10 mb-6 lg:mb-9 text-center lg:text-left">
                        Controle de Energia Inteligente e Sustentável
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mx-6 lg:ml-10 lg:mr-20 text-center lg:text-left">
                        Economize energia e reduza custos com um sistema automatizado que desliga dispositivos eletrônicos quando você não está em casa.
                    </p>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                    <img src="public/img-hero.jpg" alt="homem ligando a luz por aplicativo" className="h-64 md:h-96 lg:h-[450px] rounded-xl shadow-lg" />
                </div>
            </div>
        </section>

        <section className='bg-gray-50 p-6 flex justify-center items-center '>
            <div className='text-center my-6 max-w-4xl mx-auto'>
                <h2 className='text-4xl font-semibold text-green-700 mb-6'>Recursos</h2>
                <div className='w-full'>
                    <Info dadosInfo={info} />
                </div>
            </div>
        </section>

        <section className="py-12 px-6">
            <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-lg p-8 text-center">
                <h2 className="text-3xl font-bold text-green-700 mb-6">Benefícios</h2>
                <ul className="list-disc list-inside space-y-4 text-gray-700">
                    <li>Reduza suas contas de eletricidade</li>
                    <li>Diminuir sua pegada de carbono</li>
                    <li>Melhore a segurança de sua casa</li>
                    <li>Conveniente e fácil de usar</li>
                </ul>
            </div>
            <div>
                <p className="mt-8 text-center text-xl text-gray-600">Junte-se a nós para tornar o mundo um lugar mais verde, uma luz de cada vez!</p>
            </div>
        </section>

        <section className="bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center">Nossos Maiores Usuários</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map(user => (
                        <div key={user.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-24 h-24 rounded-full object-cover mb-4"
                            />
                            <p className="text-lg font-medium text-gray-800">{user.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
};

export default Home;