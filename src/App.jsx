import { useState } from 'react'
import FadeIn from './components/FadeIn'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import AjeerProject from './components/projects/AjeerProject'
import PolarisProject from './components/projects/PolarisProject'
import Tools from './components/tools/Tools'
import Skills from './components/skills/Skills'
import ContactFooter from './components/contact/ContactFooter'
import ContactModal from './components/contact/ContactModal'
import ImageSlider from './components/ImageSlider'

export default function App() {
  const [activeProject, setActiveProject] = useState(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const ajeerScreenshots = [
    '/images/ajeer/ajeer.png',
    '/images/ajeer/ajeer0.png',
    '/images/ajeer/ajeer1.png',
    '/images/ajeer/ajeer2.png',
    '/images/ajeer/ajeer3.png',
    '/images/ajeer/ajeer4.png',
    '/images/ajeer/ajeer5.png',
    '/images/ajeer/ajeer6.png',
    '/images/ajeer/ajeer7.png',
    '/images/ajeer/ajeer8.png',
    '/images/ajeer/ajeer9.png',
    '/images/ajeer/ajeer10.png'
  ]

  const polarisScreenshots = [
    '/images/polaris/polaris.png',
    '/images/polaris/polaris0.png',
    '/images/polaris/polaris1.png',
    '/images/polaris/polaris2.png',
    '/images/polaris/polaris3.png',
    '/images/polaris/polaris4.png',
    '/images/polaris/polaris5.png',
    '/images/polaris/polaris6.png',
    '/images/polaris/polaris7.png',
    '/images/polaris/polaris8.png',
    '/images/polaris/polaris9.png',
    '/images/polaris/polaris10.png',
    '/images/polaris/polaris11.png',
    '/images/polaris/polaris12.png'
  ]

  const activeScreenshots = activeProject === 'ajeer' ? ajeerScreenshots : activeProject === 'polaris' ? polarisScreenshots : []

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans selection:bg-blue-200 selection:text-blue-900 antialiased relative overflow-hidden">
      
      {activeProject && (
        <ImageSlider 
          images={activeScreenshots} 
          onClose={() => setActiveProject(null)} 
        />
      )}

      {isContactModalOpen && (
        <ContactModal onClose={() => setIsContactModalOpen(false)} />
      )}

      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>

      <Navigation onOpenContact={() => setIsContactModalOpen(true)} />
      
      <Hero />

      <section id="projects" className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">Selected Works.</h2>
            <p className="text-xl md:text-2xl text-[#86868b] font-medium">A look at the applications I've engineered and worked on.</p>
          </div>
        </FadeIn>

        <div className="space-y-24">
          <AjeerProject onOpenSlider={() => setActiveProject('ajeer')} />
          <PolarisProject onOpenSlider={() => setActiveProject('polaris')} />
        </div>
      </section>

      <Tools />
      <Skills />
      <ContactFooter />

    </div>
  )
}