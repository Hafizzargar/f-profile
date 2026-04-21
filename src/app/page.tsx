import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      
      <footer style={{ 
        padding: '60px 20px', 
        textAlign: 'center', 
        borderTop: '1px solid var(--glass-border)',
        marginTop: '100px',
        color: 'var(--text-muted)',
        fontSize: '0.9rem'
      }}>
        <p>© 2026 Hafiz Basharat. Built with Next.js & Three.js</p>
      </footer>
    </main>
  )
}
