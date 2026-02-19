import { useState } from 'react'

export default function ImageSlider({ images, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  if (!images || images.length === 0) return null

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl">
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-black/70 hover:text-black transition-colors p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-12 text-black/70 hover:text-black transition-colors p-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <div className="w-[85%] max-w-4xl h-[85vh] flex items-center justify-center">
        <img 
          src={images[currentSlide]} 
          alt={`Screenshot ${currentSlide}`} 
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-12 text-black/70 hover:text-black transition-colors p-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      
      <div className="absolute bottom-8 text-black/60 font-medium tracking-widest text-sm">
        {currentSlide + 1} / {images.length}
      </div>
    </div>
  )
}