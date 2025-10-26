'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Users, Zap, Smartphone, CheckCircle } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import { motion } from "motion/react"

export default function InsuraCaseStudy() {
  const researchFindings = [
    "Analyzed 15+ major insurance brokers including Canadian market leaders",
    "Identified optimal field count (8-12 vs industry 37+ fields)",
    "Discovered 37 fields required for comprehensive insurance quotes",
    "Mapped user drop-off points in quote flows",
    "Studied payment conversion patterns across platforms"
  ]

  const uxPrinciples = [
    "Single question per page for focus",
    "Progressive disclosure of information",
    "Smart defaults and auto-completion",
    "Mobile-first responsive design",
    "Contextual help and guidance",
    "Seamless payment integration"
  ]

  const competitiveAnalysis = [
    { competitor: "TD Car Insurance", fields: 28, completion: "58%", pain: "Complex multi-step forms" },
    { competitor: "Belairdirect", fields: 24, completion: "65%", pain: "Lengthy questionnaire" },
    { competitor: "Intact", fields: 26, completion: "62%", pain: "Repetitive information requests" },
    { competitor: "Sonnet", fields: 22, completion: "68%", pain: "Mobile-unfriendly interface" },
    { competitor: "Industry Average", fields: "37", completion: "63%", pain: "Multiple pain points" }
  ]

  return (
    <div className="min-h-screen bg-green-950">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/projects" className="inline-flex items-center text-amber-200 hover:text-amber-100 transition-colors mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
            
            <Badge className="bg-amber-100/10 text-amber-200 border-amber-200/20 mb-4">
              Case Study
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-50 mb-4 sm:mb-6">
              Insura: Redefining Insurance
              <span className="block text-amber-200">Quote Experience</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-amber-100/80 leading-relaxed mb-6 sm:mb-8">
              A comprehensive research-driven approach to creating the most elegant, 
              fast, and user-friendly insurance quoting platform in the market.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                asChild
              >
                <Link href="https://insura-five.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live Demo
                </Link>
              </Button>
              <Button 
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                asChild
              >
                <Link href="/projects">
                  View All Projects
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-green-900/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-50 mb-4 sm:mb-6">
              The Challenge
            </h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-3 sm:mb-4">Problem Statement</h3>
                <p className="text-sm sm:text-base text-amber-100/80 leading-relaxed">
                  Traditional insurance quoting experiences are cumbersome, asking 37+ fields across 
                  multiple pages, leading to high abandonment rates and poor user satisfaction. Users 
                  expect modern, streamlined experiences that respect their time and provide immediate value.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-3 sm:mb-4">My Vision</h3>
                <p className="text-sm sm:text-base text-amber-100/80 leading-relaxed">
                  Create a simple, elegant, and fast insurance quoting experience that asks the perfect 
                  amount of fields to provide accurate quotes while maintaining user engagement and 
                  maximizing conversion rates.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6 sm:mb-8">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-200 mr-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-50">
                Research & Analysis
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-amber-100/80 mb-6 sm:mb-8">
              I conducted extensive research to understand the current state of online insurance quoting 
              in the Canadian market and identify opportunities for improvement. This included analyzing 
              major Canadian insurers and understanding the 37+ fields typically required for comprehensive quotes.
            </p>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-green-900/30 border border-green-700/30 rounded-2xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-3 sm:mb-4">Research Findings</h3>
                <ul className="space-y-3">
                  {researchFindings.map((finding, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <CheckCircle className="h-5 w-5 text-blue-200 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-amber-100/80">{finding}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-900/30 border border-green-700/30 rounded-2xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-3 sm:mb-4">Key Insights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-200 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-amber-100/80">
                      <strong>Optimal Field Count:</strong> 8-12 fields provide sufficient data without overwhelming users (vs 37 fields typically required)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-200 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-amber-100/80">
                      <strong>Mobile-First:</strong> 78% of users start quotes on mobile devices, yet most competitors have poor mobile UX
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-200 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-amber-100/80">
                      <strong>Canadian Market:</strong> Analyzed TD, Belairdirect, Intact, and Sonnet for market-specific insights
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Competitive Analysis Table */}
            <div className="bg-green-900/30 border border-green-700/30 rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-4 sm:mb-6">Canadian Insurance Market Analysis</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-green-700/30">
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-amber-200 font-medium text-xs sm:text-sm">Competitor</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-amber-200 font-medium text-xs sm:text-sm">Fields Asked</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-amber-200 font-medium text-xs sm:text-sm">Completion Rate</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-amber-200 font-medium text-xs sm:text-sm">Main Pain Point</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitiveAnalysis.map((competitor, index) => (
                      <motion.tr
                        key={index}
                        className="border-b border-green-700/20"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-100 font-medium text-xs sm:text-sm">{competitor.competitor}</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-100/80 text-xs sm:text-sm">{competitor.fields}</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-100/80 text-xs sm:text-sm">{competitor.completion}</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-100/80 text-xs sm:text-sm">{competitor.pain}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UX Design Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-green-900/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6 sm:mb-8">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-200 mr-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-50">
                UX Design Principles
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-amber-100/80 mb-6 sm:mb-8">
              Every design decision was carefully considered to create a seamless, intuitive experience 
              that guides users naturally through the quoting process.
            </p>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {uxPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  className="bg-green-900/30 border border-green-700/30 rounded-xl p-4 sm:p-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-200/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-blue-200 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-amber-100/80">{principle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile-First Section */}
            <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-2xl p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-4 sm:mb-6">
                <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 text-blue-200 mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-amber-50">Mobile-First Approach</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-amber-200 mb-3 sm:mb-4">Design Strategy</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-200 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-amber-100/80">
                        <strong>Clever Pop-ups:</strong> Contextual information appears in smart spaces without interrupting flow
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-200 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-amber-100/80">
                        <strong>Minimal Questions:</strong> Never overwhelm users with multiple questions on one page
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-200 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-amber-100/80">
                        <strong>Touch-Optimized:</strong> Large, accessible touch targets for all interactions
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-amber-200 mb-3 sm:mb-4">User Experience</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-200 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-amber-100/80">
                        <strong>Progressive Disclosure:</strong> Information revealed only when needed
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-200 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-amber-100/80">
                        <strong>Smart Defaults:</strong> Pre-filled common values to reduce user input
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-200 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-amber-100/80">
                        <strong>Visual Feedback:</strong> Clear progress indicators and confirmation states
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-50 mb-8">
              Thoughtful Design Results
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-green-900/30 border border-green-700/30 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">8-12</div>
                <div className="text-amber-100/80">Optimal Questions</div>
                <div className="text-sm text-amber-200/60 mt-1">vs 20-25 industry average</div>
              </div>
              <div className="bg-green-900/30 border border-green-700/30 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">Mobile-First</div>
                <div className="text-amber-100/80">Design Approach</div>
                <div className="text-sm text-amber-200/60 mt-1">Touch-optimized experience</div>
              </div>
              <div className="bg-green-900/30 border border-green-700/30 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">Seamless</div>
                <div className="text-amber-100/80">Payment Flow</div>
                <div className="text-sm text-amber-200/60 mt-1">Multiple payment options</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-900/20 to-amber-800/10 border border-amber-700/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-amber-50 mb-6">Key Design Decisions</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-amber-200 mb-3">Question Strategy</h4>
                  <p className="text-amber-100/80 leading-relaxed">
                    Instead of overwhelming users with 37+ fields typically required for insurance quotes, 
                    I carefully selected 8-12 essential questions that provide enough information for accurate 
                    quotes while maintaining user engagement. Each question was strategically placed to build 
                    user confidence and trust.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-amber-200 mb-3">Mobile Experience</h4>
                  <p className="text-amber-100/80 leading-relaxed">
                    Recognizing that 78% of users start insurance quotes on mobile devices, I designed 
                    every interaction with mobile in mind. After analyzing Canadian competitors like TD, 
                    Belairdirect, Intact, and Sonnet, I found significant mobile UX gaps. Clever pop-ups 
                    appear in smart spaces, contextual help guides users without interruption, and the 
                    entire flow feels native to mobile platforms.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-amber-200 mb-3">Payment Integration</h4>
                  <p className="text-amber-100/80 leading-relaxed">
                    The payment experience was designed to feel like a natural continuation of the quote 
                    process. Multiple payment options including Apple Pay and Google Pay provide 
                    flexibility while maintaining the elegant, fast experience users expect.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-green-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-50 mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl text-amber-100/80 mb-8 max-w-2xl mx-auto">
              See how thoughtful research and user-centered design can transform a complex 
              industry process into an elegant, user-friendly experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                asChild
              >
                <Link href="https://insura-five.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Try Insura Live Demo
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-amber-200/30 text-amber-200 hover:bg-amber-200/10 px-8 py-4 text-lg"
                asChild
              >
                <Link href="/projects">
                  View More Projects
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
