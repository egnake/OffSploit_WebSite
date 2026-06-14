import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './FAQ.css';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header text-center"
        >
          <h2 className="heading-gradient text-4xl font-bold mb-4">{t.faq.title}</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            {t.faq.subtitle}
          </p>
        </motion.div>

        <div className="faq-container">
          {t.faq.items.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleOpen(i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.q}</span>
                <motion.div
                  className="faq-icon-wrapper"
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ChevronDown size={20} className={openIndex === i ? 'text-black' : 'text-accent'} />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="faq-answer-container"
                  >
                    <div className="faq-answer">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
