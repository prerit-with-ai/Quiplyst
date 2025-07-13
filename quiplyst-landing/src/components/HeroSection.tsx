'use client';

import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-teal/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral-blossom/20 rounded-full blur-3xl animate-float delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-night/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Your FinanceOps,{' '}
              <span className="bg-gradient-to-r from-electric-teal to-goldenrod bg-clip-text text-transparent">
                Reinvented by AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              From New York to Dubai, Quiplyst's Mercury copilot slashes manual work and delivers real-time clarity—so you close faster, forecast smarter, and sleep better.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="group bg-electric-teal hover:bg-white text-white hover:text-indigo-night px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover-lift focus-ring flex items-center justify-center">
                Get Your Free Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="group glass text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover-lift focus-ring flex items-center justify-center border border-white/30">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                Watch Mercury in Action
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-white/70"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-electric-teal rounded-full mr-2"></div>
                <span className="text-sm">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-electric-teal rounded-full mr-2"></div>
                <span className="text-sm">GDPR Ready</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-electric-teal rounded-full mr-2"></div>
                <span className="text-sm">99.9% Uptime</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 hover-lift">
              {/* Mercury Mascot with Lottie Animation */}
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-electric-teal/20 to-indigo-night/20 rounded-2xl flex items-center justify-center">
                  {/* Lottie Animation Container */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Player
                      autoplay
                      loop
                      src="https://lottie.host/4d5e7b8c-9f2a-4c8e-8b1a-2d3c4e5f6a7b/abcdef123456.json"
                      style={{ height: '300px', width: '300px' }}
                      className="mercury-lottie"
                    />
                    
                    {/* Fallback content if Lottie fails to load */}
                    <motion.div
                      animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 flex items-center justify-center text-center"
                    >
                      <div>
                        <div className="w-24 h-24 bg-gradient-to-r from-electric-teal to-goldenrod rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-white font-bold text-2xl">M</span>
                        </div>
                        <p className="text-white font-medium">Mercury AI Copilot</p>
                        <p className="text-white/70 text-sm mt-2">Your FinanceOps Assistant</p>
                      </div>
                    </motion.div>
                    
                    {/* Data stream effect overlay */}
                    <div className="absolute inset-0 pointer-events-none">
                      <motion.div
                        animate={{
                          background: [
                            'linear-gradient(45deg, transparent 0%, rgba(23, 195, 163, 0.3) 50%, transparent 100%)',
                            'linear-gradient(45deg, transparent 30%, rgba(63, 81, 133, 0.3) 70%, transparent 100%)',
                            'linear-gradient(45deg, transparent 0%, rgba(23, 195, 163, 0.3) 50%, transparent 100%)'
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-full h-full rounded-2xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Data Points */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -top-4 -left-4 glass-dark rounded-lg p-3"
                >
                  <div className="text-electric-teal font-bold text-sm">95%</div>
                  <div className="text-white/70 text-xs">Auto-Match</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                  className="absolute -top-2 -right-6 glass-dark rounded-lg p-3"
                >
                  <div className="text-goldenrod font-bold text-sm">5 hrs</div>
                  <div className="text-white/70 text-xs">Close Time</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: 1.5 }}
                  className="absolute -bottom-6 left-8 glass-dark rounded-lg p-3"
                >
                  <div className="text-coral-blossom font-bold text-sm">$200K</div>
                  <div className="text-white/70 text-xs">Saved</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-electric-teal to-goldenrod rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">M</span>
                    </div>
                    <p className="text-white font-medium">Mercury AI Copilot</p>
                    <p className="text-white/70 text-sm mt-2">Your FinanceOps Assistant</p>
                  </motion.div>
                </div>

                {/* Floating Data Points */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -top-4 -left-4 glass-dark rounded-lg p-3"
                >
                  <div className="text-electric-teal font-bold text-sm">95%</div>
                  <div className="text-white/70 text-xs">Auto-Match</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                  className="absolute -top-2 -right-6 glass-dark rounded-lg p-3"
                >
                  <div className="text-goldenrod font-bold text-sm">5 hrs</div>
                  <div className="text-white/70 text-xs">Close Time</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: 1.5 }}
                  className="absolute -bottom-6 left-8 glass-dark rounded-lg p-3"
                >
                  <div className="text-coral-blossom font-bold text-sm">$200K</div>
                  <div className="text-white/70 text-xs">Saved</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}