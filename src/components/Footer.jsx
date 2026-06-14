import React from 'react'
import { Terminal, ShieldAlert } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="font-mono text-xl font-bold mb-2 heading-gradient">OffSploit</h3>
            <p className="text-muted text-sm mb-4">{t.footer.desc}</p>
            <a 
              href="https://github.com/egnake/OffSploit.git" 
              target="_blank" 
              rel="noreferrer"
              className="github-link flex items-center gap-2 text-muted"
            >
              <Terminal size={20} />
              <span>{t.footer.star}</span>
            </a>
          </div>

          <div className="footer-disclaimer glass-panel">
            <h4 className="flex items-center gap-2 text-accent mb-2">
              <ShieldAlert size={18} />
              {t.footer.disclaimerTitle}
            </h4>
            <p className="text-muted text-xs leading-relaxed">
              {t.footer.disclaimerText}
            </p>
          </div>
        </div>
        
        <div className="footer-bottom text-center text-muted text-xs">
          &copy; {new Date().getFullYear()} {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}
