'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Quiplyst cut our close from 5 days to 5 hours—and Mercury's insights helped us spot a $200K vendor over-payment.",
    author: "Aisha H.",
    title: "CFO",
    company: "GulfLogistics",
    location: "Dubai",
    rating: 5,
    avatar: "AH"
  },
  {
    id: 2,
    quote: "We replaced three point-tools with one platform—our London office loves the AI chatbot!",
    author: "Tom W.",
    title: "Finance Lead",
    company: "BritWare",
    location: "London",
    rating: 5,
    avatar: "TW"
  },
  {
    id: 3,
    quote: "Mercury's forecasting saved us from a cash crunch we never saw coming. The AI scenarios are incredibly accurate.",
    author: "Sarah M.",
    title: "Controller",
    company: "TechFlow",
    location: "Toronto",
    rating: 5,
    avatar: "SM"
  },
  {
    id: 4,
    quote: "The compliance automation is a game-changer. We're SOX-ready in minutes, not weeks.",
    author: "James L.",
    title: "Finance Director",
    company: "AusFinance",
    location: "Sydney",
    rating: 5,
    avatar: "JL"
  }
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-indigo-night to-electric-teal relative overflow-hidden" id="testimonials">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-goldenrod/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-white mb-6">
            Trusted by Finance Teams{' '}
            <span className="bg-gradient-to-r from-goldenrod to-coral-blossom bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            See how Mercury is transforming FinanceOps across the globe
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Testimonial */}
          <div className="glass-dark rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="text-center">
              <Quote className="w-12 h-12 text-goldenrod mx-auto mb-6" />
              
              <motion.blockquote
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-8"
              >
                "{testimonials[currentIndex].quote}"
              </motion.blockquote>

              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center justify-center space-x-4"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-electric-teal to-goldenrod rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>
                
                <div className="text-left">
                  <div className="flex items-center space-x-2 mb-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-goldenrod fill-current" />
                    ))}
                  </div>
                  <p className="text-white font-semibold">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-white/80 text-sm">
                    {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                  </p>
                  <p className="text-white/60 text-sm">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 glass-dark rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 focus-ring"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-goldenrod' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 glass-dark rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 focus-ring"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        {/* Thumbnail Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.05 }}
              className={`glass-dark rounded-xl p-4 text-left transition-all duration-200 ${
                index === currentIndex ? 'ring-2 ring-goldenrod' : 'hover:bg-white/10'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-electric-teal to-goldenrod rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-white/60 text-xs">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-white/80 text-xs line-clamp-2">
                "{testimonial.quote}"
              </p>
            </motion.button>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "500+", label: "Finance Teams" },
            { number: "95%", label: "Customer Satisfaction" },
            { number: "40%", label: "Faster Close" },
            { number: "24/7", label: "Global Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-goldenrod mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}