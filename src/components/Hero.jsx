import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState("");
  const codeText = t.hero.term1;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(codeText.slice(0, index));
      index++;
      if (index > codeText.length) {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [codeText]);

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>
      
      <div className="container hero-content mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-area"
        >
          <div className="badge font-mono">
            <span className="live-dot"></span>
            {t.hero.version}
          </div>
          
          <h1 className="hero-title heading-gradient">
            {t.hero.title}
          </h1>
          <p className="hero-subtitle">
            {t.hero.subtitle1} <span className="text-accent">{t.hero.subtitle2}</span> {t.hero.subtitle3}
          </p>
          
          <div className="hero-actions">
            <a href="https://github.com/egnake/OffSploit/archive/refs/heads/main.zip" download className="btn btn-primary font-mono text-sm">
              <Terminal size={18} />
              {t.hero.btnInstall}
            </a>
            <a href="https://github.com/egnake/OffSploit" target="_blank" rel="noreferrer" className="btn btn-secondary font-mono text-sm">
              <GitPullRequest size={18} />
              {t.hero.btnDocs}
            </a>
          </div>

          <motion.div 
            className="providers-section mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <p className="text-muted text-sm font-semibold uppercase tracking-widest mb-4">{t.hero.providersTitle}</p>
            <div className="providers-badges">
              {t.hero.providers.map((provider, index) => (
                <div key={index} className="provider-badge glass-panel">
                  {provider}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-area"
        >
          <div className="terminal-window glass-panel">
            <div className="terminal-header">
              <div className="window-controls">
                <span></span><span></span><span></span>
              </div>
              <div className="terminal-title font-mono text-muted text-sm">{t.hero.termTitle}</div>
            </div>
            <div className="terminal-body font-mono">
              <p><span className="text-accent">➜</span> <span className="text-muted">~</span> {typedText}<span className="cursor-blink">_</span></p>
              
              {typedText.length >= codeText.length && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ staggerChildren: 0.5 }}>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>{t.hero.term2}</motion.p>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>{t.hero.term3}</motion.p>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>{t.hero.term4}</motion.p>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7 }}>{t.hero.term5}</motion.p>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2 }}>{t.hero.term6}</motion.p>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.7 }}>{t.hero.term7}</motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3.2, repeat: Infinity, repeatType: 'reverse' }}
                    className="text-accent mt-2"
                  >
                    {t.hero.term8}
                  </motion.p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
