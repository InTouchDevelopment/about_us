import { InlineWidget } from 'react-calendly'
import { CALENDLY } from '../constants'

export default function CalendlySection() {
  return (
    <section id="schedule" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {CALENDLY.heading}
        </h2>
        <p className="mt-4 text-lg text-slate-600">{CALENDLY.description}</p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <InlineWidget
            url={CALENDLY.url}
            styles={{ minWidth: '320px', height: '660px' }}
          />
        </div>
      </div>
    </section>
  )
}
