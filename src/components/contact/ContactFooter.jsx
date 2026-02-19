import FadeIn from '../FadeIn'
import { contactLinks } from '../../data/contactLinks'

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative z-10 w-full border-t border-gray-200/50 bg-white/40 backdrop-blur-lg mt-12 py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-12 text-center">Let's Connect.</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
          {contactLinks.map((contact, index) => (
            <FadeIn key={index} delay={index * 100}>
              <a href={contact.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-8 bg-white/80 rounded-[2rem] shadow-sm border border-white/60 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group h-full text-center">
                <div className="w-14 h-14 bg-gray-100 text-[#1d1d1f] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1d1d1f] group-hover:text-white transition-colors duration-300">
                  {contact.icon}
                </div>
                <p className="text-sm text-[#86868b] font-medium mb-2">{contact.label}</p>
                <p className="text-[#1d1d1f] font-semibold text-sm break-all">{contact.value}</p>
              </a>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={400}>
          <p className="text-[#86868b] text-sm mt-16 text-center font-medium">
            &copy; {new Date().getFullYear()} Huthaifa Maan. All rights reserved.
          </p>
        </FadeIn>
      </div>
    </footer>
  )
}