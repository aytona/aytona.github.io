'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * -20
      containerRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-5%',
              background: i % 2 === 0 ? 'var(--cyan)' : 'var(--magenta)',
              animation: `rise ${4 + Math.random() * 6}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div ref={containerRef} className="text-center transition-transform duration-200 ease-out">
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold gradient-text mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Christopher Aytona
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-neutral-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Data & Automation Engineer • CEO • Developer
        </motion.p>
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
