'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Frontend Developer (Angular)',
    company: 'Wealthmax Financial Advisor',
    location: 'Jammu',
    period: 'Mar 2025 - Apr 2025',
    description: [
      'Architected multi-tenant CRM modules supporting secure tenant level data isolation.',
      'Developed scalable CRM features using Angular Standalone architecture and Signals.',
      'Built and deployed SEO optimized SSR websites improving performance and search indexing.',
      'Integrated REST APIs for real time data management across CRM modules.'
    ]
  },
  {
    title: 'Web Developer Trainee',
    company: 'AccioJob',
    location: 'Delhi',
    period: 'Aug 2024 - Mar 2025',
    description: [
      'Developed responsive UI components using modern React practices.',
      'Strengthened JavaScript fundamentals, API integration, and component driven development.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ fontSize: '2.5rem', marginBottom: '50px', textAlign: 'center' }}
      >
        Professional <span className="gradient-text">Journey</span>
      </motion.h2>

      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ 
          position: 'absolute', 
          left: '0', 
          top: '0', 
          bottom: '0', 
          width: '2px', 
          background: 'linear-gradient(to bottom, var(--accent), var(--accent-secondary))',
          opacity: 0.3
        }} />

        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            style={{ 
              paddingLeft: '40px', 
              marginBottom: '50px', 
              position: 'relative' 
            }}
          >
            <div style={{ 
              position: 'absolute', 
              left: '-6px', 
              top: '8px', 
              width: '14px', 
              height: '14px', 
              borderRadius: '50%', 
              background: 'var(--accent)',
              boxShadow: '0 0 10px var(--accent)'
            }} />
            
            <div className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--foreground)' }}>{exp.title}</h3>
                <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{exp.period}</span>
              </div>
              <h4 style={{ color: 'var(--text-muted)', marginBottom: '15px' }}>{exp.company} • {exp.location}</h4>
              <ul style={{ listStyleType: 'none' }}>
                {exp.description.map((item, ii) => (
                  <li key={ii} style={{ 
                    color: 'var(--text-muted)', 
                    marginBottom: '8px', 
                    fontSize: '0.95rem',
                    position: 'relative',
                    paddingLeft: '20px'
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
