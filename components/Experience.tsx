'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const experiences = [
  {
    date: '2024 – Present',
    title: 'CEO & Founder',
    company: 'TapOrbit Studios',
    desc: 'Game development & publishing studio. Product strategy, team leadership, concept-to-launch pipeline.',
  },
  {
    date: '2023 – Present',
    title: 'Data & Automation Engineer',
    company: 'Amazon',
    desc: '36 ETL pipelines, AI agent orchestration, Python/SQL automation, QuickSight dashboards, 320+ weekly automated outputs.',
  },
  {
    date: '2021 – 2023',
    title: 'Operations Technologist',
    company: 'Amazon',
    desc: 'Process optimization, real-time operational reporting, inventory analytics, cross-functional automation.',
  },
  {
    date: '2017 – 2021',
    title: 'Software Developer',
    company: 'Toronto Startups',
    desc: 'Full-stack development, Unity/C#, React, project management across multiple game and web projects.',
  },
  {
    date: '2015 – 2016',
    title: 'Game Programmer',
    company: 'Ruckus Games / Transhumanoid',
    desc: 'Gameplay systems, UI programming, iOS/Android builds, Git version control.',
  },
]

export default function Experience() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-16">Experience</h2>

      <div className="relative w-full max-w-2xl" style={{ height: expanded ? 'auto' : '400px' }}>
        <AnimatePresence mode="wait">
          {!expanded ? (
            <motion.div
              key="stacked"
              className="relative h-[400px] flex items-center justify-center cursor-pointer"
              onClick={() => setExpanded(true)}
            >
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  className="absolute glass rounded-xl p-6 w-[90%] max-w-md"
                  style={{ zIndex: experiences.length - i }}
                  initial={false}
                  animate={{
                    rotate: (i - 2) * 4,
                    y: i * -4,
                    scale: 1 - i * 0.02,
                    opacity: 1 - i * 0.15,
                  }}
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <span className="text-sm text-cyan-400">{exp.date}</span>
                  <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                  <p className="text-neutral-500 text-sm">{exp.company}</p>
                  <p className="text-neutral-400 text-sm mt-2">{exp.desc}</p>
                </motion.div>
              ))}
              <p className="absolute -bottom-8 text-neutral-500 text-sm">Click to expand</p>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              className="flex flex-col gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  className="glass rounded-xl p-6"
                  initial={{ opacity: 0, x: -30, rotate: (i - 2) * 4 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ delay: i * 0.1, type: 'spring' }}
                >
                  <span className="text-sm text-cyan-400">{exp.date}</span>
                  <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                  <p className="text-neutral-500 text-sm">{exp.company}</p>
                  <p className="text-neutral-400 mt-2">{exp.desc}</p>
                </motion.div>
              ))}
              <button
                onClick={() => setExpanded(false)}
                className="text-neutral-500 text-sm hover:text-cyan-400 transition mt-4"
              >
                ← Collapse
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
