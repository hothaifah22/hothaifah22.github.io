import FadeIn from '../FadeIn'

export default function PolarisProject({ onOpenSlider }) {
  return (
    <FadeIn>
      <div className="flex flex-col lg:flex-row-reverse items-stretch bg-white/60 backdrop-blur-xl border border-white/50 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
        <div className="w-full lg:w-1/2 p-12 md:p-16 flex flex-col items-start justify-center">
          <div className="w-32 h-32 mb-8">
            <img src="/images/polaris/polaris_icon.png" alt="Polaris Icon" className="w-full h-full object-cover drop-shadow-xl" />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">Polaris Mobile</h3>
          <p className="text-[#86868b] text-xl md:text-2xl mb-6 font-medium">Advanced ERP System</p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-white text-[#1d1d1f] rounded-full text-sm font-semibold tracking-wide border border-gray-200 shadow-sm">Flutter / Dart</span>
            <span className="px-4 py-2 bg-white text-[#1d1d1f] rounded-full text-sm font-semibold tracking-wide border border-gray-200 shadow-sm">Clean Architecture</span>
            <span className="px-4 py-2 bg-white text-[#1d1d1f] rounded-full text-sm font-semibold tracking-wide border border-gray-200 shadow-sm">BLoC / Cubit</span>
            <span className="px-4 py-2 bg-white text-[#1d1d1f] rounded-full text-sm font-semibold tracking-wide border border-gray-200 shadow-sm">Dio</span>
          </div>

          <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8 text-sm md:text-base w-full">
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f]">Frontend</span><span className="text-[#86868b]">Flutter / Dart</span></div>
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f]">Backend</span><span className="text-[#86868b]">Python Sanic</span></div>
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f]">State Management</span><span className="text-[#86868b]">BLoC / Cubit</span></div>
            <div className="flex flex-col"><span className="font-semibold text-[#1d1d1f]">Networking</span><span className="text-[#86868b]">Dio</span></div>
          </div>
          
          <p className="text-[#1d1d1f] text-lg opacity-90 leading-relaxed font-bold">
            I was the Flutter Team Leader for this project and took full responsibility for debugging and deploying on iOS.
          </p>
        </div>
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-purple-50 to-purple-100/40 p-12 md:p-16 flex justify-center items-center min-h-[500px] relative">
          <div className="relative w-full max-w-[400px] h-[500px] flex items-center justify-center">
            <div className="absolute left-0 lg:left-6 w-[220px] lg:w-[260px] -translate-x-4 -translate-y-6 scale-90 transition-transform duration-500">
              <img src="/images/polaris/polaris7.png" alt="Polaris App Background" className="w-full h-auto object-contain" />
            </div>
            <div className="relative z-10 w-[240px] lg:w-[280px] translate-x-6 lg:translate-x-12 translate-y-4 transition-transform duration-500 hover:-translate-y-2">
              <img src="/images/polaris/polaris.png" alt="Polaris App Main" className="w-full h-auto object-contain" />
            </div>
          </div>

          <button 
            onClick={onOpenSlider}
            className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-20 bg-white/90 backdrop-blur-md border border-gray-200 text-[#1d1d1f] px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-semibold text-sm flex items-center gap-2 hover:bg-white hover:scale-105 transition-all duration-300"
          >
            See more <span className="text-lg leading-none mt-[-2px]">&gt;</span>
          </button>
        </div>
      </div>
    </FadeIn>
  )
}