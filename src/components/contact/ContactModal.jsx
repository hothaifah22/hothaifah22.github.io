import { contactLinks } from '../../data/contactLinks'

export default function ContactModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-xl px-4">
      <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-10 md:p-14 w-full max-w-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-black transition-colors p-2 bg-gray-100 rounded-full hover:bg-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 className="text-3xl font-bold text-[#1d1d1f] mb-8 tracking-tight text-center">Get in Touch</h3>
        <div className="flex flex-col space-y-6">
          {contactLinks.map((contact, index) => (
            <a key={index} href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center p-5 bg-white rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gray-100 text-[#1d1d1f] rounded-full flex items-center justify-center mr-6 group-hover:bg-[#1d1d1f] group-hover:text-white transition-colors duration-300">
                {contact.icon}
              </div>
              <div>
                <p className="text-sm text-[#86868b] font-medium mb-1">{contact.label}</p>
                <p className="text-[#1d1d1f] font-semibold md:text-lg break-all">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}