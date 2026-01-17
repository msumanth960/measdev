'use client';

import { motion } from 'framer-motion';
import { Code, Database, Server } from 'lucide-react';

export function About() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const stats = [
    { label: 'Years of Experience', value: '5+', icon: Code },
    { label: 'Projects Completed', value: '50+', icon: Server },
    { label: 'Technologies Mastered', value: '15+', icon: Database },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 mb-12 glass-effect"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm an experienced{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                Django & Python Developer
              </span>{' '}
              with a passion for building robust, scalable backend systems. My
              expertise lies in developing high-performance REST APIs, designing
              efficient database schemas, and implementing complex business logic
              that powers modern web applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Over the years, I've worked on diverse projects ranging from
              e-commerce platforms to SaaS applications, always focusing on code
              quality, performance optimization, and maintainability. I'm
              proficient in building secure authentication systems, implementing
              background task processing with Celery, and deploying applications
              on cloud platforms like AWS.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My approach combines{' '}
              <span className="font-semibold">clean architecture</span>,{' '}
              <span className="font-semibold">test-driven development</span>, and{' '}
              <span className="font-semibold">best practices</span> to deliver
              solutions that not only meet requirements but exceed expectations.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 glass-effect text-center"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}