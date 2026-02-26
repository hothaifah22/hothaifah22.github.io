import { useEffect } from 'react'

export default function PdfModal({ pdfUrl, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const fileName = pdfUrl.split('/').pop()

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 backdrop-blur-2xl transition-all duration-300">
      
      <div className="absolute inset-0 cursor-pointer" onClick={onClose}></div>

      <div className="relative z-10 w-full max-w-5xl h-[90vh] flex flex-col">
        
        <div className="flex justify-end items-center gap-3 mb-4 w-full">
          <a 
            href={pdfUrl}
            download={fileName}
            className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-white/70 dark:bg-[#24242c]/70 backdrop-blur-xl border border-white/50 dark:border-white/10 text-[#1d1d1f] dark:text-white rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 font-medium text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span className="hidden sm:inline">Download</span>
          </a>

          <button 
            onClick={onClose}
            className="p-2 md:p-2.5 rounded-full transition-all duration-300 bg-red-500 hover:bg-red-600 hover:-translate-y-1 text-white shadow-sm hover:shadow-md"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 w-full bg-white dark:bg-[#1e1e2f] rounded-2xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden border border-gray-200 dark:border-white/10">
          <iframe 
            src={`${pdfUrl}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`} 
            className="w-full h-full border-none bg-white rounded-2xl md:rounded-3xl"
            title="PDF Document"
          />
        </div>
        
      </div>
    </div>
  )
}