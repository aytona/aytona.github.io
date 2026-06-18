'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Games', 'Research', 'Contact']

export default function Nav() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      setProgress(scrolled)
      setVisible(window.scrollY > 100)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-pink-500"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Desktop nav */}
      <motion.nav
        className="hidden md:flex fixed top-4 left-0 right-0 mx-auto w-fit z-40 glass rounded-full px-6 py-2 gap-4"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: visible ? 0 : -60, opacity: visible ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        {sections.map(s => (
          <a
            key={s}
            href={`#${s.toLowerCase()}`}
            className="text-xs text-neutral-400 hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            {s}
          </a>
        ))}
      </motion.nav>

      {/* Mobile hamburger button */}
      <motion.button
        className="md:hidden fixed top-4 right-4 z-50 glass rounded-full w-10 h-10 flex items-center justify-center"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: visible ? 0 : -60, opacity: visible ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1">
          <span className={`block w-4 h-0.5 bg-neutral-300 transition-transform ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
          <span className={`block w-4 h-0.5 bg-neutral-300 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-4 h-0.5 bg-neutral-300 transition-transform ${menuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
        </div>
      </motion.button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {sections.map(s => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                className="text-xl text-neutral-300 hover:text-cyan-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {s}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
