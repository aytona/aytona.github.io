'use client'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Thank you for your help and for the time you dedicated to supporting my site with setting up the labor tracking alerts channel. We greatly appreciate the solution you provided and your continued support.',
    name: 'Khalil G.',
    role: 'Transportation Operations Manager',
  },
  {
    quote: 'Thank you for your detailed review of my work! I appreciate your thorough feedback and commitment to high standards.',
    name: 'Pavan P.',
    role: 'Area Manager',
    lps: 'Dive Deep · Deliver Results',
  },
  {
    quote: 'Thanks for leading such a great fun and engaging quality learning session for the team.',
    name: 'Raveendranadh K.',
    role: 'Operations Manager',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Testimonials</h2>
      <p className="text-neutral-500 mb-16">What colleagues say</p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={i}
            className="glass rounded-xl p-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="text-neutral-300 text-sm italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-4 pt-3 border-t border-neutral-800">
              <p className="text-sm font-medium text-cyan-400">{t.name}</p>
              <p className="text-xs text-neutral-500">{t.role}</p>
              {t.lps && <p className="text-[10px] text-pink-400 mt-1">{t.lps}</p>}
            </div>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}
