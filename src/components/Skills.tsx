'use client'

import { motion } from 'framer-motion'
import { Code2, Layout, Database, Cpu, PencilRuler, Terminal } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 size={24} />,
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3']
  },
  {
    title: 'Frontend Frameworks',
    icon: <Layout size={24} />,
    skills: ['Angular', 'React.js', 'Next.js', 'RxJS', 'Redux']
  },
  {
    title: 'UI & Styling',
    icon: <PencilRuler size={24} />,
    skills: ['Tailwind CSS', 'PrimeNG', 'Angular Material', 'Bootstrap']
  },
  {
    title: 'Backend & Database',
    icon: <Terminal size={24} />,
    skills: ['Node.js', 'Express.js', 'MongoDB']
  },
  {
    title: 'Tools & AI',
    icon: <Cpu size={24} />,
    skills: ['Git', 'Figma', 'Postman', 'GitHub Copilot', 'Gemini']
  }
]

export default function Skills() {
  return (
    <section id="skills">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ fontSize: '2.5rem', marginBottom: '50px', textAlign: 'center' }}
      >
        Technical <span className="gradient-text">Excellence</span>
      </motion.h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '24px' 
      }}>
        {skillCategories.map((cat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ color: 'var(--accent)' }}>{cat.icon}</div>
              <h3 style={{ fontSize: '1.2rem' }}>{cat.title}</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cat.skills.map((skill, si) => (
                <span 
                  key={si}
                  style={{ 
                    padding: '6px 12px', 
                    background: 'rgba(255,255,255,0.05)', 
                    borderRadius: '20px', 
                    fontSize: '0.9rem',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
