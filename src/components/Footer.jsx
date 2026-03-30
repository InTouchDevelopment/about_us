export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3 text-[#137fec]">
          <span className="material-symbols-outlined text-2xl font-bold text-[#137fec]" aria-hidden="true">hub</span>
          <span className="text-slate-900 font-bold">NithenAI</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          <span className="text-slate-500 hover:text-[#137fec] transition-colors text-sm font-medium cursor-pointer">Privacy Policy</span>
          <span className="text-slate-500 hover:text-[#137fec] transition-colors text-sm font-medium cursor-pointer">Terms of Service</span>
          <span className="text-slate-500 hover:text-[#137fec] transition-colors text-sm font-medium cursor-pointer">Security Whitepaper</span>
          <span className="text-slate-500 hover:text-[#137fec] transition-colors text-sm font-medium cursor-pointer">Contact</span>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-slate-400 text-xs">© 2026 NithenAI. All rights reserved. SOC2 Type II Compliant.</p>
      </div>
    </footer>
  )
}
