import React, { useEffect } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ArchitectureFlow from './components/ArchitectureFlow'
import Roadmap from './components/Roadmap'
import Usage from './components/Usage'
import Installation from './components/Installation'
import FAQ from './components/FAQ'
import GithubStats from './components/GithubStats'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ParticlesBackground from './components/ParticlesBackground'
import BackgroundTerminal from './components/BackgroundTerminal'

function AppContent() {
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      
      const progressBar = document.getElementById('progressBar');
      if (progressBar) {
        progressBar.style.transform = `scaleX(${scroll})`;
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        id="progressBar" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'var(--accent-color)',
          transformOrigin: '0%',
          transform: 'scaleX(0)',
          zIndex: 1001,
          boxShadow: '0 0 10px var(--accent-color)'
        }}
      />
      <ParticlesBackground />
      <BackgroundTerminal />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ArchitectureFlow />
        <Usage />
        <Installation />
        <Roadmap />
        <FAQ />
        <GithubStats />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
