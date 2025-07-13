'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FileSpreadsheet, 
  Receipt, 
  TrendingDown, 
  Calendar, 
  Shield,
  CheckCircle,
  AlertTriangle,
  Zap,
  Globe,
  Clock
} from 'lucide-react';

const painPoints = [
  {
    id: 1,
    title: "Siloed Spreadsheets & Manual Reconciliation",
    quote: "We're drowning in Excel, juggling 5 tabs and still missing payments.",
    icon: FileSpreadsheet,
    features: [
      { name: "Unified Ledger & Auto-Match", desc: "95% accuracy, human-in-loop exceptions" },
      { name: "Real-Time Alerts", desc: "Heads up—3 invoices pending approval" },
      { name: "Global Rails", desc: "ACH, Faster Payments, EFT, NPP, SADAD" }
    ],
    bgColor: "bg-soft-cream",
    layout: "two-column"
  },
  {
    id: 2,
    title: "Chaotic Expense Management",
    quote: "Receipts arrive via email, WhatsApp, Slack… I can't keep up.",
    icon: Receipt,
    features: [
      { name: "Omni-Capture", desc: "OCR, email-parse, mobile scan, AR overlay" },
      { name: "AI Categorization & Fraud-Flagging", desc: "Smart detection and prevention" },
      { name: "One-Tap Approvals", desc: "Across London, Sydney, Riyadh" }
    ],
    bgColor: "glass blob",
    layout: "blob"
  },
  {
    id: 3,
    title: "Blind-Spot Cash Forecasts",
    quote: "We only realize a cash crunch when it's too late.",
    icon: TrendingDown,
    features: [
      { name: "AI Scenario Modeling", desc: "What if UK sales dip 10%?" },
      { name: "Natural-Language Queries", desc: "Show runway in AED & USD" },
      { name: "Multi-Currency FX Engine", desc: "Live in every region" }
    ],
    bgColor: "bg-gradient-fluid",
    layout: "fluid"
  },
  {
    id: 4,
    title: "Tedious Month-End Close",
    quote: "Closing takes 5 days—our finance team is burned out.",
    icon: Calendar,
    features: [
      { name: "Auto Journal Entries & Eliminations", desc: "Intelligent automation" },
      { name: "Checklist with SLAs", desc: "Tracked in one unified view" },
      { name: "SOX-Ready Audit Trail & GDPR/PDPA Compliance", desc: "Complete transparency" }
    ],
    bgColor: "blob-alt",
    layout: "organic"
  },
  {
    id: 5,
    title: "Compliance Overload",
    quote: "SOX, VAT, ZATCA… we're losing sleep over changing regs.",
    icon: Shield,
    features: [
      { name: "Continuous Controls Monitoring", desc: "US GAAP, UK IFRS, Saudi ZATCA" },
      { name: "Automated E-Filing", desc: "VAT, GST, 10-K" },
      { name: "Proactive Alerts", desc: "New VAT rule in UAE goes live next week" }
    ],
    bgColor: "bg-indigo-night",
    layout: "dark-stripe"
  }
];

