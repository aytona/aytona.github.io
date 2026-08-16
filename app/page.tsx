import Nav from '@/components/Nav'
import CursorGlow from '@/components/CursorGlow'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Testimonials from '@/components/Testimonials'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Games from '@/components/Games'
import Research from '@/components/Research'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <CursorGlow />
      <Nav />
      <section id="home" aria-label="Introduction"><Hero /></section>
      <section id="about" aria-label="About Christopher Aytona"><About /></section>
      <section id="experience" aria-label="Work experience"><Experience /></section>
      <Testimonials />
      <section id="skills" aria-label="Technical skills"><Skills /></section>
      <section id="projects" aria-label="Data engineering projects"><Projects /></section>
      <section id="games" aria-label="Game development portfolio"><Games /></section>
      <section id="research" aria-label="Academic research and publications"><Research /></section>
      <section id="contact" aria-label="Contact information"><Contact /></section>
    </main>
  )
}
