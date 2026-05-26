'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'FC Analytics Platform',
    desc: 'End-to-end data infrastructure — ETL pipelines feeding KPI dashboards, branded email reports, and Slack automations across multiple fulfillment networks.',
    tools: ['Python', 'SQL', 'Redshift', 'QuickSight', 'Datanet'],
    impact: '320+ weekly outputs, multi-FTE workload automated',
    size: 'col-span-2 row-span-2',
  },
  {
    title: 'AI Agent Orchestration',
    desc: 'Autonomous platform with persistent memory, scheduled jobs, and multi-session coordination — handling operational tasks without human intervention.',
    tools: ['Python', 'Claude API', 'Slack', 'AWS'],
    impact: 'Replaced manual operational workflows at enterprise scale',
    size: 'col-span-1 row-span-2',
  },
  {
    title: 'Cross-Network Monitoring',
    desc: 'Automated detection and alerting spanning AMXL, NAEF, Canadian fulfillment, and delivery station networks coast to coast.',
    tools: ['AWS Lambda', 'SQS', 'DynamoDB', 'Slack'],
    impact: 'Real-time risk flagging across North America',
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Inventory Optimization',
    desc: 'Cross-FC exclusive ASIN comparison identifying transfer candidates between warehouses using Redshift Spectrum at scale.',
    tools: ['SQL', 'QuickSight', 'Redshift Spectrum'],
    impact: 'Surfaced misallocated inventory across network',
    size: 'col-span-1 row-span-1',
  },
  {
    title: 'Operational Tooling Suite',
    desc: 'VBA macros, Python programs, browser automations, and Slack integrations — self-refreshing analytics adopted by multiple teams beyond originating site.',
    tools: ['Python', 'VBA', 'Playwright', 'Slack API'],
    impact: 'Used daily by ops teams, analysts, and leadership',
    size: 'col-span-1 row-span-1',
  },
]

const sideProjects = [
  { title: 'TapOrbit Studios', desc: 'Game development & publishing company (CEO/Founder)' },
  { title: 'Dark Spirits', desc: 'Unity 3D action RPG — gameplay systems & AI' },
  { title: 'Synapse', desc: 'Multiplayer puzzle game — networking & state sync' },
]

export default function Projects() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Projects</h2>
      <p className="text-neutral-500 mb-16">Data engineering & automation at enterprise scale</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl w-full auto-rows-[180px]">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className={`glass rounded-xl p-6 group ${p.size} flex flex-col justify-between`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div>
              <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">{p.title}</h3>
              <p className="text-neutral-500 text-sm mt-2">{p.desc}</p>
            </div>
            <div className="mt-auto pt-3">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {p.tools.map(t => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400">{t}</span>
                ))}
              </div>
              <p className="text-xs text-pink-400 font-medium">↗ {p.impact}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <details className="mt-12 max-w-5xl w-full">
        <summary className="text-neutral-500 text-sm cursor-pointer hover:text-cyan-400 transition">
          + Side Projects & Game Development
        </summary>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {sideProjects.map((p, i) => (
            <div key={i} className="glass rounded-xl p-4">
              <h4 className="font-bold text-sm">{p.title}</h4>
              <p className="text-neutral-500 text-xs mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
      </details>
    </section>
  )
}
