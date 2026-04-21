'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Code2 } from 'lucide-react'

const projects = [
  {
    title: 'PineCode Admin Portal',
    description: 'A high-density administrative management system optimized for large datasets and complex workflows.',
    tags: ['Angular', 'RxJS', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#'
  },
  {
    title: 'MedX Institute Portal',
    description: 'Comprehensive educational platform for medical institutes featuring course management and student tracking.',
    tags: ['Angular', 'Angular Material', 'Node.js'],
    link: '#',
    github: '#'
  },
  {
    title: 'Premium E-commerce',
    description: 'Modern shopping platform with real-time inventory, secure checkout, and a responsive glassmorphism UI.',
    tags: ['React', 'Next.js', 'Redux', 'Tailwind'],
    link: '#',
    github: '#'
  },
  {
    title: 'Multi-Tenant CRM',
    description: 'Scalable CRM solution featuring secure tenant data isolation and real-time performance analytics.',
    tags: ['Angular', 'Signals', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ fontSize: '2.5rem', marginBottom: '50px', textAlign: 'center' }}
      >
        Featured <span className="gradient-text">Projects</span>
      </motion.h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '30px' 
      }}>
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card"
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px', flex: 1 }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
              {project.tags.map((tag, ti) => (
                <span key={ti} style={{ fontSize: '0.8rem', color: 'var(--accent)' }}>#{tag}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href={project.github} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem', opacity: 0.8 }}>
                <Code2 size={18} /> Code
              </a>
              <a href={project.link} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem', opacity: 0.8 }}>
                <ExternalLink size={18} /> Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
