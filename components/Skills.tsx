'use client'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    label: 'Data & Analytics',
    icon: '📊',
    skills: ['SQL / Redshift / Spectrum', 'Python / Pandas / NumPy', 'QuickSight Dashboards', 'ETL Pipeline Design (Datanet)', 'Data Modeling & Validation'],
  },
  {
    label: 'Automation & Cloud',
    icon: '⚡',
    skills: ['AWS Lambda / S3 / DynamoDB / SQS', 'Python Automation (scripts, bots, agents)', 'Slack API & Webhook Integrations', 'Scheduled Jobs & Monitoring', 'Serverless Architecture (SAM/CDK)'],
  },
  {
    label: 'Development & Tools',
    icon: '🛠',
    skills: ['TypeScript / React / Next.js', 'VBA / Excel Macro Automation', 'Git / CI/CD / Code Review', 'OpenSearch / Elasticsearch', 'Unity / C# (game dev background)'],
  },
]

export default function Skills() {
  return (
    <section className="py-24 px-6 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-16">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            className="glass rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.15 }}
          >
            <h3 className="text-lg font-bold text-cyan-400 mb-4">
              <span className="mr-2">{cat.icon}</span>{cat.label}
            </h3>
            <ul className="space-y-2">
              {cat.skills.map((skill) => (
                <li key={skill} className="text-sm text-neutral-300 flex items-start gap-2">
                  <span className="text-cyan-400/60 mt-0.5">›</span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
