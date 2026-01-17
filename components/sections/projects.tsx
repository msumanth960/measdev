'use client';

import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

const projects = [
  {
    title: 'Control Systems Design & Visualization',
    description:
      'Engineered mathematical models for control system analysis with dynamic plotting capabilities. Implemented transfer function evaluation, stability analysis, and real-time graphical representation of system responses.',
    tech: ['Python', 'NumPy', 'Matplotlib', 'Control Theory', 'Signal Processing'],
  },
  {
    title: 'Stock Trade Allocation Engine',
    description:
      'Built an intelligent trade allocation system that distributes orders across multiple accounts based on configurable rules, portfolio weights, and regulatory constraints. Handles complex splitting logic with audit trails.',
    tech: ['Django', 'Pandas', 'PostgreSQL', 'Celery', 'REST API'],
  },
  {
    title: 'Asset Health Predictive Intelligence',
    description:
      'Developed predictive analytics platform for asset health monitoring. Leverages historical data patterns to forecast maintenance requirements and potential failures, enabling proactive decision-making.',
    tech: ['Python', 'Pandas', 'Machine Learning', 'Data Analytics', 'Forecasting'],
  },
  {
    title: 'Dynamic Election Voting System',
    description:
      'Architected a time-sensitive voting platform with dynamic candidate visibility based on election phases. Implements secure ballot casting, real-time result tabulation, and comprehensive audit logging.',
    tech: ['Django', 'PostgreSQL', 'Redis', 'WebSockets', 'Security'],
  },
  {
    title: 'Audit Report Automation Suite',
    description:
      'Created automated pipeline for audit report processing — segregating data by categories, aggregating metrics, and generating consolidated reports. Reduced manual effort by 90% with error-free outputs.',
    tech: ['Python', 'Pandas', 'Excel Automation', 'Data Pipelines', 'Reporting'],
  },
  {
    title: 'E-commerce Platform Architecture',
    description:
      'Full-stack e-commerce solution with product catalog management, shopping cart workflows, payment gateway integration, and order lifecycle tracking. Built for scalability and high availability.',
    tech: ['Django', 'PostgreSQL', 'Stripe API', 'Celery', 'Redis'],
  },
  {
    title: 'Enterprise REST API Framework',
    description:
      'Production-grade API infrastructure with JWT authentication, granular permissions, rate limiting, and auto-generated documentation. Serves as backbone for multiple client applications.',
    tech: ['Django REST Framework', 'JWT', 'PostgreSQL', 'Swagger', 'API Design'],
  },
  {
    title: 'Role-Based Access Control System',
    description:
      'Comprehensive identity and access management solution with hierarchical roles, permission inheritance, and multi-factor authentication. Ensures enterprise-grade security compliance.',
    tech: ['Django', 'JWT', 'OAuth2', 'Redis', 'Security Architecture'],
  },
];

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          className="text-center mb-12"
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
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 glass-effect group h-full flex flex-col"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <Layers className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}