'use client'
import { motion } from 'framer-motion'

const tags = ['Unity', 'C#', 'iOS & Android', 'Founder / CEO', 'Project Manager', 'People Manager']

export default function GameRelease() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Release</h2>
      <p className="text-neutral-500 mb-16">Shipped commercial product — live on the App Store &amp; Google Play</p>

      <motion.div
        className="glass rounded-2xl max-w-4xl w-full relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Top gradient accent line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500" />
        {/* Soft glow */}
        <div
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.18), transparent 70%)' }}
        />

        <div className="relative p-8 md:p-10 flex flex-col md:flex-row gap-7">
          {/* App icon — borderless, rounded */}
          <img
            src="/zombie-citizen-icon.png"
            alt="Zombie Citizen app icon"
            width={96}
            height={96}
            className="w-24 h-24 rounded-2xl flex-shrink-0 self-start"
            style={{ imageRendering: 'auto' }}
          />

          <div className="flex-1">
            <p className="text-xs font-semibold tracking-[0.2em] text-pink-400 uppercase">
              Now Available &nbsp;·&nbsp; iOS &amp; Android
            </p>
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mt-2">Zombie Citizen</h3>

            <p className="text-neutral-300 text-sm md:text-base mt-3">
              A fast, top-down shooter where every run pulls you deeper into chaos.
            </p>
            <p className="text-neutral-500 text-sm mt-2 max-w-2xl">
              Fight through relentless waves of zombies, take on powerful bosses, and build your strength
              as the challenge intensifies. Collect materials, upgrade your weapons, and stack powerful
              buffs to adapt, survive, and go further than before.
            </p>

            {/* Feature chips — development focused */}
            <div className="flex flex-wrap gap-1.5 mt-5">
              {tags.map(t => (
                <span
                  key={t}
                  className="text-[10px] px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Store badges */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href="https://apps.apple.com/us/app/zombie-citizen/id6775626096"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
                aria-label="Download Zombie Citizen on the App Store"
              >
                <img src="/badge-app-store.png" alt="Download on the App Store" height={40} className="h-10 w-auto" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.taporbitstudios.zombiecitizen&hl=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
                aria-label="Get Zombie Citizen on Google Play"
              >
                <img src="/badge-google-play.png" alt="Get it on Google Play" height={40} className="h-10 w-auto" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
