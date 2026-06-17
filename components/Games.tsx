'use client'
import { motion } from 'framer-motion'

const zcTags = ['Unity', 'C#', 'iOS & Android', 'Founder / CEO', 'Project Manager', 'People Manager']
const eoTags = ['Turn-Based Tactics', 'Open World', 'Nonlinear Narrative', 'PC · Steam', 'Console']

export default function Games() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Games</h2>
      <p className="text-neutral-500 mb-16">Built &amp; shipped at TapOrbit Studios</p>

      <div className="max-w-4xl w-full flex flex-col gap-6">

        {/* Zombie Citizen — Now Available */}
        <motion.div
          className="glass rounded-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500" />
          <div
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.18), transparent 70%)' }}
          />
          <div className="relative p-8 md:p-10 flex flex-col md:flex-row gap-7">
            <img
              src="/zombie-citizen-icon.png"
              alt="Zombie Citizen app icon"
              width={96}
              height={96}
              className="w-24 h-24 rounded-2xl flex-shrink-0 self-start"
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
              <div className="flex flex-wrap gap-1.5 mt-5">
                {zcTags.map(t => (
                  <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <a
                  href="https://apps.apple.com/us/app/zombie-citizen/id6775626096"
                  target="_blank" rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                  aria-label="Download Zombie Citizen on the App Store"
                >
                  <img src="/badge-app-store.png" alt="Download on the App Store" height={40} className="h-10 w-auto" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.taporbitstudios.zombiecitizen&hl=en_US"
                  target="_blank" rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                  aria-label="Get Zombie Citizen on Google Play"
                >
                  <img src="/badge-google-play.png" alt="Get it on Google Play" height={40} className="h-10 w-auto" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Everlasting Odyssey — In Development (65/35 art/text) */}
        <motion.div
          className="glass rounded-2xl relative overflow-hidden flex flex-col md:flex-row"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 z-20" />

          {/* Text panel — 35% */}
          <div className="order-2 md:order-1 md:w-[35%] p-8 relative z-10">
            <span className="inline-block text-[10px] font-semibold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-pink-500/15 text-pink-400 border border-pink-500/30">
              In Development
            </span>
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mt-3">Everlasting Odyssey</h3>
            <p className="text-neutral-400 text-sm mt-3">
              A turn-based tactics game with a heavy emphasis on theorycrafting. Features a nonlinear
              narrative where each quest line is independent and optional.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-5">
              {eoTags.map(t => (
                <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="https://taporbitstudios.ca/"
                target="_blank" rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg text-sm text-cyan-400 border border-cyan-400/40 bg-cyan-400/5 hover:bg-cyan-400/10 transition-colors"
              >
                Coming Soon ↗
              </a>
            </div>
          </div>

          {/* Art — 65% */}
          <div className="order-1 md:order-2 md:w-[65%] relative min-h-[240px] md:min-h-[420px] overflow-hidden">
            <img
              src="/everlasting-odyssey-splash.jpg"
              alt="Everlasting Odyssey splash art"
              className="absolute inset-0 w-full h-full object-cover object-left-bottom scale-105 origin-bottom-left"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 16%)',
                maskImage: 'linear-gradient(to right, transparent 0, #000 16%)',
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
