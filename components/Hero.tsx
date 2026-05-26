'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Array<{ left: number; delay: number; duration: number; color: string }>>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 6,
        color: i % 2 === 0 ? 'var(--cyan)' : 'var(--magenta)',
      }))
    )
  }, [])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * -20
      containerRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-60"
            style={{
              left: `${p.left}%`,
              bottom: '-5%',
              background: p.color,
              animation: `rise ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div ref={containerRef} className="text-center transition-transform duration-200 ease-out">
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold gradient-text mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Christopher Aytona
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-neutral-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Data & Automation Engineer
        </motion.p>
        <motion.p
          className="text-sm md:text-base text-neutral-500 mb-8 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Software engineer turned data specialist — building pipelines, dashboards, and AI systems that run themselves across North America.
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="/resume.pdf"
            className="glass px-6 py-3 rounded-xl hover:border-cyan-400/30 transition-colors text-cyan-400 font-medium"
          >
            Download Resume ↓
          </a>
          <a
            href="#projects"
            className="glass px-6 py-3 rounded-xl hover:border-pink-400/30 transition-colors text-neutral-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="glass px-6 py-3 rounded-xl hover:border-neutral-400/30 transition-colors text-neutral-400"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes rise {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          100% { transform: translateY(-110vh) scale(0); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
