import { VALUES } from '../constants'

export default function ValuesGrid() {
  return (
    <section id="values" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          What We Stand For
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          The principles that guide everything we build.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-3xl" role="img" aria-label={value.title}>
                {value.icon}
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
