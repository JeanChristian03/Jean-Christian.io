import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
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

  const categories = [
    {
      name: 'Frontend',
      icon: 'fas fa-laptop-code',
      skills: [
        { name: 'React', level: 90, icon: 'fab fa-react' },
        { name: 'JavaScript', level: 85, icon: 'fab fa-js' },
        { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
        { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt' },
        { name: 'TypeScript', level: 70, icon: 'fas fa-code' }
      ]
    },
    {
      name: 'Backend',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
        { name: 'Express', level: 75, icon: 'fas fa-code' },
        { name: 'MongoDB', level: 70, icon: 'fas fa-database' },
        { name: 'Firebase', level: 65, icon: 'fas fa-fire' }
      ]
    },
    {
      name: 'Outils',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git', level: 85, icon: 'fab fa-git-alt' },
        { name: 'GitHub', level: 80, icon: 'fab fa-github' },
        { name: 'Figma', level: 60, icon: 'fab fa-figma' },
        { name: 'Docker', level: 50, icon: 'fab fa-docker' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="section-title">
          <h2>Mes Compétences</h2>
          <p className="subtitle">Ce que je maîtrise</p>
        </motion.div>

        <motion.div
          className="skills-container"
          variants={containerVariants}
        >
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="category-header"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <i className={category.icon}></i>
                <h3>{category.name}</h3>
              </motion.div>

              <motion.div
                className="category-skills"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 + 0.1 }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.1, duration: 1 }}
                  >
                    <div className="skill-header">
                      <i className={skill.icon}></i>
                      <span>{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="skills-note"
        >
          <p><i className="fas fa-info-circle"></i> Ces pourcentages représentent mon niveau de maîtrise estimé.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;