'use client';

import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react';

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Capabilities", href: "#capabilities" },
      { name: "Integrations", href: "/integrations" },
      { name: "Security", href: "/security" },
      { name: "Pricing", href: "/pricing" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { name: "Mid-Market", href: "/solutions/mid-market" },
      { name: "Enterprise", href: "/solutions/enterprise" },
      { name: "Startups", href: "/solutions/startups" },
      { name: "By Industry", href: "/solutions/industries" },
      { name: "Use Cases", href: "/solutions/use-cases" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "Help Center", href: "/help" },
      { name: "Blog", href: "/blog" },
      { name: "Webinars", href: "/webinars" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Partners", href: "/partners" },
      { name: "Contact", href: "/contact" }
    ]
  }
];

const partners = [
  "SAP", "NetSuite", "Xero", "Sage", "Zoho", "Oracle"
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/quiplyst" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/quiplyst" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/quiplyst" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/quiplyst" }
];

const legalLinks = [
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "GDPR Compliance", href: "/gdpr" },
  { name: "ZATCA Compliance", href: "/zatca" }
];

export default function Footer() {
  return (
    <footer className="bg-indigo-night text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-electric-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-coral-blossom/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-electric-teal to-goldenrod rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Q</span>
                  </div>
                  <span className="font-montserrat font-bold text-2xl">Quiplyst</span>
                </div>

                <p className="text-white/80 mb-6 leading-relaxed">
                  AI-powered FinanceOps platform that transforms manual processes into intelligent, automated workflows. From New York to Dubai, we help finance teams close faster and forecast smarter.
                </p>

                {/* Global Support */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-goldenrod">Global Support</h4>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-electric-teal" />
                    <span className="text-white/80">24/7 English & Arabic chat support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-electric-teal" />
                    <span className="text-white/80">support@quiplyst.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-electric-teal" />
                    <span className="text-white/80">US, UK, Canada, Australia, Middle East</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-electric-teal transition-colors duration-200 focus-ring"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Navigation Sections */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-montserrat font-bold text-lg mb-4 text-goldenrod">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-white/80 hover:text-electric-teal transition-colors duration-200 flex items-center group"
                        >
                          {link.name}
                          <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Partners Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-8 mt-12"
          >
            <h4 className="font-montserrat font-bold text-lg mb-6 text-center text-goldenrod">
              Trusted Partners
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="px-4 py-2 bg-white/10 rounded-lg text-white/80 font-medium hover:bg-white/20 transition-colors duration-200"
                >
                  {partner}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-white/60 text-sm"
              >
                © 2025 Quiplyst. All rights reserved. Built with ❤️ for finance teams worldwide.
              </motion.div>

              {/* Legal Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-6"
              >
                {legalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white/60 hover:text-electric-teal transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}