import ReactPlayer from 'react-player'
import { VIDEO } from '../constants'

export default function VideoSection() {
  return (
    <section id="demo" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {VIDEO.heading}
        </h2>
        <p className="mt-4 text-lg text-slate-600">{VIDEO.description}</p>

        <div className="relative mt-10 overflow-hidden rounded-2xl bg-black shadow-lg" style={{ paddingTop: '56.25%' }}>
          <ReactPlayer
            url={VIDEO.url}
            controls
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </div>
      </div>
    </section>
  )
}
