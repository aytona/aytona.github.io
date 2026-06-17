'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const sections = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Release', 'Research', 'Contact']

export default function Nav() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

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

      {/* Floating nav */}
      <motion.nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-40 glass rounded-full px-6 py-2 flex gap-4"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: visible ? 0 : -60, opacity: visible ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        {sections.map(s => (
          <a
            key={s}
            href={`#${s.toLowerCase()}`}
            className="text-xs text-neutral-400 hover:text-cyan-400 transition-colors"
          >
            {s}
          </a>
        ))}
      </motion.nav>
    </>
  )
}
