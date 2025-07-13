'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Zap, 
  Users, 
  TrendingUp, 
  ArrowRight,
  Clock,
  Shield,
  Globe
} from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "Connect in Minutes",
    description: "OAuth into your ERP, CRM & bank rails—global coverage, zero code.",
    icon: Zap,
    features: ["One-click integrations", "Bank-grade security", "Global coverage"]
  },
  {
    number: "2",
    title: "Onboard Your Team",
    description: "Assign roles (CFO, Accountant, AP Specialist) and watch dashboards auto-customize.",
    icon: Users,
    features: ["Role-based access", "Auto-customization", "Team collaboration"]
  },
  {
    number: "3",
    title: "Automate & Optimize",
    description: "Let Mercury handle the grunt work—focus on strategy, not spreadsheets.",
    icon: TrendingUp,
    features: ["AI automation", "Strategic insights", "Continuous optimization"]
  }
];

export default function GetStartedSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-soft-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-indigo-night mb-6">
            How to{' '}
            <span className="bg-gradient-to-r from-electric-teal to-coral-blossom bg-clip-text text-transparent">
              Get Started
            </span>
          </h2>
          <p className="text-xl text-indigo-night/70 max-w-3xl mx-auto">
            Transform your FinanceOps in three simple steps—no technical expertise required
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-electric-teal to-transparent z-0">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    className="h-full bg-electric-teal origin-left"
                  />
                </div>
              )}

              <div className="glass rounded-3xl p-8 hover-lift relative z-10">
                {/* Step Number */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-electric-teal to-indigo-night rounded-2xl mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <step.icon className="w-12 h-12 text-electric-teal" />
                </div>

                {/* Content */}
                <h3 className="font-montserrat font-bold text-2xl text-indigo-night text-center mb-4">
                  {step.title}
                </h3>
                
                <p className="text-indigo-night/70 text-center mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-electric-teal rounded-full mr-3"></div>
                      <span className="text-indigo-night/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="font-montserrat font-bold text-3xl lg:text-4xl text-indigo-night mb-6">
              Ready to Transform Your FinanceOps?
            </h3>
            
            <p className="text-xl text-indigo-night/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of finance teams who've already made the switch to intelligent automation
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="group bg-electric-teal hover:bg-indigo-night text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover-lift focus-ring flex items-center justify-center">
                Start My Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="border-2 border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover-lift focus-ring">
                Schedule a Live Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-indigo-night/10">
              <div className="flex items-center justify-center space-x-3">
                <Clock className="w-6 h-6 text-electric-teal" />
                <span className="text-indigo-night/70">Setup in 15 minutes</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Shield className="w-6 h-6 text-electric-teal" />
                <span className="text-indigo-night/70">Enterprise security</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Globe className="w-6 h-6 text-electric-teal" />
                <span className="text-indigo-night/70">24/7 global support</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {[
            { label: "No Setup Fees", value: "$0" },
            { label: "Free Trial", value: "30 Days" },
            { label: "Implementation", value: "< 1 Week" },
            { label: "ROI Timeline", value: "< 3 Months" }
          ].map((item, index) => (
            <div key={index} className="text-center p-4 rounded-xl bg-white/50">
              <div className="text-2xl font-bold text-electric-teal mb-1">{item.value}</div>
              <div className="text-indigo-night/70 text-sm">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}