'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Django Developer',
    company: 'Freelance / Remote',
    period: '2021 - Present',
    description: [
      'Developed and maintained multiple Django-based web applications for clients across various industries',
      'Designed and implemented RESTful APIs using Django REST Framework with high performance and scalability',
      'Architected database schemas optimized for complex business requirements using PostgreSQL',
      'Implemented background task processing with Celery and Redis for asynchronous operations',
      'Deployed applications on AWS (EC2, S3, RDS) with Docker containerization',
      'Collaborated with frontend developers to integrate React/Next.js applications with Django backends',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'Tech Company',
    period: '2019 - 2021',
    description: [
      'Built and maintained Django applications serving thousands of daily active users',
      'Developed REST APIs for mobile and web clients with comprehensive authentication and authorization',
      'Optimized database queries and implemented caching strategies to improve application performance',
      'Wrote unit and integration tests ensuring code quality and reliability',
      'Participated in code reviews and mentored junior developers',
    ],
  },
  {
    title: 'Python Developer',
    company: 'Startup',
    period: '2018 - 2019',
    description: [
      'Developed Django web applications from scratch following best practices and design patterns',
      'Integrated third-party APIs and payment gateways into web applications',
      'Implemented user authentication, authorization, and role-based access control systems',
      'Worked with PostgreSQL and MySQL databases, writing optimized queries and migrations',
    ],
  },
];

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-12 pl-20 md:pl-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform md:-translate-x-1/2 -translate-y-1 z-10" />
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform md:-translate-x-1/2 -translate-y-1 animate-ping opacity-20" />

                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 glass-effect md:ml-auto md:w-[calc(50%-2rem)]">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-3">
                        <Briefcase size={18} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      <Calendar size={18} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 dark:text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-primary-600 dark:text-primary-400 mt-1.5">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}