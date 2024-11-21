import React, { useState, useEffect } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://673ebc69a9bc276ec4b57a28.mockapi.io/api/ecotrend1/Users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
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
        <section>
            <h1>Home</h1>
            <div>
                <h2>Recursos</h2>
                <ul>
                    <li>Controle automatizado de luz com base na ocupação do ambiente</li>
                    <li>Monitoramento e relatório de uso de energia</li>
                    <li>Controle remoto via aplicativo móvel</li>
                    <li>Integração com sistemas de casas inteligentes</li>
                </ul>
            </div>
            <div>
                <h2>Benefícios</h2>
                <ul>
                    <li>Reduza suas contas de eletricidade</li>
                    <li>Diminuir sua pegada de carbono</li>
                    <li>Melhore a segurança de sua casa</li>
                    <li>Conveniente e fácil de usar</li>
                </ul>
            </div>
            <div>
                <p>Junte-se a nós para tornar o mundo um lugar mais verde, uma luz de cada vez!</p>
            </div>
            <div>
                <h2>Usuários</h2>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <p><strong>Nome: </strong> {user.name}</p>
                            <p><strong>Email: </strong> {user.email}</p>
                            <p><strong>Avatar: </strong> <img src={user.avatar} alt={user.name} width="100" height="100" /></p>
                            <p><strong>Comentário: </strong> {user.comment}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Home;

