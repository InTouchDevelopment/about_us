import { HERO } from '../constants'

export default function Hero() {
  return (
    <section className="px-6 pt-24 pb-16 text-center md:pt-32 md:pb-24">
      <div className="mx-auto max-w-3xl">
        <span className="inline-block rounded-full bg-[#137fec]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#137fec] uppercase">
          {HERO.badge}
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          The leading indicator of organizational health{' '}
          <span className="text-[#137fec]">most investors never see.</span>
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
          {HERO.description}
        </p>
      </div>
    </section>
  )
}
