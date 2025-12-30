"use client";

import { motion } from "framer-motion";
import { Code2, Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-30"></div>
                <Code2 className="relative h-8 w-8 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                LLMs247
              </span>
            </div>
            <p className="text-gray-400 max-w-md mb-6">
              The unified AI API gateway that simplifies how developers integrate 
              and scale with multiple AI model providers. One key, infinite possibilities.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/llms247"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/llms247"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/llms247"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@llms247.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://docs.llms247.com" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://status.llms247.com" className="text-gray-400 hover:text-white transition-colors">
                  Status Page
                </a>
              </li>
              <li>
                <a href="https://changelog.llms247.com" className="text-gray-400 hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://blog.llms247.com" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://llms247.com/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="mailto:hello@llms247.com" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://llms247.com/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="https://llms247.com/press" className="text-gray-400 hover:text-white transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <p>© {new Date().getFullYear()} LLMs247. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="https://llms247.com/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="https://llms247.com/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}