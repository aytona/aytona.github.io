'use client'
import { motion } from 'framer-motion'

const publications = [
  {
    title: 'SHARD: Self-Healing Autonomous Resilient Delegation — A Pattern Language for Persistent AI Agent Harnesses',
    authors: 'Christopher Aytona',
    year: 2026,
    venue: 'Zenodo / SSRN (preprint)',
    doi: '10.5281/zenodo.20474819',
    links: {
      zenodo: 'https://doi.org/10.5281/zenodo.20474819',
      ssrn: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6898739',
    },
    abstract:
      'Proposes six architectural patterns for building persistent AI agent harnesses that self-heal, delegate across failure boundaries, and maintain operational continuity without human intervention. Extracted from 25 months of production evolution.',
    tags: ['AI Agents', 'Resilience', 'Self-Healing', 'Architecture Patterns'],
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
            <h3 className="text-lg font-bold leading-snug">{pub.title}</h3>
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
          </motion.article>
        ))}
      </div>
    </section>
  )
}
