import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, Cpu, ShieldCheck, Box, Crosshair } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './ArchitectureFlow.css';

export default function ArchitectureFlow() {
  const { t } = useLanguage();
  
  const icons = [
    <Network size={24} />,
    <Database size={24} />,
    <Cpu size={24} />,
    <ShieldCheck size={24} />,
    <Box size={24} />,
    <Crosshair size={24} />
  ];

  return (
    <section id="architecture" className="architecture-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-gradient text-4xl font-bold mb-4">{t.flow.title}</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            {t.flow.subtitle}
          </p>
        </div>

        <div className="flow-container">
          <div className="flow-line">
            <motion.div 
              className="flow-beam"
              animate={{ left: ['-10%', '110%'] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
          </div>
          
          <div className="flow-nodes">
            {t.flow.nodes.map((nodeName, i) => (
              <motion.div 
                key={i} 
                className="flow-node glass-panel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.05, borderColor: 'var(--accent-color)' }}
              >
                <div className="node-icon text-accent">
                  {icons[i]}
                </div>
                <div className="node-label text-sm font-semibold mt-2">{nodeName}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
