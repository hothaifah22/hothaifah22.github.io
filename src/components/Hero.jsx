import FadeIn from './FadeIn'
import profilePic from '../assets/huthaifa.jpg'

export default function Hero() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto pt-40 pb-12">
      <FadeIn delay={100}>
        <div className="relative mb-10 mx-auto w-48 h-48 md:w-56 md:h-56">
          <div className="w-full h-full rounded-full overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-4 border-white/60">
            <img 
              src={profilePic} 
              alt="Hothaifah" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="inline-block mb-8 px-5 py-2 rounded-full bg-white/60 border border-gray-200/50 shadow-sm backdrop-blur-md">
          <span className="text-base font-medium text-[#86868b] tracking-wide">Mobile Developer & UI/UX Designer</span>
        </div>
      </FadeIn>
      
      <FadeIn delay={300}>
        <h1 className="text-6xl md:text-[5.5rem] leading-tight font-bold tracking-tight mb-8 text-[#1d1d1f]">
          Building clean, functional <br className="hidden md:block" /> mobile apps.
        </h1>
      </FadeIn>
      
      <FadeIn delay={400}>
        <p className="text-2xl md:text-3xl text-[#86868b] max-w-4xl leading-relaxed font-medium">
          I specialize in transforming UI/UX designs into high-performance iOS and Android applications using Flutter. My focus is on writing scalable, maintainable code using Clean Architecture, BLoC/Cubit for state management, and Dio for seamless backend integration.
        </p>
      </FadeIn>
    </main>
  )
}