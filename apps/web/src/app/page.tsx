"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import CodeExamplesSection from "@/components/code-examples-section";
import PricingSection from "@/components/pricing-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Code Examples Section */}
      <CodeExamplesSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}