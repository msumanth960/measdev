'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Target, Zap } from 'lucide-react';

interface Challenge {
  title: string;
  problem: string;
  solution: string;
  impact?: string;
  skills: string[];
}

const challenges: Challenge[] = [
  {
    title: 'Pandas + Analytics Deep Work',
    problem:
      'Complex client filtering logic with multiple business rules including freeze conditions, stock restrictions, scheme eligibility, and cash requirements.',
    solution:
      'Built multi-condition filtering engine with rejection reason tracking. Created derived columns, aggregations, and optimized dataframe operations for scale without altering core filtering logic.',
    impact: 'Improved data processing speed and decision accuracy for large datasets',
    skills: [
      'Pandas',
      'NumPy',
      'Data Cleaning',
      'Transformations',
      'GroupBy/Aggregate',
      'Conditional Logic',
      'Performance Optimization',
    ],
  },
  {
    title: 'Automated Report Generation Pipeline',
    problem:
      'Manual report creation from raw trade and analytics data was time-consuming and error-prone for business teams.',
    solution:
      'Built end-to-end report generation pipelines transforming raw data into structured summary reports with Excel exports, tabular summaries, and formatted notes.',
    impact: 'Reduced manual reporting effort by 80%, ensuring consistent operational reports',
    skills: [
      'Pandas Reporting',
      'Excel Export',
      'Data Formatting',
      'Automated Pipelines',
      'Business Intelligence',
    ],
  },
  {
    title: 'Trade Automation Rule Engine',
    problem:
      'Firm-level buy conditions required complex AND/OR logic with edge cases like min/max value combinations and incomplete rules.',
    solution:
      'Implemented robust rule engine with ordered condition evaluation, edge case handling, and validation logic ensuring correctness of automated trading decisions.',
    impact: 'Enabled reliable automated trade execution with zero false positives',
    skills: [
      'Analytical Logic',
      'Django ORM',
      'Automation Workflows',
      'Rule Engine Design',
      'Business Logic',
    ],
  },
  {
    title: 'Web Scraping & Extraction Pipelines',
    problem:
      'Need for structured data extraction from various web sources to feed analytics and reporting systems.',
    solution:
      'Built repeatable extraction pipelines with robust parsing, data normalization, and error handling for reliable data ingestion.',
    impact: 'Automated data collection feeding real-time analytics dashboards',
    skills: [
      'Web Scraping',
      'Data Parsing',
      'Automation',
      'Data Normalization',
      'Pipeline Architecture',
    ],
  },
  {
    title: 'E-paper Online Store / SaaS Platform',
    problem:
      'Building a production-ready e-commerce ordering flow with complex listing modules and backend workflows.',
    solution:
      'Designed scalable database schema, implemented RESTful APIs, and built complete ordering workflow with inventory management and payment integration.',
    impact: 'Delivered production-ready SaaS platform serving multiple clients',
    skills: [
      'Django',
      'REST APIs',
      'Database Modeling',
      'SaaS Architecture',
      'Backend Engineering',
    ],
  },
  {
    title: 'Production Debugging & DevOps',
    problem:
      'Critical production issues including server timeouts, Git conflicts, network routing problems, and database latency.',
    solution:
      'Performed deep-dive debugging on production VMs via SSH: resolved Gunicorn timeouts, fixed merge conflicts, investigated network congestion, and optimized database queries.',
    impact: 'Restored system stability and improved server response times by 60%',
    skills: [
      'Linux',
      'SSH',
      'Git',
      'Deployments',
      'Troubleshooting',
      'Performance Tuning',
    ],
  },
];

function ChallengeCard({ challenge, index }: { challenge: Challenge; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 glass-effect h-full flex flex-col"
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-start gap-3">
        <Lightbulb className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
        {challenge.title}
      </h3>

      {/* Problem */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-red-600 dark:text-red-400 mb-1">
          <Target size={16} />
          Challenge
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {challenge.problem}
        </p>
      </div>

      {/* Solution */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-green-600 dark:text-green-400 mb-1">
          <Zap size={16} />
          Solution
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {challenge.solution}
        </p>
      </div>

      {/* Impact */}
      {challenge.impact && (
        <div className="mb-4 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg border-l-4 border-primary-600 dark:border-primary-400">
          <p className="text-sm text-primary-700 dark:text-primary-300 font-medium">
            {challenge.impact}
          </p>
        </div>
      )}

      {/* Skills */}
      <div className="mt-auto pt-4">
        <div className="flex flex-wrap gap-2">
          {challenge.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Challenges() {
  return (
    <section id="challenges" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Engineering Solutions
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Complex real-world problems I've tackled — from data engineering to production systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => (
            <ChallengeCard key={challenge.title} challenge={challenge} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}