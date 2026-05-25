import Nav from '@/components/Nav'
import CursorGlow from '@/components/CursorGlow'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <CursorGlow />
      <Nav />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="blog"><Blog /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>
    </main>
  )
}
