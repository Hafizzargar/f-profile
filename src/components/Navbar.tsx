'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: scrolled ? '15px 40px' : '30px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none'
      }}
    >
      <div style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-1px' }}>
        HB<span className="gradient-text">.</span>
      </div>

      <div style={{ display: 'flex', gap: '30px', fontSize: '0.9rem', fontWeight: 500 }}>
        <a href="#about" style={{ opacity: 0.7, transition: 'opacity 0.2s' }}>About</a>
        <a href="#skills" style={{ opacity: 0.7, transition: 'opacity 0.2s' }}>Skills</a>
        <a href="#experience" style={{ opacity: 0.7, transition: 'opacity 0.2s' }}>Experience</a>
        <a href="#projects" style={{ opacity: 0.7, transition: 'opacity 0.2s' }}>Projects</a>
        <a href="mailto:hafezzargar987@gmail.com" className="btn-primary" style={{ padding: '8px 20px' }}>Contact</a>
      </div>
    </motion.nav>
  )
}
