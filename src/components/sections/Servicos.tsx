const servicos = [
    {
        titulo: 'Instalação de sistemas fotovoltaicos',
        descricao: 'Projeto e instalação de sistemas de energia solar fotovoltaica para residências, comércios e indústrias.',
    },
    {
        titulo: 'Manutenção de sistemas de energia solar',
        descricao: 'Manutenção dos sistemas de energia solar para que sigam funcionando com desempenho adequado.',
    },
]

export default function Servicos() {
    return (
        <section id="servicos" className="scroll-mt-24 bg-brand-50 px-6 py-20">
            <div className="mx-auto max-w-5xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Serviços</p>
                <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">O que a GC Solar faz</h2>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {servicos.map((servico) => (
                        <article key={servico.titulo} className="rounded-2xl bg-white p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-brand-700">{servico.titulo}</h3>
                            <p className="mt-3 text-gray-600">{servico.descricao}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}