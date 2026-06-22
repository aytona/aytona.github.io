'use client'
import { motion } from 'framer-motion'

const publications = [
  {
    title: 'SHARD: Self-Healing Autonomous Resilient Delegation — A Pattern Language for Persistent AI Agent Harnesses',
    authors: 'Christopher Aytona',
    year: 2026,
    venue: 'Zenodo / SSRN (preprint)',
    status: 'published',
    doi: '10.5281/zenodo.20474819',
    links: {
      zenodo: 'https://doi.org/10.5281/zenodo.20474819',
      ssrn: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6898739',
    },
    abstract:
      'Large language model agents deployed in persistent, multi-session environments face compounding challenges: memory degrades without governance, coordination between concurrent agents lacks formal guarantees, skill acquisition proceeds without quality control, and self-improvement operates without safety bounds. We present SHARD (Self-Healing Agent with Resilient Delegation), a harness-agnostic application architecture that composes four independent subsystems—memory governance with staleness detection, intent-based coordination protocol, quality-gated skill lifecycle with trust tiers, and safety-constrained self-improvement—into an integrated infrastructure where emergent behaviors arise from their interaction.',
    tags: ['AI Agents', 'Resilience', 'Self-Healing', 'Architecture Patterns'],
  },
  {
    title: 'Context Economics: Resource-Efficient Architectures for Persistent Agent Systems',
    authors: 'Christopher Aytona',
    year: 2026,
    venue: 'In Progress',
    status: 'in-progress',
    doi: null,
    links: {},
    abstract:
      'Persistent LLM agent systems consume unbounded resources as context windows fill with tool schemas, memory segments, and session history. This work reframes resource constraints as architectural primitives rather than limitations, proposing three mechanisms — lazy MCP loading, tiered context injection, and zero-token routing — that reduce per-session overhead by 60–75% while preserving capability. Builds on the SHARD framework to make persistent agent architectures economically sustainable at scale.',
    tags: ['Context Efficiency', 'Model Routing', 'Agent Economics', 'Zero-Token Routing'],
  },
]

export default function Research() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Research</h2>
      <p className="text-neutral-500 mb-16">Academic publications & preprints</p>

      <div className="max-w-3xl w-full space-y-6">
        {publications.map((pub, i) => (
          <motion.article
            key={i}
            className="glass rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold leading-snug">{pub.title}</h3>
              {pub.status === 'in-progress' && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 whitespace-nowrap flex-shrink-0">
                  In Progress
                </span>
              )}
            </div>
            <p className="text-neutral-500 text-sm mt-1">
              {pub.authors} · {pub.year} · {pub.venue}
            </p>
            <p className="text-neutral-400 text-sm mt-3">{pub.abstract}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {pub.tags.map(t => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400">
                  {t}
                </span>
              ))}
            </div>
            {Object.keys(pub.links).length > 0 && (
              <div className="flex gap-3 mt-4">
                {Object.entries(pub.links).map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1)} ↗
                  </a>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}
