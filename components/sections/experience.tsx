'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Django Developer & Data Analyst',
    company: 'Freelance / Remote',
    period: '2023 - Present',
    highlight: 'Django, Pandas, REST APIs, Data Analytics, AWS',
  },
  {
    title: 'Backend Developer',
    company: 'Starlly Solution',
    period: 'May 2022 - Present',
    highlight: 'Django, Celery, Redis, Production Systems, DevOps',
  },
  {
    title: 'Business Owner',
    company: 'Alankar Bar & Restaurant',
    period: 'Apr 2021 - May 2022',
    highlight: 'Operations, Team Management, Business Development',
  },
  {
    title: 'Python Developer',
    company: 'Tata Consultancy Services (TCS)',
    period: 'Nov 2018 - Feb 2021',
    highlight: 'Django, PostgreSQL, REST APIs, Enterprise Solutions',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-primary-400 to-primary-600 transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative flex items-center mb-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary-600 rounded-full transform md:-translate-x-1/2 z-10 ring-4 ring-white dark:ring-gray-900" />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-5 glass-effect shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        {exp.title}
                      </h3>
                      <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <Briefcase size={14} />
                      <span>{exp.company}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.highlight.split(', ').map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}