export default function PainPointsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-soft-cream relative overflow-hidden" id="features">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 wavy-divider"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-indigo-night mb-6">
            Stop Fighting Your{' '}
            <span className="bg-gradient-to-r from-electric-teal to-coral-blossom bg-clip-text text-transparent">
              Finance Chaos
            </span>
          </h2>
          <p className="text-xl text-indigo-night/70 max-w-3xl mx-auto">
            Mercury transforms your biggest pain points into seamless, intelligent workflows
          </p>
        </motion.div>

        {/* Pain Points */}
        <div className="space-y-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative ${
                point.layout === 'two-column' ? 'grid lg:grid-cols-2 gap-12 items-center' :
                point.layout === 'blob' ? 'flex justify-center' :
                point.layout === 'fluid' ? 'relative' :
                point.layout === 'organic' ? 'flex justify-center' :
                'w-full'
              }`}
            >
              {point.layout === 'two-column' && (
                <>
                  <div className={`${point.bgColor} rounded-3xl p-8 hover-lift`}>
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-electric-teal rounded-xl flex items-center justify-center">
                          <point.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-montserrat font-bold text-2xl text-indigo-night mb-3">
                          {point.title}
                        </h3>
                        <blockquote className="text-lg text-indigo-night/80 italic border-l-4 border-coral-blossom pl-4">
                          "{point.quote}"
                        </blockquote>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-indigo-night mb-4">Mercury Solves It:</h4>
                      {point.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-electric-teal flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-indigo-night">{feature.name}</span>
                            <p className="text-indigo-night/70 text-sm">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-80 h-80 bg-gradient-to-br from-electric-teal/20 to-indigo-night/20 rounded-3xl flex items-center justify-center">
                      <point.icon className="w-32 h-32 text-indigo-night/30" />
                    </div>
                  </div>
                </>
              )}

              {point.layout === 'blob' && (
                <div className={`glass blob rounded-3xl p-8 max-w-4xl hover-lift`}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-electric-teal rounded-xl flex items-center justify-center">
                          <point.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-montserrat font-bold text-2xl text-indigo-night">
                          {point.title}
                        </h3>
                      </div>
                      
                      <blockquote className="text-lg text-indigo-night/80 italic border-l-4 border-coral-blossom pl-4 mb-6">
                        "{point.quote}"
                      </blockquote>
                      
                      <div className="space-y-3">
                        {point.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/20 transition-colors duration-200"
                          >
                            <Zap className="w-5 h-5 text-electric-teal flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-indigo-night">{feature.name}</span>
                              <p className="text-indigo-night/70 text-sm">{feature.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <motion.div
                        whileHover={{ rotate: 5 }}
                        className="w-64 h-64 bg-gradient-to-br from-electric-teal/30 to-coral-blossom/30 rounded-full flex items-center justify-center"
                      >
                        <point.icon className="w-24 h-24 text-indigo-night/50" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}

              {point.layout === 'fluid' && (
                <div className={`${point.bgColor} rounded-3xl p-8 text-white relative overflow-hidden`}>
                  <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <point.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-montserrat font-bold text-2xl">
                          {point.title}
                        </h3>
                      </div>
                      
                      <blockquote className="text-lg italic border-l-4 border-white/50 pl-4 mb-6">
                        "{point.quote}"
                      </blockquote>
                      
                      <div className="space-y-3">
                        {point.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <Globe className="w-5 h-5 text-goldenrod flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold">{feature.name}</span>
                              <p className="text-white/80 text-sm">{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.05, 1],
                          rotate: [0, 2, -2, 0]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-64 h-64 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm"
                      >
                        <div className="text-center">
                          <point.icon className="w-16 h-16 text-white mx-auto mb-4" />
                          <div className="space-y-2">
                            <motion.div
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="text-2xl font-bold"
                            >
                              95%
                            </motion.div>
                            <div className="text-sm text-white/80">Accuracy</div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-goldenrod/20 rounded-full blur-2xl"></div>
                </div>
              )}

              {point.layout === 'organic' && (
                <div className={`glass ${point.bgColor} rounded-3xl p-8 max-w-4xl hover-lift`}>
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-electric-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <point.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-montserrat font-bold text-2xl text-indigo-night mb-4">
                      {point.title}
                    </h3>
                    <blockquote className="text-lg text-indigo-night/80 italic">
                      "{point.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {point.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="text-center p-4 rounded-xl bg-white/50 hover:bg-white/70 transition-colors duration-200"
                      >
                        <Clock className="w-8 h-8 text-electric-teal mx-auto mb-3" />
                        <h4 className="font-semibold text-indigo-night mb-2">{feature.name}</h4>
                        <p className="text-indigo-night/70 text-sm">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {point.layout === 'dark-stripe' && (
                <div className={`${point.bgColor} rounded-3xl p-8 text-white relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-coral-blossom rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <point.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-montserrat font-bold text-2xl mb-4">
                        {point.title}
                      </h3>
                      <blockquote className="text-lg italic text-white/90">
                        "{point.quote}"
                      </blockquote>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      {point.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
                        >
                          <AlertTriangle className="w-8 h-8 text-coral-blossom mx-auto mb-3" />
                          <h4 className="font-semibold mb-2">{feature.name}</h4>
                          <p className="text-white/80 text-sm">{feature.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Trust badges */}
                    <div className="mt-8 flex justify-center space-x-8">
                      {['SOX', 'GDPR', 'ZATCA', 'ISO 27001'].map((badge) => (
                        <div key={badge} className="text-center">
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                            <span className="text-xs font-bold">{badge}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Background decoration */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-coral-blossom/20 to-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}