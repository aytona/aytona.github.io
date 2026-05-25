'use client'
import { motion } from 'framer-motion'

const posts = [
  {
    title: 'Building an AI Agent Orchestration Platform',
    date: '2026-05-10',
    tags: ['AI', 'Python', 'Architecture'],
    excerpt: 'How I built a system that manages 24 autonomous agents, 125 skills, and processes 320+ automated outputs weekly.',
    slug: 'ai-agent-platform',
  },
  {
    title: 'From Fulfillment Associate to Data Engineer',
    date: '2026-04-15',
    tags: ['Career', 'Growth'],
    excerpt: 'My journey from scanning packages on the warehouse floor to building the automation that runs it.',
    slug: 'career-journey',
  },
  {
    title: 'Launching TapOrbit Studios',
    date: '2026-03-01',
    tags: ['Entrepreneurship', 'Game Dev'],
    excerpt: 'Why I started a game development company and what I learned about building teams from concept to launch.',
    slug: 'launching-taporbit',
  },
]

export default function Blog() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Blog</h2>
      <p className="text-neutral-500 mb-16">Thoughts on engineering, automation, and building things.</p>
      <div className="flex flex-col gap-6 max-w-2xl w-full">
        {posts.map((post, i) => (
          <motion.article
            key={i}
            className="glass rounded-xl p-6 hover:border-cyan-400/20 transition-all cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ x: 8 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <time className="text-xs text-neutral-600">{post.date}</time>
              {post.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-neutral-500 text-sm mt-2">{post.excerpt}</p>
          </motion.article>
        ))}
      </div>
      <p className="text-neutral-600 text-sm mt-8">More posts coming soon →</p>
    </section>
  )
}
