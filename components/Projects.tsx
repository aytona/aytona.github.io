'use client'
import { motion } from 'framer-motion'

const projects = [
  { title: 'AI Agent Platform', desc: 'Autonomous orchestration system — 24 agents, 125 skills, persistent memory', size: 'col-span-2 row-span-2' },
  { title: 'FC Analytics Suite', desc: '36 ETL pipelines, 13 webhooks, 320+ weekly outputs', size: 'col-span-1 row-span-1' },
  { title: 'TapOrbit Studios', desc: 'Game development & publishing company', size: 'col-span-1 row-span-1' },
  { title: 'Inventory Optimization', desc: 'Cross-FC ASIN comparison & QuickSight dashboards', size: 'col-span-1 row-span-2' },
  { title: 'Dark Spirits', desc: 'Unity 3D action RPG — gameplay systems & AI', size: 'col-span-1 row-span-1' },
  { title: 'Synapse', desc: 'Multiplayer puzzle game — networking & state sync', size: 'col-span-1 row-span-1' },
]

export default function Projects() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-16">Projects</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl w-full auto-rows-[180px]">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className={`glass rounded-xl p-6 hover:scale-[1.03] transition-transform cursor-pointer group ${p.size}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">{p.title}</h3>
            <p className="text-neutral-500 text-sm mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
