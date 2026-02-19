import FadeIn from '../FadeIn'

export default function Skills() {
  const technicalSkills = [
    'Flutter / Dart',
    'Clean Architecture',
    'BLoC / Cubit',
    'Dio & HTTP',
    'UI/UX Design',
    'iOS Development',
    'Android Development',
  ]

  const professionalSkills = [
    'Team Leadership',
    'Cross-functional Communication',
  ]

  return (
    <section id="skills" className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">Skills & Expertise.</h2>
          <p className="text-xl text-[#86868b] font-medium">A comprehensive overview of my technical capabilities and professional strengths.</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <FadeIn delay={100}>
          <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 md:p-14 h-full">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-8 tracking-tight">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-white text-[#1d1d1f] rounded-full text-sm font-semibold tracking-wide border border-gray-200 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 md:p-14 h-full">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-8 tracking-tight">Professional Skills</h3>
            <div className="flex flex-wrap gap-3">
              {professionalSkills.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-white text-[#1d1d1f] rounded-full text-sm font-semibold tracking-wide border border-gray-200 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}