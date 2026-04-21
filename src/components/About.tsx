'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about">
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ fontSize: '2.5rem', marginBottom: '30px' }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card"
          style={{ padding: '40px', lineHeight: '1.8' }}
        >
          <p style={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: 500 }}>
            Hi, I’m <span style={{ color: 'var(--accent)' }}>Hafiz Basharat</span> — a Full Stack Developer crafting immersive, high-performance web experiences.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
            I specialize in building modern, scalable applications using **Next.js**, **Three.js**, **Node.js**, and **Angular** (with 1 year of professional experience) — combining clean architecture with visually striking interfaces.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            From real-time dashboards to interactive 3D websites, I transform ideas into fast, elegant, and production-ready products.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
