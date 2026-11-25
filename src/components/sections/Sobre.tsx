const sobre = {
    titulo: 'Energia solar com confiança e qualidade',
    paragrafos: [
        'A GC Solar oferece soluções de energia solar para ajudar pessoas e empresas a gerar a própria energia.',
        'Acompanhamos cada etapa do projeto, da avaliação inicial à instalação, com foco em eficiência e atendimento próximo.',
    ],
    pilares: [
        {
            titulo: 'Qualidade',
            descricao: 'Equipamentos selecionados para oferecer desempenho e durabilidade.',
            imagem: '/pilar-qualidade.png',
        },
        {
            titulo: 'Economia',
            descricao: 'Soluções pensadas para reduzir os custos com energia.',
            imagem: '/pilar-economia.png',
        },
        {
            titulo: 'Confiança',
            descricao: 'Orientação clara e acompanhamento durante todo o projeto.',
            imagem: '/pilar-confianca.png',
        },
        {
            titulo: 'Sustentabilidade',
            descricao: 'Mais energia renovável para um futuro sustentável.',
            imagem: '/pilar-sustentabilidade.png',
        },
    ],
}

export default function Sobre() {
    return (
        <section id="sobre" className="relative scroll-mt-24 overflow-hidden px-6 py-20">
            {/* Imagem de fundo */}
            <img
                src="/fundo-sobre.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-[75%_50%]"
            />

            {/* Véu no celular */}
            <div className="absolute inset-0 bg-white/70 md:hidden" />

            {/* Véu no desktop: centro mais claro para o texto */}
            <div className="absolute inset-0 hidden bg-gradient-to-r from-white/90 via-white/75 to-white/20 md:block" />

            <div className="relative mx-auto max-w-5xl text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Sobre a GC Solar</p>
                <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-gray-900 md:text-4xl">{sobre.titulo}</h2>

                <div className="mx-auto mt-6 max-w-2xl space-y-4 text-lg text-gray-700">
                    {sobre.paragrafos.map((paragrafo) => (
                        <p key={paragrafo.slice(0, 40)}>{paragrafo}</p>
                    ))}
                </div>

                <ul className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
                    {sobre.pilares.map((pilar) => (
                        <li
                            key={pilar.titulo}
                            className="overflow-hidden rounded-2xl border border-brand-100 bg-white/90 shadow-sm"
                        >
                            <img
                                src={pilar.imagem}
                                alt=""
                                aria-hidden="true"
                                loading="lazy"
                                className="aspect-[4/3] w-full object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-brand-700">{pilar.titulo}</h3>
                                <p className="mt-2 text-sm text-gray-600">{pilar.descricao}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
