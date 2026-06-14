import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container nav-container">
        <a href="#" className="nav-brand" onClick={closeMenu}>
          <motion.img 
            src="/offsploit-logo.png" 
            alt="OffSploit Logo" 
            className="navbar-logo"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <span className="nav-title heading-gradient">OffSploit</span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          <a href="#features">{t.nav.features}</a>
          <a href="#usage">{t.nav.usage}</a>
          <a href="#installation">{t.nav.installation}</a>
          <a href="#roadmap">{t.nav.roadmap}</a>
        </div>

        {/* Desktop Lang Switcher */}
        <div className="lang-switcher desktop-only">
          <Globe size={16} className="text-muted" />
          <div className="lang-buttons">
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => toggleLanguage('en')}
            >
              EN
            </button>
            <span className="lang-divider">/</span>
            <button 
              className={`lang-btn ${language === 'tr' ? 'active' : ''}`}
              onClick={() => toggleLanguage('tr')}
            >
              TR
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} className="text-accent" /> : <Menu size={24} className="text-accent" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu mobile-only glass-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-nav-links">
              <a href="#features" onClick={closeMenu}>{t.nav.features}</a>
              <a href="#usage" onClick={closeMenu}>{t.nav.usage}</a>
              <a href="#installation" onClick={closeMenu}>{t.nav.installation}</a>
              <a href="#roadmap" onClick={closeMenu}>{t.nav.roadmap}</a>
              
              <div className="mobile-lang-switcher">
                <Globe size={18} className="text-muted" />
                <div className="lang-buttons">
                  <button 
                    className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                    onClick={() => { toggleLanguage('en'); closeMenu(); }}
                  >
                    EN
                  </button>
                  <span className="lang-divider">/</span>
                  <button 
                    className={`lang-btn ${language === 'tr' ? 'active' : ''}`}
                    onClick={() => { toggleLanguage('tr'); closeMenu(); }}
                  >
                    TR
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
