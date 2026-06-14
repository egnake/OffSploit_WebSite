import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './BackgroundTerminal.css';

export default function BackgroundTerminal() {
  const { scrollYProgress } = useScroll();
  
  // Transform values based on scroll position
  // Starts flat in background, tilts and scales as you scroll down
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.3, 0.1, 0]);

  return (
    <div className="bg-terminal-wrapper">
      <motion.div 
        className="bg-terminal-container"
        style={{
          rotateX,
          rotateY,
          scale,
          y: translateY,
          opacity,
        }}
      >
        <div className="bg-terminal-header">
          <div className="bg-terminal-dots">
            <span></span><span></span><span></span>
          </div>
          <div className="bg-terminal-title">offsploit@framework: ~</div>
        </div>
        <div className="bg-terminal-body">
          <div className="bg-terminal-scroll">
            {/* Generate random-looking logs */}
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="bg-terminal-line">
                <span className="timestamp">[{new Date().toISOString()}]</span>
                <span className="prefix"> [INFO] </span>
                <span className="message">
                  {i % 5 === 0 ? "Initializing RAG engine connected to ChromaDB..." :
                   i % 4 === 0 ? "Compiling payload with polymorphic obfuscation [SUCCESS]" :
                   i % 3 === 0 ? "Evaluating OPSEC constraints: No high-risk signatures found." :
                   i % 2 === 0 ? "Deploying sandbox container for safe execution..." :
                   "OffSploit daemon listening for local connections..."}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
