'use client'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Nova',
    date: 'Q2 2026',
    desc: 'AI-powered operations assistant responding to @mentions across 40+ monitored Slack channels. Executes approved automation scripts on request with rate limiting, safety guardrails, and audit logging.',
    tools: ['Python', 'LLM API', 'Slack API'],
    impact: '800+ active users across 35+ sites with instant self-service automation — eliminated analyst bottleneck for routine requests',
  },
  {
    title: 'Ticket Auto-Resolver',
    date: 'Q2 2026',
    desc: 'AI triage system that detects self-recovered job failures, auto-resolves tickets with root cause analysis, and escalates unresolvable issues with context.',
    tools: ['Python', 'LLM API', 'Ticketing API', 'Cron'],
    impact: 'Resolution time reduced from 24–48 hours to under 1 hour for transient failures across 36 monitored ETL jobs',
  },
  {
    title: 'Attendance & Shift Overstay Monitor',
    date: 'Q2 2026',
    desc: 'Real-time working hours compliance system monitoring 8 fulfillment centers for associates exceeding overtime thresholds, plus a retroactive audit layer catching edge cases missed by the primary check.',
    tools: ['Python', 'REST APIs', 'Slack Webhooks', 'SQLite'],
    impact: '17 scheduled scripts across 8 sites — replaced weekly manual Excel reviews with hourly automated compliance checks',
  },
  {
    title: 'TOM Department Labour Tracker',
    date: 'Q2 2026',
    desc: 'Automated labour metrics reporting for Transportation Operations Management teams, tracking hours and headcount across multiple fulfillment centers with shift-aligned delivery.',
    tools: ['Python', 'SQL', 'Slack Webhooks'],
    impact: 'Deployed across 4 sites — replaced 2+ hours of daily manual data pulls per site with zero-touch automated delivery',
  },
  {
    title: 'DART Coaching Tracker',
    date: 'Q2 2026',
    desc: 'Full-stack web application for tracking and managing associate coaching records with AI-classified Slack thread responses, automated notifications, audit trails, and manager dashboards.',
    tools: ['Flask', 'AWS Lambda', 'DynamoDB', 'AWS Bedrock', 'S3', 'Slack API', 'ECS Fargate'],
    impact: 'Centralized coaching visibility — replaced fragmented spreadsheet tracking with a single auditable system for all site managers',
  },
  {
    title: 'TRB Reporting (NAEF)',
    date: 'Q3 2025',
    desc: 'Network-wide monitoring system tracking capacity constraint activations across 3P sites — duration, timing, process path impact, and customer service level effects via cross-account data pipelines.',
    tools: ['SQL', 'ETL Scheduling', 'S3', 'Lambda', 'Cross-Account IAM'],
    impact: 'First centralized view of network capacity constraints — adopted by NAEF operations leadership for daily decision-making',
  },
  {
    title: 'Pick Density Dashboard',
    date: 'Q3 2025',
    desc: 'Interactive dashboard with pick path optimization heatmaps and productivity correlation analysis, enabling operations to identify inefficient storage layouts without analyst support.',
    tools: ['QuickSight', 'SQL', 'ETL Pipelines'],
    impact: '3 QuickSight dashboards — converted ad-hoc analyst requests into self-service drill-down analytics for operations managers',
  },
  {
    title: 'Outbound BL Tracker',
    date: 'Q1 2025',
    desc: 'Real-time backlog monitoring system tracking outbound capacity utilization, delivering hourly alerts to regional operations managers when thresholds are breached.',
    tools: ['Python', 'SQL', 'Slack Webhooks'],
    impact: 'Deployed across 6 fulfillment centers — used daily by regional leadership to balance labour allocation against volume surges',
  },
  {
    title: 'XLFC Lagrange Accuracy',
    date: 'Q1 2025',
    desc: 'Daily automated accuracy reporting comparing forecast model predictions against actual throughput, delivered to regional leadership for calibration decisions.',
    tools: ['Python', 'SQL', 'VBA', 'Automated Email'],
    impact: 'Surfaced forecast drift that was previously invisible until post-mortem — enabled proactive model corrections at the regional level',
  },
  {
    title: 'Job Rotation Safety Webhook',
    date: 'Q1 2025',
    desc: 'Automated ergonomic safety system flagging associates in the same process path for 5+ consecutive hours, delivering hourly Slack notifications to prompt rotation and reduce repetitive strain injury risk.',
    tools: ['Python', 'REST APIs', 'Slack Webhooks'],
    impact: 'Adopted across 4 sites as network standard (NASC N3) — eliminated manual Excel-based rotation tracking for injury prevention',
  },
]

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [expanded, setExpanded] = useState<number | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => setVisibleCount(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = Math.max(0, projects.length - visibleCount)
  const prev = () => setCurrent(i => Math.max(0, i - 1))
  const next = () => setCurrent(i => Math.min(maxIndex, i + 1))
  const dotCount = maxIndex + 1

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Projects</h2>
      <p className="text-neutral-500 mb-12">Data engineering & automation at enterprise scale</p>

      <div className="relative w-full max-w-5xl">
        {/* Arrows */}
        {current > 0 && (
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-xl hover:border-cyan-400/30 transition-colors">
            ‹
          </button>
        )}
        {current < maxIndex && (
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-xl hover:border-cyan-400/30 transition-colors">
            ›
          </button>
        )}

        {/* Track */}
        <div className="overflow-hidden px-1">
          <div
            ref={trackRef}
            className="flex gap-4 transition-transform duration-400 ease-out"
            style={{ transform: `translateX(calc(-${current} * (${100 / visibleCount}% + ${16 / visibleCount}px)))` }}
          >
            {projects.map((p, i) => (
              <motion.div
                key={i}
                className="glass rounded-xl p-6 group flex flex-col justify-between flex-shrink-0 cursor-pointer"
                style={{ width: `calc((100% - ${(visibleCount - 1) * 16}px) / ${visibleCount})` }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % visibleCount) * 0.1 }}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div>
                  <span className="text-[11px] text-cyan-400 font-medium">{p.date}</span>
                  <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors mt-1">{p.title}</h3>
                  <p className={`text-neutral-500 text-sm mt-2 ${expanded === i ? '' : 'line-clamp-3'}`}>{p.desc}</p>
                  {expanded !== i && <span className="text-[10px] text-neutral-600 mt-1 block">tap to expand</span>}
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
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: dotCount }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-cyan-400' : 'bg-neutral-700 hover:bg-neutral-500'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
