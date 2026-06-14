import React from 'react'
import { motion } from 'framer-motion'
import { Play, Activity, Database } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Usage.css'

export default function Usage() {
  const { t } = useLanguage();

  return (
    <section id="usage" className="usage-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-gradient text-4xl font-bold mb-4">{t.usage.title}</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            {t.usage.subtitle}
          </p>
        </div>

        <div className="usage-content">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="dashboard-preview glass-panel"
          >
            <div className="dashboard-header">
              <div className="dots">
                <span></span><span></span><span></span>
              </div>
              <div className="font-mono text-sm text-muted">{t.usage.dashboard.url}</div>
            </div>
            
            <div className="dashboard-body">
              <div className="sidebar">
                <div className="nav-item active"><Activity size={18} /> Pipeline</div>
                <div className="nav-item"><Database size={18} /> ChromaDB</div>
              </div>
              <div className="main-area">
                <div className="stats-row">
                  <div className="stat-card">
                    <span className="text-muted">{t.usage.dashboard.targets}</span>
                    <span className="stat-value">12</span>
                  </div>
                  <div className="stat-card">
                    <span className="text-muted">{t.usage.dashboard.vulns}</span>
                    <span className="stat-value text-accent">5</span>
                  </div>
                  <div className="stat-card">
                    <span className="text-muted">{t.usage.dashboard.compiled}</span>
                    <span className="stat-value">3</span>
                  </div>
                </div>
                <div className="terminal-logs font-mono text-sm overflow-hidden relative" style={{ height: '150px' }}>
                  <div className="scrolling-logs">
                    <div className="log-line text-accent">{t.usage.dashboard.log1}</div>
                    <div className="log-line">{t.usage.dashboard.log2}</div>
                    <div className="log-line text-warning">{t.usage.dashboard.log3}</div>
                    <div className="log-line">{t.usage.dashboard.log4}</div>
                    <div className="log-line text-accent">{t.usage.dashboard.log5}</div>
                    {/* Duplicate for infinite effect */}
                    <div className="log-line text-accent mt-2">[*] Extracting AS-REP hashes from kerberos response...</div>
                    <div className="log-line">[+] Crackmapexec module finished.</div>
                    <div className="log-line text-warning">[!] LLM Warning: High OPSEC risk detected in payload.</div>
                    <div className="log-line">[*] Refactoring payload to evade AMSI...</div>
                    <div className="log-line text-accent">[+] Payload obfuscated successfully. Deploying to sandbox.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="cli-examples">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="cli-box glass-panel"
            >
              <h4 className="font-mono text-accent mb-2 flex items-center gap-2">
                <Play size={16} /> {t.usage.cli.interactive}
              </h4>
              <p className="text-muted text-sm mb-3">{t.usage.cli.interactiveDesc}</p>
              <code className="code-block font-mono">
                <span className="keyword">offsploit</span>{' '}
                <span className="flag">-eng</span>
              </code>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="cli-box glass-panel mt-4"
            >
              <h4 className="font-mono text-accent mb-2 flex items-center gap-2">
                <Play size={16} /> {t.usage.cli.standard}
              </h4>
              <p className="text-muted text-sm mb-3">{t.usage.cli.standardDesc}</p>
              <code className="code-block font-mono">
                <span className="keyword">offsploit</span>{' '}
                <span className="flag">--nmap</span>{' '}
                <span className="string">scan.xml</span>{' '}
                <span className="flag">--lhost</span>{' '}
                <span className="string">10.10.14.5</span>{' '}
                <span className="flag">--rhost</span>{' '}
                <span className="string">10.10.10.3</span>{' '}
                <span className="flag">--obfuscate</span>
              </code>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="cli-box glass-panel mt-4"
            >
              <h4 className="font-mono text-accent mb-2 flex items-center gap-2">
                <Play size={16} /> {t.usage.cli.docker}
              </h4>
              <p className="text-muted text-sm mb-3">{t.usage.cli.dockerDesc}</p>
              <code className="code-block font-mono">
                <span className="keyword">docker run</span>{' '}
                <span className="flag">-it --rm --network host</span> \<br/>
                &nbsp;&nbsp;<span className="flag">-v</span>{' '}
                <span className="string">$(pwd)/exploitdb:/opt/offsploit/exploitdb</span> \<br/>
                &nbsp;&nbsp;<span className="keyword">offsploit</span>{' '}
                <span className="flag">--nmap</span>{' '}
                <span className="string">scan.xml</span>{' '}
                <span className="flag">--lhost</span>{' '}
                <span className="string">10.10.14.5</span>
              </code>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
