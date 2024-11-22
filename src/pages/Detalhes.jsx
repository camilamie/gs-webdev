export default function Detalhes() {
    return (
        <>
        <section className="bg-gray-50 py-12 min-h-screen">
            <div className="max-w-5xl mx-auto px-6 text-center ">
                <h1 className="text-4xl md:text-5xl font-semibold text-green-700 mb-8">Detalhes do Produto</h1>

                <p className="text-lg text-gray-700 mb-6">
                    Nosso produto é sustentável para todos no planeta, ajudando a aumentar a pegada ecológica da Terra.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    Ele é um sensor que deve ser instalado nas portas de saída de sua propriedade. Quando há uma identificação de saída, nosso aplicativo envia uma notificação para confirmar que você saiu. Caso seja confirmado, o sistema desliga dispositivos não essenciais em modo stand-by.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                    Com isso, economizamos energia e tornamos o planeta e nossas vidas mais sustentáveis.
                </p>

                <div className="flex justify-center ">
                    <img src="public/detalhes-foto.jpeg" alt="Mulher no celular" className="rounded-xl shadow-lg max-w-full h-auto w-full lg:w-2/3" />
                </div>
            </div>
        </section>
        </>
    );
}
