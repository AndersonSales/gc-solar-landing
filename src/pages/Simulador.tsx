import Header from '../components/Header'

const SIMULADOR_URL =
    'https://simulador.luvik.com.br/simulador?k=bmFzdWRoaXUxM2hhc2RhczY1NDM2MjE3NDQ0OTI1NDQ'

export default function Simulador() {
    return (
        <>
            <Header />
            <main className="bg-brand-50 px-6 py-10 md:py-14">
                <div className="mx-auto max-w-5xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">Simule seu projeto</p>
                    <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-gray-900 md:text-4xl">
                        Descubra quanto você pode economizar com energia solar
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
                        Preencha a simulação com seu consumo de energia. Os valores apresentados são estimativas e a equipe da
                        GC Solar pode detalhar o projeto com você.
                    </p>
                </div>

                <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm">
                    <iframe
                        title="Simulador de economia GC Solar"
                        src={SIMULADOR_URL}
                        className="block h-[1500px] w-full border-0 md:h-[calc(100vh-260px)] md:min-h-[900px]"
                    />
                </div>
            </main>
        </>
    )
}