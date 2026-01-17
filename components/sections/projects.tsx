'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Django E-commerce Platform',
    description:
      'A full-featured e-commerce platform built with Django, featuring product management, shopping cart, payment integration, and order tracking.',
    tech: ['Django', 'PostgreSQL', 'Stripe API', 'Celery', 'Redis'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
  },
  {
    title: 'REST API using DRF',
    description:
      'Production-ready REST API built with Django REST Framework, including authentication, permissions, pagination, and comprehensive documentation.',
    tech: ['Django REST Framework', 'JWT', 'PostgreSQL', 'Swagger'],
    github: 'https://github.com',
    demo: 'https://api.example.com',
  },
  {
    title: 'SaaS Admin Dashboard',
    description:
      'Scalable SaaS application with multi-tenancy support, subscription management, and real-time analytics dashboard.',
    tech: ['Django', 'React', 'PostgreSQL', 'Celery', 'AWS S3'],
    github: 'https://github.com',
    demo: 'https://saas.example.com',
  },
  {
    title: 'Authentication & Role System',
    description:
      'Comprehensive authentication system with role-based access control (RBAC), OAuth2, and two-factor authentication (2FA) support.',
    tech: ['Django', 'JWT', 'OAuth2', 'Redis', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://auth.example.com',
  },
];

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 glass-effect group"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Github size={20} />
                  <span className="text-sm font-medium">Code</span>
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <ExternalLink size={20} />
                  <span className="text-sm font-medium">Live Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}