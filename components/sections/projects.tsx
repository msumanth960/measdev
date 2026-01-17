'use client';

import { motion } from 'framer-motion';
import {
  Activity,
  BarChart3,
  FileText,
  Lock,
  Server,
  ShoppingCart,
  TrendingUp,
  Vote,
} from 'lucide-react';

const projects = [
  {
    title: 'Control Systems Design & Visualization',
    description:
      'Engineered mathematical models for control system analysis with dynamic plotting capabilities. Implemented transfer function evaluation, stability analysis, and real-time graphical representation.',
    tech: ['Python', 'NumPy', 'Matplotlib', 'Control Theory'],
    icon: Activity,
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Stock Trade Allocation Engine',
    description:
      'Intelligent trade allocation system distributing orders across accounts based on configurable rules, portfolio weights, and regulatory constraints with audit trails.',
    tech: ['Django', 'Pandas', 'PostgreSQL', 'Celery'],
    icon: TrendingUp,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Asset Health Predictive Intelligence',
    description:
      'Predictive analytics platform for asset health monitoring. Leverages historical patterns to forecast maintenance requirements and potential failures.',
    tech: ['Python', 'Pandas', 'ML', 'Forecasting'],
    icon: BarChart3,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Dynamic Election Voting System',
    description:
      'Time-sensitive voting platform with dynamic candidate visibility based on election phases. Secure ballot casting with real-time result tabulation.',
    tech: ['Django', 'PostgreSQL', 'Redis', 'WebSockets'],
    icon: Vote,
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    title: 'Audit Report Automation Suite',
    description:
      'Automated pipeline for audit report processing — segregating data, aggregating metrics, and generating consolidated reports. 90% effort reduction.',
    tech: ['Python', 'Pandas', 'Excel', 'Automation'],
    icon: FileText,
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    title: 'E-commerce Platform Architecture',
    description:
      'Full-stack e-commerce with product catalog, shopping cart workflows, payment integration, and order lifecycle tracking. Built for scale.',
    tech: ['Django', 'PostgreSQL', 'Stripe', 'Redis'],
    icon: ShoppingCart,
    gradient: 'from-indigo-500 to-blue-600',
  },
  {
    title: 'Enterprise REST API Framework',
    description:
      'Production-grade API with JWT authentication, granular permissions, rate limiting, and auto-generated documentation for multiple clients.',
    tech: ['DRF', 'JWT', 'PostgreSQL', 'Swagger'],
    icon: Server,
    gradient: 'from-slate-500 to-gray-600',
  },
  {
    title: 'Role-Based Access Control System',
    description:
      'Identity and access management with hierarchical roles, permission inheritance, and multi-factor authentication for enterprise security.',
    tech: ['Django', 'JWT', 'OAuth2', 'Security'],
    icon: Lock,
    gradient: 'from-red-500 to-rose-600',
  },
];

export function Projects() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              >
                {/* Gradient Top Border */}
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`p-2.5 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100 dark:border-gray-800">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}