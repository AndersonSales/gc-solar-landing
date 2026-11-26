export default function SimuleSeuProjeto() {
    return (
        <section id="simule-seu-projeto" className="scroll-mt-24 bg-brand-50 px-6 py-20">
            <div className="mx-auto max-w-5xl text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Simule seu projeto</p>
                <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-gray-900 md:text-4xl">
                    Descubra quanto você pode economizar com energia solar
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
                    Preencha a simulação com seu consumo de energia. Os valores apresentados são estimativas e a equipe da GC
                    Solar pode detalhar o projeto com você.
                </p>
            </div>

            <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm">
                <iframe
                    title="Simulador de economia GC Solar"
                    //src="https://simulador.luvik.com.br/simulador?k=bmFzdWRoaXUxM2hhc2RhczY1NDM2MjE3NDQ0OTI1NDQ"
                    src="https://simulador.luvik.com.br/simulador?k=bmFzdWRoaXUxM2hhc2RhczY1NDM2MjE3NDQ0OTI1NDQ"
                    loading="lazy"
                    className="block h-[1000px] w-full border-0 md:h-[1000px] max-md:h-[1400px]"
                />
            </div>
        </section>
    )
}