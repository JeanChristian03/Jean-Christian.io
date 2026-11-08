import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="hero-badge">
          <span>Bonjour, je suis</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-title">
          Jean Christian
        </motion.h1>

        <motion.h2 variants={itemVariants} className="hero-subtitle">
          Développeur Web Full Stack
        </motion.h2>

        <motion.p variants={itemVariants} className="hero-description">
          Je crée des applications web modernes, performantes et accessibles.
          Passionné par le code propre et les expériences utilisateur exceptionnelles.
        </motion.p>

        <motion.div variants={itemVariants} className="hero-buttons">
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 0 }}
          >
            <i className="fas fa-rocket"></i> Voir mes projets
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-outline"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 0 }}
          >
            <i className="fas fa-envelope"></i> Me contacter
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-social">
          <motion.a
            href="https://github.com/JeanChristian03"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="social-link"
          >
            <i className="fab fa-github"></i>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/JeanChristian03"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="social-link"
          >
            <i className="fab fa-linkedin"></i>
          </motion.a>
          <motion.a
            href="https://twitter.com/JeanChristian03"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="social-link"
          >
            <i className="fab fa-twitter"></i>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="image-placeholder">
          <i className="fas fa-user-astronaut"></i>
        </div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          className="mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <i className="fas fa-chevron-down"></i>
        </motion.div>
        <span>Faites défiler</span>
      </motion.div>
    </section>
  );
};

export default Hero;