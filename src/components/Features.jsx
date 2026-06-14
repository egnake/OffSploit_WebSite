import React from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, ShieldAlert, Fingerprint, Layers, GitBranch, TerminalSquare } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Features.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Features() {
  const { t } = useLanguage();
  
  const icons = [
    <BrainCircuit size={32} />,
    <ShieldAlert size={32} />,
    <TerminalSquare size={32} />,
    <Fingerprint size={32} />,
    <GitBranch size={32} />,
    <Layers size={32} />
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-gradient text-4xl font-bold mb-4">{t.features.title}</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            {t.features.subtitle}
          </p>
        </div>

        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {t.features.items.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="feature-card glass-panel">
              <div className="feature-icon-wrapper">
                {icons[index]}
              </div>
              <h3 className="feature-title text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="feature-description text-muted">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
