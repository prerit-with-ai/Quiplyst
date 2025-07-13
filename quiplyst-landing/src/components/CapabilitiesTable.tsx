'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Star, Wand2 } from 'lucide-react';

const capabilities = [
  {
    painPoint: "Manual Reconciliations",
    feature: "Unified Ledger & Auto-Match",
    mercuryMagic: "95% accuracy, human-in-loop for exceptions",
    icon: "🔥"
  },
  {
    painPoint: "Chaotic Expense Capture",
    feature: "Omni-Capture & One-Tap Approvals",
    mercuryMagic: "OCR + AR + push notifications",
    icon: "🔥"
  },
  {
    painPoint: "Blind-Spot Forecasting",
    feature: "AI Scenario Modeling",
    mercuryMagic: "Live FX, multi-currency, what-if sandbox",
    icon: "🔥"
  },
  {
    painPoint: "Slow Month-End Close",
    feature: "Auto-Close Checklist",
    mercuryMagic: "SLA tracking, auto-journal suggestions",
    icon: "🔥"
  },
  {
    painPoint: "Compliance Headaches",
    feature: "RegTech Watcher",
    mercuryMagic: "Continuous scoring & automated filings",
    icon: "🔥"
  }
];

export default function CapabilitiesTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden" id="capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-indigo-night mb-6">
            Core Capabilities{' '}
            <span className="bg-gradient-to-r from-electric-teal to-coral-blossom bg-clip-text text-transparent">
              Snapshot
            </span>
          </h2>
          <p className="text-xl text-indigo-night/70 max-w-3xl mx-auto">
            See how Mercury transforms your biggest challenges into competitive advantages
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block glass rounded-3xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-indigo-night text-white">
                  <th className="px-8 py-6 text-left font-montserrat font-bold text-lg flex items-center">
                    <Flame className="w-6 h-6 text-coral-blossom mr-3" />
                    Pain Point
                  </th>
                  <th className="px-8 py-6 text-left font-montserrat font-bold text-lg">
                    <div className="flex items-center">
                      <Star className="w-6 h-6 text-goldenrod mr-3" />
                      Feature
                    </div>
                  </th>
                  <th className="px-8 py-6 text-left font-montserrat font-bold text-lg">
                    <div className="flex items-center">
                      <Wand2 className="w-6 h-6 text-electric-teal mr-3" />
                      Mercury's Magic
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {capabilities.map((capability, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="border-b border-white/20 hover:bg-white/10 transition-colors duration-200"
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{capability.icon}</span>
                        <span className="font-semibold text-indigo-night">{capability.painPoint}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="font-semibold text-electric-teal">{capability.feature}</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-indigo-night/80">{capability.mercuryMagic}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass rounded-2xl p-6 hover-lift"
            >
              <div className="flex items-start space-x-4 mb-4">
                <span className="text-3xl">{capability.icon}</span>
                <div className="flex-1">
                  <h3 className="font-montserrat font-bold text-lg text-indigo-night mb-2">
                    {capability.painPoint}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center mb-1">
                        <Star className="w-4 h-4 text-goldenrod mr-2" />
                        <span className="font-semibold text-sm text-indigo-night/70">Feature</span>
                      </div>
                      <p className="font-semibold text-electric-teal">{capability.feature}</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <Wand2 className="w-4 h-4 text-electric-teal mr-2" />
                        <span className="font-semibold text-sm text-indigo-night/70">Mercury's Magic</span>
                      </div>
                      <p className="text-indigo-night/80">{capability.mercuryMagic}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-montserrat font-bold text-2xl text-indigo-night mb-4">
              Ready to Experience Mercury's Magic?
            </h3>
            <p className="text-indigo-night/70 mb-6">
              See how these capabilities work together in a personalized demo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-electric-teal hover:bg-indigo-night text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-lift focus-ring">
                Get Your Free Demo
              </button>
              <button className="border-2 border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-lift focus-ring">
                Download Capability Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}