'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Server,
  Cloud,
  BarChart3,
  Brain,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend',
    icon: Server,
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Django', level: 90 },
      { name: 'Django REST Framework', level: 88 },
      { name: 'Celery', level: 85 },
      { name: 'Redis', level: 80 },
    ],
  },
  {
    title: 'Data Analytics',
    icon: BarChart3,
    gradient: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Pandas', level: 92 },
      { name: 'NumPy', level: 88 },
      { name: 'Polars', level: 75 },
      { name: 'Matplotlib', level: 85 },
      { name: 'Seaborn', level: 80 },
    ],
  },
  {
    title: 'AI & ML Tools',
    icon: Brain,
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'LLM Integration', level: 78 },
      { name: 'OpenAI API', level: 82 },
      { name: 'Prompt Engineering', level: 80 },
      { name: 'AI Automation', level: 75 },
      { name: 'Data Pipelines', level: 85 },
    ],
  },
  {
    title: 'Frontend',
    icon: Code,
    gradient: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'TypeScript', level: 82 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    gradient: 'from-rose-500 to-red-500',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'SQLite', level: 88 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: Cloud,
    gradient: 'from-slate-500 to-gray-500',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'GitHub', level: 90 },
      { name: 'Linux', level: 88 },
      { name: 'AWS (EC2, S3)', level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient Top Border */}
                <div className={`h-1.5 bg-gradient-to-r ${category.gradient}`} />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`p-2.5 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.8,
                              delay: 0.1 + skillIndex * 0.1,
                              ease: 'easeOut',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}