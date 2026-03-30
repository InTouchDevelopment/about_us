import { NAV_LINKS } from '../constants'

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 px-6 md:px-20 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3 text-[#137fec]">
        <span className="material-symbols-outlined text-3xl font-bold text-[#137fec]" aria-hidden="true">hub</span>
        <h2 className="text-slate-900 text-xl font-extrabold leading-tight tracking-tight font-manrope">NithenAI</h2>
      </div>

      <nav className="hidden md:flex flex-1 justify-center gap-10">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-slate-600 hover:text-[#137fec] text-sm font-bold transition-colors cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="#schedule"
          className="hidden sm:flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-[#137fec] text-white text-sm font-bold shadow-lg shadow-[#137fec]/20 hover:bg-[#137fec]/90 transition-all"
        >
          Request Demo
        </a>
        <div className="bg-slate-200 rounded-full p-1 border border-slate-200">
          <span className="material-symbols-outlined text-2xl text-slate-500" aria-hidden="true">account_circle</span>
        </div>
      </div>
    </header>
  )
}
