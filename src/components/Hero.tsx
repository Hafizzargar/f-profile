'use client'

import { motion } from 'framer-motion'
import Scene3D from './Scene3D'

export default function Hero() {
  return (
    <section style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 20px'
    }}>
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0 
      }}>
        <Scene3D />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ 
          zIndex: 1, 
          textAlign: 'center',
          pointerEvents: 'none'
        }}
      >
        <motion.h1 
          style={{ 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            fontWeight: 800, 
            letterSpacing: '-0.02em',
            marginBottom: '10px'
          }}
        >
          HAFIZ <span className="gradient-text">BASHARAT</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ 
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', 
            color: 'var(--text-muted)',
            fontWeight: 400,
            maxWidth: '800px',
            margin: '0 auto 30px'
          }}
        >
          Full Stack Developer crafting immersive digital experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{ pointerEvents: 'auto' }}
        >
          <a href="#projects" className="btn-primary">View My Work</a>
        </motion.div>
      </motion.div>

      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: 0.5
      }}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ width: '2px', height: '40px', background: 'white' }}
        />
      </div>
    </section>
  )
}
