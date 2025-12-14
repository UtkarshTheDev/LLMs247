"use client";

import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const codeExamples = [
  {
    title: "Chat Completion",
    description: "Simple chat completion with automatic model selection",
    language: "typescript",
    code: `import { llms247 } from "@llms247/sdk"

const res = await llms247.chat({
  model: "best",
  prompt: "Explain quantum computing in simple words."
})
console.log(res.text)`
  },
  {
    title: "Custom Routing",
    description: "Route to specific providers with custom parameters",
    language: "typescript",
    code: `import { llms247 } from "@llms247/sdk"

// Route to OpenAI GPT-4 for reasoning tasks
const reasoning = await llms247.chat({
  provider: "openai",
  model: "gpt-4",
  prompt: "Solve this complex algorithm problem...",
  temperature: 0.1
})

// Route to Claude for creative writing
const creative = await llms247.chat({
  provider: "anthropic",
  model: "claude-3-sonnet",
  prompt: "Write a short story about AI and humanity...",
  temperature: 0.9
})`
  },
  {
    title: "Streaming Responses",
    description: "Real-time streaming with proper error handling",
    language: "typescript",
    code: `import { llms247 } from "@llms247/sdk"

try {
  const stream = await llms247.chat({
    model: "best",
    prompt: "Write a detailed technical explanation...",
    stream: true
  })

  for await (const chunk of stream) {
    process.stdout.write(chunk.text)
  }
} catch (error) {
  console.error('Streaming failed:', error)
  // Automatic failover to backup provider
}`
  }
];

export default function CodeExamplesSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (code: string, index: number) => {
    await navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="code" className="py-24 bg-gradient-to-b from-gray-900 to-black">
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
              Simple API,
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Powerful Results
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get started in minutes with our developer-friendly API. 
            One integration gives you access to every AI model.
          </p>
          
          {/* Installation Command */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2 mb-12"
          >
            <span className="text-gray-400">$</span>
            <code className="text-green-400 font-mono">npm install @llms247/sdk</code>
            <Button
              size="sm"
              variant="ghost"
              className="ml-2 text-gray-400 hover:text-white p-1 h-auto"
              onClick={() => copyToClipboard("npm install @llms247/sdk", -1)}
            >
              {copiedIndex === -1 ? (
                <Check className="h-3 w-3" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {codeExamples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {example.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {example.description}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => copyToClipboard(example.code, index)}
                  >
                    {copiedIndex === index ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {/* Code */}
                <div className="relative">
                  <SyntaxHighlighter
                    language={example.language}
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      padding: '1.5rem',
                      background: 'transparent',
                      fontSize: '14px',
                      lineHeight: '1.6'
                    }}
                    showLineNumbers={false}
                    wrapLines={true}
                  >
                    {example.code}
                  </SyntaxHighlighter>
                </div>
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
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to integrate?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of developers already building with LLMs247
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25"
                onClick={() => window.open("https://app.llms247.com", "_blank")}
              >
                Get Free API Key
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => window.open("https://docs.llms247.com", "_blank")}
              >
                View Full Documentation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}