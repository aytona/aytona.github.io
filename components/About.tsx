'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6">
      <motion.div
        className="max-w-4xl grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-64 h-64 mx-auto rounded-2xl glass flex items-center justify-center text-neutral-600">
          {/* Photo placeholder */}
          <span className="text-6xl">CA</span>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-neutral-400 leading-relaxed">
            I build systems that automate the boring stuff. From orchestrating 36 ETL pipelines 
            and AI agents at Amazon to founding TapOrbit Studios, I operate at the intersection 
            of data engineering, automation, and creative technology.
          </p>
          <p className="text-neutral-400 leading-relaxed mt-4">
            BCS in Computer Science, 5+ years shipping software, and a belief that the best 
            code is the code you never have to run manually again.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
