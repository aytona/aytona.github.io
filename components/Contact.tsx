'use client'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">Get In Touch</h2>
      <p className="text-neutral-400 mb-12 text-center max-w-md">
        Open to opportunities, collaborations, and interesting conversations.
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        {[
          { label: 'Email', href: 'mailto:christopher.aytona@gmail.com', icon: '✉' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/christopheraytona', icon: 'in' },
          { label: 'GitHub', href: 'https://github.com/aytona', icon: '⌘' },
        ].map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener"
            className="glass px-8 py-4 rounded-xl hover:border-cyan-400/30 transition-colors magnetic-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl mr-3">{link.icon}</span>
            <span>{link.label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
