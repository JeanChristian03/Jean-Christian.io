import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const projects = [
    {
      id: 1,
      title: 'POC Plateforme de Réservation Serverless',
      description: 'Développement d\'une plateforme de réservation de voyages serverless (modèle Uber/FlixBus) pour le marché camerounais. Mise en place des processus de récupération, transmission et stockage des données, avec optimisation du calcul d\'itinéraires (local et cloud AWS).',
      company: 'Decisys Consulting',
      duration: '2 mois',
      technologies: ['Python', 'OpenStreetMap', 'Pyroutelib3', 'AWS (S3, Lambda)', 'Anaconda', 'Trello'],
      githubLink: null,
      image: 'https://via.placeholder.com/400x250/1a1a2e/00d9ff?text=Serverless+Travel'
    },
    {
      id: 2,
      title: 'Projets BI - Mutuelle Assurance de l\'Éducation',
      description: 'Consultant BI pour la MAE : alimentation et mise à jour des données dans les univers, extraction de données pour les besoins métiers, création et mise à jour de tableaux de bord interactifs (suivi-courrier, commercial).',
      company: 'MAE',
      duration: '1 mois',
      technologies: ['SAP Business Objects XI', 'SQL', 'ETL SAP Data Services', 'SQL Developer', 'Slack', 'Mantis'],
      githubLink: null,
      image: 'https://via.placeholder.com/400x250/1a1a2e/e94560?text=MAE+BI'
    },
    {
      id: 3,
      title: 'Projets BI - Cerp Rouen (Groupe Astera)',
      description: 'Consultant BI en gestion de projets de bout en bout : collecte des données, mise à jour des dimensions dans les univers via IDT BI4, création de tableaux de bord interactifs (synthèse portefeuille commerciaux, suivi produits pharmaceutiques).',
      company: 'Cerp Rouen - Groupe Astera',
      duration: '5 mois',
      technologies: ['SAP Business Objects 4.2', 'SQL Developer', 'SQL', 'DB2', 'Fresh Service'],
      githubLink: null,
      image: 'https://via.placeholder.com/400x250/1a1a2e/00d9ff?text=Astera+BI'
    },
    {
      id: 4,
      title: 'Automatisation Campagnes E-mails - Institut Pasteur',
      description: 'Conception d\'un flux Power Automate pour automatiser la lecture d\'une base Notion et l\'envoi de campagnes d\'e-mails personnalisées avec lien vers un formulaire.',
      company: 'Institut Pasteur',
      duration: '3 semaines',
      technologies: ['Power Automate', 'Notion'],
      githubLink: null,
      image: 'https://via.placeholder.com/400x250/1a1a2e/e94560?text=Email+Automation'
    },
    {
      id: 5,
      title: 'Projets BI & Transformation Data - Altitude Infra',
      description: 'Développement de rapports BI et modélisation de données dans des Warehouse (Microsoft Fabric). Notebooks Python (Spark) pour le redimensionnement et stockage des logos. Architecture en médaillon (Bronze, Silver, Gold).',
      company: 'Altitude Infra',
      duration: '6 mois',
      technologies: ['Power BI', 'DAX', 'Python (Spark)', 'Microsoft Fabric', 'LakeHouse', 'Data Pipelines', 'SQL'],
      githubLink: null,
      image: 'https://via.placeholder.com/400x250/1a1a2e/00d9ff?text=Data+Transformation'
    },
    {
      id: 6,
      title: 'Audit & Amélioration Rapports BI - Sogetsran',
      description: 'Audit complet des rapports existants pour identifier incohérences, erreurs de calcul et problèmes de performance. Correction des anomalies (formules DAX, filtres, visualisations).',
      company: 'Sogetsran',
      duration: '9 mois',
      technologies: ['SQL Server Management Studio', 'Power BI', 'DAX'],
      githubLink: null,
      image: 'https://via.placeholder.com/400x250/1a1a2e/e94560?text=BI+Audit'
    },
    {
      id: 7,
      title: 'Migration Office 365 - Projet EnVol',
      description: 'Recensement des fichiers macros par direction et analyse de leur état. Suivi des tests sur les fichiers critiques. Mise en place d\'un fichier de suivi avec reporting. Coordination avec les agents métiers.',
      company: 'Département Seine-Maritime',
      duration: '2 mois',
      technologies: ['Excel', 'Gestion de projets'],
      githubLink: null,
      image: 'https://via.placeholder.com/400x250/1a1a2e/00d9ff?text=Office+Migration'
    }
  ];

  return (
    <section id="projects" className="projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="section-title">
          <h2>Mes Projets</h2>
          <p className="subtitle">Découvre mes réalisations professionnelles</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="project-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <img src={project.image} alt={project.title} />
                {/* Affiche le bouton GitHub UNIQUEMENT si githubLink existe */}
                {project.githubLink && (
                  <div className="project-overlay">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-github"></i> Code
                    </motion.a>
                  </div>
                )}
              </motion.div>

              <motion.div
                className="project-info"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              >
                <h3>{project.title}</h3>
                <p className="project-company">
                  <strong>{project.company}</strong> • {project.duration}
                </p>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="projects-cta"
        >
          <motion.a
            href="https://github.com/JeanChristian03"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 0 }}
          >
            <i className="fab fa-github"></i> Voir tous mes projets sur GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;