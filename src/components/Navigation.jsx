import { useState } from 'react'

export default function Navigation({ onOpenContact }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center mt-6 px-4">
      <nav className="flex items-center justify-between px-6 md:px-8 py-4 w-full max-w-4xl bg-white/70 backdrop-blur-xl border border-white/50 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-50">
        <div className="text-xl md:text-2xl font-semibold tracking-tight text-[#1d1d1f] pl-2 md:pl-0">
          Huthaifa Maan
        </div>

        <div className="hidden md:flex space-x-8 text-base font-medium text-[#86868b] items-center">
          <a href="#projects" className="hover:text-[#1d1d1f] transition-colors duration-300">Projects</a>
          <a href="#tools" className="hover:text-[#1d1d1f] transition-colors duration-300">Tools</a>
          <a href="#skills" className="hover:text-[#1d1d1f] transition-colors duration-300">Skills</a>
          <button onClick={onOpenContact} className="hover:text-[#1d1d1f] transition-colors duration-300">Contact</button>
          
          <a 
            href="/resume/huthaifa_resume.pdf" 
            download="huthaifa_resume.pdf"
            className="flex items-center gap-1.5 bg-[#1d1d1f] text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-transform hover:-translate-y-0.5 duration-300 shadow-sm"
          >
            <span>Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a>
        </div>

        <button 
          className="md:hidden p-2 text-[#1d1d1f] mr-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 w-[calc(100%-2rem)] max-w-sm bg-white/95 backdrop-blur-2xl border border-gray-200/50 rounded-3xl shadow-2xl py-6 px-6 flex flex-col space-y-5 text-center z-40">
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-[#86868b] hover:text-[#1d1d1f]">Projects</a>
          <a href="#tools" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-[#86868b] hover:text-[#1d1d1f]">Tools</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-[#86868b] hover:text-[#1d1d1f]">Skills</a>
          <button onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }} className="text-lg font-medium text-[#86868b] hover:text-[#1d1d1f]">Contact</button>
          
          <div className="pt-5 mt-2 border-t border-gray-100 flex justify-center">
            <a 
              href="/resume/huthaifa_resume.pdf" 
              download="huthaifa_resume.pdf"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 bg-[#1d1d1f] text-white px-6 py-3.5 rounded-full hover:bg-gray-800 transition-colors shadow-sm w-full justify-center font-medium"
            >
              <span>Download Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}