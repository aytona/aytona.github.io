'use client'
import { motion } from 'framer-motion'

const experiences = [
  {
    date: '2023 – Present',
    title: 'Data & Automation Engineer',
    company: 'Amazon (YGK1 AMXL)',
    desc: '36 ETL pipelines, AI agent orchestration (24 agents, 125 skills), QuickSight dashboards, Python/SQL automation. 320+ weekly automated outputs eliminating 40+ hours of manual work.',
  },
  {
    date: '2021 – 2023',
    title: 'Process Assistant → Operations Analyst',
    company: 'Amazon (YOO1)',
    desc: 'Managed shift operations for 50+ associates across inbound process paths. Stretched as Bin Meister — owning site space management, pick path optimization, bin audits, and capacity planning. Started as Inbound Problem Solve (Process Guide stretch), resolving receive exceptions and inventory discrepancies. Built Python/SQL automation that led to rapid promotion and pivot into data engineering.',
  },
  {
    date: '2024 – Present',
    title: 'CEO & Founder',
    company: 'TapOrbit Studios',
    desc: 'Game development & publishing studio. Product strategy, team leadership, concept-to-launch pipeline.',
    side: true,
  },
  {
    date: '2017 – 2021',
    title: 'Software Developer',
    company: 'Various Studios (Toronto)',
    desc: 'Full-stack development across game and web projects. Unity/C#, React, project management. Shipped 3 titles.',
  },
  {
    date: '2015 – 2016',
    title: 'Game Programmer',
    company: 'Ruckus Games / Transhumanoid',
    desc: 'Gameplay systems, UI programming, iOS/Android builds. First industry role during college.',
  },
]

export default function Experience() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-16">Experience</h2>

      <div className="relative max-w-2xl w-full">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-pink-500/50 to-transparent" />

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`relative pl-12 ${exp.side ? 'opacity-80' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Timeline dot */}
              <div className={`absolute left-2.5 top-2 w-3 h-3 rounded-full ${exp.side ? 'bg-pink-500' : 'bg-cyan-400'}`} />

              <div className="glass rounded-xl p-5">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-sm text-cyan-400 font-medium">{exp.date}</span>
                  {exp.side && <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-400">Side Venture</span>}
                </div>
                <h3 className="text-lg font-bold">{exp.title}</h3>
                <p className="text-neutral-500 text-sm">{exp.company}</p>
                <p className="text-neutral-400 text-sm mt-2">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
