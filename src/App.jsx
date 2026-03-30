import Header from './components/Header'
import Hero from './components/Hero'
import StorySection from './components/StorySection'
import ValuesGrid from './components/ValuesGrid'
import VideoSection from './components/VideoSection'
import CalendlySection from './components/CalendlySection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f6f7f8]">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <StorySection />
        <VideoSection />
        <ValuesGrid />
        <CalendlySection />
      </main>
      <Footer />
    </div>
  )
}
