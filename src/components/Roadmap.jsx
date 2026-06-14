import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import './Roadmap.css'

export default function Roadmap() {
  const { t } = useLanguage();

  return (
    <section id="roadmap" className="roadmap-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-gradient text-4xl font-bold mb-4">{t.roadmap.title}</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            {t.roadmap.subtitle}
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          {t.roadmap.items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <h3 className="text-xl font-bold text-accent mb-2">{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
