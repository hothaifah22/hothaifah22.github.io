import FadeIn from '../FadeIn'

export default function AjeerProject({ onOpenSlider }) {
  return (
    <FadeIn>
      <div className="flex flex-col lg:flex-row items-stretch bg-white/60 backdrop-blur-xl border border-white/50 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
        <div className="w-full lg:w-1/2 p-12 md:p-16 flex flex-col items-start justify-center">
          <div className="w-32 h-32 mb-8">
            <img src="/images/ajeer/ajeer_icon.png" alt="Ajeer Icon" className="w-full h-full object-cover drop-shadow-xl" />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">Ajeer Mobile</h3>
          <p className="text-[#86868b] text-xl md:text-2xl mb-6 font-medium">Home Services Booking App</p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-white text-[#1d1d1f] rounded-full text-sm font-semibold tracking-wide border border-gray-200 shadow-sm">Flutter / Dart</span>
            <span className="px-4 py-2 bg-white text-[#1d1d1f] rounded-full text-sm font-semibold tracking-wide border border-gray-200 shadow-sm">UI/UX Design</span>
          </div>

          <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8 text-sm md:text-base w-full">
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f]">Frontend</span><span className="text-[#86868b]">Flutter / Dart</span></div>
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f]">Backend</span><span className="text-[#86868b]">.NET</span></div>
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f]">State Management</span><span className="text-[#86868b]">Provider</span></div>
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f]">Networking</span><span className="text-[#86868b]">HTTP</span></div>
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f]">Database</span><span className="text-[#86868b]">SQL Server</span></div>
          </div>
          
          <p className="text-[#1d1d1f] text-lg opacity-90 leading-relaxed font-bold">
            This was the first iOS application ever built and deployed for the Prince Al-Hussein bin Abdullah II Faculty of Information Technology at The Hashemite University. I took full responsibility for its iOS development using Xcode, utilized Docker for database integration, and designed the complete UI/UX.
          </p>
        </div>
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 to-blue-100/40 p-12 md:p-16 flex justify-center items-center min-h-[500px] relative">
          <div className="relative w-full max-w-[400px] h-[500px] flex items-center justify-center">
            <div className="absolute right-0 lg:right-6 w-[220px] lg:w-[260px] translate-x-4 -translate-y-6 scale-90 transition-transform duration-500">
              <img src="/images/ajeer/ajeer9.png" alt="Ajeer App Background" className="w-full h-auto object-contain" />
            </div>
            <div className="relative z-10 w-[240px] lg:w-[280px] -translate-x-6 lg:-translate-x-12 translate-y-4 transition-transform duration-500 hover:-translate-y-2">
              <img src="/images/ajeer/ajeer.png" alt="Ajeer App Main" className="w-full h-auto object-contain" />
            </div>
          </div>
          
          <button 
            onClick={onOpenSlider}
            className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 z-20 bg-white/90 backdrop-blur-md border border-gray-200 text-[#1d1d1f] px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-semibold text-sm flex items-center gap-2 hover:bg-white hover:scale-105 transition-all duration-300"
          >
            See more <span className="text-lg leading-none mt-[-2px]">&gt;</span>
          </button>
        </div>
      </div>
    </FadeIn>
  )
}