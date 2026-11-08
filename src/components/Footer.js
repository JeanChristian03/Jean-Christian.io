import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="footer-content">
        <motion.div variants={itemVariants} className="footer-section">
          <motion.div
            className="footer-logo"
            whileHover={{ scale: 1.05 }}
          >
            <span className="logo-icon"><i className="fas fa-code"></i></span>
            <span className="logo-text">Jean Christian</span>
          </motion.div>
          <motion.p variants={itemVariants} className="footer-description">
            Développeur Web passionné par la création d'expériences numériques exceptionnelles.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="footer-section">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="footer-section">
          <h4>Réseaux Sociaux</h4>
          <div className="footer-social">
            <motion.a
              href="https://github.com/JeanChristian03"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-github"></i> GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/JeanChristian03"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-linkedin\"></i> LinkedIn
            </motion.a>
            <motion.a
              href="https://twitter.com/JeanChristian03"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-twitter\"></i> Twitter
            </motion.a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="footer-section">
          <h4>Contact</h4>
          <div className="footer-contact">
            <motion.p variants={itemVariants}>
              <i className="fas fa-envelope"></i> jean.christian03@example.com
            </motion.p>
            <motion.p variants={itemVariants}>
              <i className="fas fa-phone"></i> +33 6 12 34 56 78
            </motion.p>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="footer-bottom"
      >
        <p>&copy; {currentYear} Jean Christian. Tous droits réservés.</p>
        <p>
          <a href="#">Politique de confidentialité</a> |
          <a href="#">Mentions légales</a>
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;