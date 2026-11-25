import { useState } from 'react'
import { navigation } from '../data/navigation'

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
                <a href="#" aria-label="GC Solar - Início" className="flex items-center">
                    <img
                        src="/logo-gc-solar.png"
                        alt="GC Solar - Investimento fotovoltaico"
                        width={250}
                        height={250}
                        className="h-14 w-auto md:h-16"
                    />
                </a>

                {/* Menu para desktop */}
                <nav aria-label="Menu principal" className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {navigation.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="text-sm font-semibold tracking-wide text-gray-700 transition hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Botão do menu para celular */}
                <button
                    type="button"
                    onClick={() => setMenuAberto((aberto) => !aberto)}
                    aria-expanded={menuAberto}
                    aria-controls="menu-mobile"
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                    {menuAberto ? 'Fechar' : 'Menu'}
                </button>
            </div>

            {/* Menu para celular */}
            {menuAberto && (
                <nav id="menu-mobile" aria-label="Menu principal" className="border-t border-gray-200 md:hidden">
                    <ul className="flex flex-col px-6 py-2">
                        {navigation.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={() => setMenuAberto(false)}
                                    className="block py-3 text-base font-semibold text-gray-700 hover:text-brand-700"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}