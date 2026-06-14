import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Terminal, ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Installation.css'

export default function Installation() {
  const { t } = useLanguage();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="installation" className="installation-section">
      <div className="container">
        <div className="installation-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="install-info"
          >
            <h2 className="heading-gradient text-4xl font-bold mb-4">{t.install.title}</h2>
            <p className="text-muted text-lg mb-6">
              {t.install.subtitle}
            </p>
            
            <div className="requirements-box">
              <h4 className="text-xl font-bold mb-4 font-mono text-accent flex items-center gap-2">
                <span className="text-muted">{'>_'}</span> {t.install.reqs}
              </h4>
              <ul className="requirements-list">
                {t.install.reqList.map((req, i) => (
                  <li key={i} className="flex items-center gap-2 flex-wrap mb-2">
                    <a href={req.url} target="_blank" rel="noreferrer" className="req-link flex items-center gap-1 font-mono text-sm">
                      {req.name} <ExternalLink size={14} />
                    </a>
                    {req.desc && <span className="text-muted text-sm">{req.desc}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="install-steps">
            {t.install.steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="step-card"
              >
                <div className="step-header">
                  <span className="font-mono text-accent">{step.title}</span>
                  <button 
                    onClick={() => handleCopy(step.code, index)}
                    className="copy-btn"
                    title="Copy command"
                  >
                    {copiedIndex === index ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
                  </button>
                </div>
                <div className="step-code glass-panel font-mono text-sm">
                  {step.code.split('\n').map((line, i) => (
                    <div key={i}><span className="text-muted select-none">$ </span>{line}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
