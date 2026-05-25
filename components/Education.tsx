'use client'
import { motion } from 'framer-motion'

const education = [
  { degree: 'BCS Computer Science', school: 'Ontario Tech University', year: '2021', gpa: '3.65' },
  { degree: 'Adv. Diploma Game Programming', school: 'George Brown College', year: '2017', gpa: '3.6 — Honours' },
]

export default function Education() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-16">Education</h2>
      <div className="flex flex-col gap-8 max-w-xl w-full">
        {education.map((ed, i) => (
          <motion.div
            key={i}
            className="glass rounded-xl p-8"
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <p className="text-cyan-400 text-sm">{ed.year}</p>
            <h3 className="text-xl font-bold mt-1">{ed.degree}</h3>
            <p className="text-neutral-500">{ed.school}</p>
            <p className="text-neutral-600 text-sm mt-1">GPA: {ed.gpa}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
