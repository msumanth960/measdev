'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  Code2,
  Database,
  LineChart,
  Rocket,
  Server,
  Sparkles,
} from 'lucide-react';

const highlights = [
  'Backend Architecture',
  'Data Analytics',
  'REST APIs',
  'Automation',
  'AI Integration',
];

const stats = [
  {
    label: 'Years in Tech',
    value: '6+',
    icon: Calendar,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    label: 'Projects Delivered',
    value: '50+',
    icon: Rocket,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    label: 'Technologies',
    value: '20+',
    icon: Code2,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    label: 'Data Pipelines',
    value: '30+',
    icon: LineChart,
    gradient: 'from-orange-500 to-amber-500',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 glass-effect h-full">
                {/* Intro Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
                  <Sparkles size={16} />
                  Python Engineer & Data Specialist
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Building Scalable Solutions with Code & Data
                </h3>

                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p>
                    I'm <span className="font-semibold text-gray-900 dark:text-gray-100">Sumanth Medichetti</span>, 
                    a Senior Python Engineer with <span className="text-primary-600 dark:text-primary-400 font-medium">6+ years</span> of 
                    experience crafting backend systems and data solutions. My journey spans from enterprise software at 
                    <span className="font-medium text-gray-900 dark:text-gray-100"> TCS</span> to building production systems 
                    at startups — and even running my own business.
                  </p>

                  <p>
                    I specialize in <span className="font-medium text-gray-900 dark:text-gray-100">Django, REST APIs, and data analytics</span> with 
                    Pandas and NumPy. My work includes trade allocation engines, predictive analytics platforms, 
                    automated reporting pipelines, and complex rule-based systems that drive business decisions.
                  </p>

                  <p>
                    What sets me apart is my blend of <span className="font-medium text-gray-900 dark:text-gray-100">technical depth</span> and 
                    <span className="font-medium text-gray-900 dark:text-gray-100"> business acumen</span> — I understand not just how to build systems, 
                    but why they matter to the business. I thrive on solving complex problems and turning messy data into actionable insights.
                  </p>
                </div>

                {/* Highlight Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="relative bg-white dark:bg-gray-900 rounded-2xl p-5 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {/* Gradient Accent */}
                    <div
                      className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-bl-full`}
                    />

                    <div
                      className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${stat.gradient} mb-3`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Career Journey Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: Briefcase, text: 'TCS Alumni', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' },
              { icon: Server, text: 'Starlly Solution', color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300' },
              { icon: Database, text: 'Freelance Expert', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' },
            ].map((badge) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.text}
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${badge.color}`}
                >
                  <Icon size={16} />
                  {badge.text}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}