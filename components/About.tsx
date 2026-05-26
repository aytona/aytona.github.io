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
        <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden glass">
          <img
            src="/headshot.jpg"
            alt="Christopher Aytona"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              target.parentElement!.innerHTML = '<span class="flex items-center justify-center w-full h-full text-6xl text-neutral-600">CA</span>'
            }}
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-neutral-400 leading-relaxed">
            I turn raw operational data into automated intelligence. At Amazon, I built end-to-end 
            data pipelines, programs, and tools that collectively replaced multiple FTEs worth of 
            manual work — adopted by teams across multiple fulfillment networks spanning North America.
          </p>
          <p className="text-neutral-400 leading-relaxed mt-4">
            With a software engineering background in game development and full-stack systems, 
            I pivoted into data and automation — bringing an engineer&apos;s mindset to analytics. 
            Every system I build is designed to run itself, scale across sites, and eliminate 
            the need for manual intervention.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {['Python', 'SQL', 'Redshift', 'QuickSight', 'ETL/Datanet', 'AWS Lambda', 'Pandas'].map(tag => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                {tag}
              </span>
            ))}
          </div>
          {/* Education - compact */}
          <div className="mt-6 pt-4 border-t border-neutral-800">
            <div className="flex flex-col gap-1 text-sm text-neutral-500">
              <span>🎓 BSc (Hons) Computer Science — Ontario Tech University, 2021</span>
              <span>🎓 Adv. Diploma Game Programming — George Brown Polytechnic, 2017</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
