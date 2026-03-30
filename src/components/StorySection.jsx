import { STORY, TEAM } from '../constants'

export default function StorySection() {
  return (
    <section id="story" className="px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {STORY.heading}
          </h2>

          <div className="mt-6 space-y-4">
            {STORY.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-slate-600">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {TEAM.map((member) => (
            <div key={member.name} className="flex flex-col items-center rounded-2xl bg-white p-4 shadow-sm">
              <img
                src={member.image}
                alt={member.name}
                className="h-20 w-20 rounded-full object-cover object-top"
              />
              <h3 className="mt-3 text-sm font-bold text-slate-900 text-center">{member.name}</h3>
              <p className="mt-0.5 text-xs text-slate-500 text-center">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
