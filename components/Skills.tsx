'use client'
import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', radius: 120, speed: 20 },
  { name: 'SQL', radius: 120, speed: 25 },
  { name: 'TypeScript', radius: 160, speed: 30 },
  { name: 'Data Viz', radius: 160, speed: 35 },
  { name: 'ETL/Pipelines', radius: 200, speed: 40 },
  { name: 'AI/ML', radius: 200, speed: 45 },
  { name: 'Unity/C#', radius: 240, speed: 50 },
  { name: 'React', radius: 240, speed: 55 },
  { name: 'AWS', radius: 280, speed: 60 },
  { name: 'Leadership', radius: 280, speed: 65 },
]

export default function Skills() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-16">Skills</h2>
      <div className="relative w-[600px] h-[600px] max-w-full">
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500" />
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: skill.speed, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="glass px-3 py-1.5 rounded-full text-sm whitespace-nowrap"
              style={{ transform: `translateX(${skill.radius}px) rotate(-${360}deg)` }}
            >
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
