'use client'
import { motion } from 'framer-motion'

const experiences = [
  {
    date: '2021 – Present',
    title: 'Data and Reporting Analyst',
    company: 'Amazon',
    desc: 'A continually growing suite of ETL pipelines, AI agent orchestration, QuickSight dashboards, and Python/SQL automation — hundreds of automated outputs each week that eliminate dozens of hours of manual work across multiple fulfillment networks.',
  },
  {
    date: '2025 – Present',
    title: 'CEO & Founder',
    company: 'TapOrbit Studios',
    desc: 'Game development & publishing studio. Shipped debut title Zombie Citizen to iOS & Android; currently developing Everlasting Odyssey, a tactical RPG for PC & console. Product strategy, team leadership, concept-to-launch pipeline.',
    side: true,
  },
  {
    date: '2018 – 2019',
    title: 'Software Developer',
    company: 'Treasured',
    desc: 'Full-stack development across game and web projects. Unity/C#, React, project management.',
  },
  {
    date: '2016 – 2018',
    title: 'Game Developer',
    company: 'Transhumanoid Productions',
    desc: 'Gameplay systems, UI programming, and full development lifecycle on indie titles.',
  },
  {
    date: '2014 – 2017',
    title: 'Game Developer',
    company: 'Ruckus Games',
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
