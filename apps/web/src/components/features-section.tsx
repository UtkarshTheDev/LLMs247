"use client";

import { motion } from "framer-motion";
import { 
  RefreshCw, 
  Shield, 
  Brain, 
  Zap, 
  Key, 
  Monitor 
} from "lucide-react";

const features = [
  {
    icon: RefreshCw,
    title: "Key Rotation Engine",
    description: "Automatically rotate API keys across providers to prevent rate limits and maintain continuous service.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Provider Failover",
    description: "Seamlessly switch between AI providers when one goes down, ensuring zero downtime for your applications.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Brain,
    title: "Smart Model Selection",
    description: "AI-powered routing that automatically selects the best model for your specific use case and cost requirements.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Free-tier Optimization",
    description: "Maximize your budget by intelligently routing requests to free-tier models when quality requirements are met.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Key,
    title: "One Key, Multiple Providers",
    description: "Single API integration gives you access to 15+ AI providers including OpenAI, Anthropic, Google, and more.",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: Monitor,
    title: "Real-time Monitoring",
    description: "Track performance, costs, and usage across all providers with comprehensive analytics and alerts.",
    gradient: "from-red-500 to-pink-500"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Everything you need to scale
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              your AI applications
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built for developers who demand reliability, performance, and simplicity in their AI integrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-20`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gray-100 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Ready to simplify your AI infrastructure?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg shadow-blue-500/25 transition-all duration-300"
            onClick={() => window.open("https://app.llms247.com", "_blank")}
          >
            Start Building Today
            <motion.svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}