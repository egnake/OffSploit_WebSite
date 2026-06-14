import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './GithubStats.css';

export default function GithubStats() {
  const { t } = useLanguage();
  const [stats, setStats] = useState({
    stars: 0,
    forks: 0,
    issues: 0
  });

  useEffect(() => {
    fetch('https://api.github.com/repos/egnake/OffSploit')
      .then(res => res.json())
      .then(data => {
        if (data.stargazers_count !== undefined) {
          setStats({
            stars: data.stargazers_count,
            forks: data.forks_count,
            issues: data.open_issues_count
          });
        }
      })
      .catch(err => console.error("Error fetching github stats", err));
  }, []);

  return (
    <section className="stats-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-gradient text-4xl font-bold mb-4">{t.stats.title}</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">{t.stats.subtitle}</p>
        </div>
        
        <div className="stats-grid">
          <motion.a 
            href="https://github.com/egnake/OffSploit/stargazers"
            target="_blank"
            rel="noreferrer"
            className="glass-panel stat-card"
            whileHover={{ y: -10 }}
          >
            <div className="stat-icon-wrapper">
              <Star className="text-accent" size={36} />
            </div>
            <span className="stat-number font-mono">{stats.stars}</span>
            <span className="stat-label uppercase tracking-widest">{t.stats.stars}</span>
          </motion.a>
          
          <motion.a 
            href="https://github.com/egnake/OffSploit/network/members"
            target="_blank"
            rel="noreferrer"
            className="glass-panel stat-card"
            whileHover={{ y: -10 }}
          >
            <div className="stat-icon-wrapper">
              <GitFork className="text-accent" size={36} />
            </div>
            <span className="stat-number font-mono">{stats.forks}</span>
            <span className="stat-label uppercase tracking-widest">{t.stats.forks}</span>
          </motion.a>

          <motion.a 
            href="https://github.com/egnake/OffSploit/issues"
            target="_blank"
            rel="noreferrer"
            className="glass-panel stat-card"
            whileHover={{ y: -10 }}
          >
            <div className="stat-icon-wrapper">
              <AlertCircle className="text-accent" size={36} />
            </div>
            <span className="stat-number font-mono">{stats.issues}</span>
            <span className="stat-label uppercase tracking-widest">{t.stats.issues}</span>
          </motion.a>
        </div>
        
        <motion.div 
          className="feedback-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a
            href="mailto:egcaem000@gmail.com?subject=OffSploit%20Feedback%20and%20Suggestions"
            className="btn btn-secondary font-mono text-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            {t.footer.feedback}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
