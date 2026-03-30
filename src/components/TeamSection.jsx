import { TEAM } from '../constants'

export default function TeamSection() {
  return (
    <section id="team" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Meet the Team
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          The people building NithenAI.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <div key={member.name} className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-sm">
              <img
                src={member.image}
                alt={member.name}
                className="h-24 w-24 rounded-full object-cover object-top"
              />
              <h3 className="mt-4 text-base font-bold text-slate-900">{member.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
