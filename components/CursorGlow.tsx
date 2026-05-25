'use client'
import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={glowRef}
      className="fixed w-[500px] h-[500px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 opacity-20"
      style={{
        background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
      }}
    />
  )
}
