                                                                                                                                                                                                                                                                             "use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
    Apple,
    ArrowRight,
    Award,
    CheckCircle,
    Code,
    Layers,
    Palette,
    Smartphone,
    Star,
    TrendingUp,
    Users,
    Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { use } from "react"

// Mock data - replace with your actual data
const serviceDetailsData = {
  "mobile-app-development": {
    id: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "Leading Mobile Application Development Services Provider",
    description:
      "Our mobile app development services deliver cutting-edge solutions for iOS and Android platforms. We create intuitive, high-performance applications that engage users and drive business growth.",
    image: "/placeholder.svg?height=400&width=600",
    keyFeatures: [
      {
        title: "Native iOS and Android development",
        description: "Platform-specific apps with optimal performance",
      },
      {
        title: "Cross-platform solutions with React Native and Flutter",
        description: "Cost-effective development for multiple platforms",
      },
      {
        title: "UI/UX design focused on user engagement",
        description: "Intuitive interfaces that delight users",
      },
      {
        title: "Backend integration and API development",
        description: "Seamless connectivity with your existing systems",
      },
      {
        title: "Ongoing maintenance and support",
        description: "Continuous updates and improvements",
      },
      {
        title: "Scalable architecture",
        description: "Built to grow with your business needs",
      },
    ],
    process: {
      title: "Our Development Process",
      steps: [
        {
          number: 1,
          title: "Discovery & Planning",
          description: "We analyze your requirements and create a detailed project roadmap.",
        },
        {
          number: 2,
          title: "UI/UX Design",
          description: "Our designers create intuitive and engaging user interfaces.",
        },
        {
          number: 3,
          title: "Development",
          description: "We build your app using the latest technologies and best practices.",
        },
        {
          number: 4,
          title: "Testing & QA",
          description: "Rigorous testing to ensure your app is bug-free and performs well.",
        },
        {
          number: 5,
          title: "Deployment & Support",
          description: "We help launch your app and provide ongoing maintenance.",
        },
      ],
    },
    technologies: {
      title: "Technologies We Use",
      categories: [
        {
          name: "Native Development",
          items: ["Swift & Objective-C (iOS)", "Kotlin & Java (Android)", "SwiftUI & Jetpack Compose"],
        },
        {
          name: "Cross-Platform",
          items: ["React Native", "Flutter", "Xamarin"],
        },
        {
          name: "Backend",
          items: ["Node.js", "Firebase", "AWS & Azure"],
        },
        {
          name: "Tools & Services",
          items: ["CI/CD Pipelines", "Analytics Integration", "Payment Gateways"],
        },
      ],
    },
    specializedServices: [
      {
        icon: "Smartphone",
        title: "iOS Development",
        description: "Native iOS applications built with Swift and Objective-C",
        slug: "ios-development",
      },
      {
        icon: "Code",
        title: "Android Development",
        description: "Native Android applications built with Kotlin and Java",
        slug: "android-development",
      },
      {
        icon: "Layers",
        title: "Cross-Platform Apps",
        description: "Efficient multi-platform development with React Native and Flutter",
        slug: "cross-platform-apps",
      },
    ],
    whyChooseUs: [
      "Experienced team of mobile developers",
      "Proven track record of successful app launches",
      "User-centered design approach",
      "Transparent development process",
      "Ongoing support and maintenance",
    ],
  },
}

const iconMap = {
  Smartphone,
  Apple,
  Layers,
  Code,
  Palette,
  Zap,
}

interface ServiceDetailsPageProps {
  params: Promise<{ slug: string }>
}

export default function ServiceDetailsPage({ params }: ServiceDetailsPageProps) {
  const { slug } = use(params)
  const serviceData = serviceDetailsData[slug as keyof typeof serviceDetailsData]

  if (!serviceData) {
    return <div>Service not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-6 bg-blue-500/10 text-blue-300 border-blue-500/20">
                <Smartphone className="w-4 h-4 mr-2" />
                Service Details
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">{serviceData.title}</h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">{serviceData.subtitle}</p>
              <p className="text-lg text-slate-400 mb-8">{serviceData.description}</p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full">
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={serviceData.image || "/placeholder.svg"}
                  alt={serviceData.title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Key Features & Benefits</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover what makes our mobile app development services stand out from the competition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-gradient-to-br from-slate-100 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{serviceData.process.title}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A systematic approach to deliver exceptional software solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {serviceData.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < serviceData.process.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 -translate-y-0.5" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{serviceData.technologies.title}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust and scalable solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.technologies.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">{category.name}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2 text-slate-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-24 bg-gradient-to-br from-slate-100 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Specialized Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Dive deeper into our specialized offerings tailored to your specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceData.specializedServices.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/services/${slug}/${service.slug}`}>
                    <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                        <Button
                          variant="outline"
                          className="group-hover:bg-blue-600 group-hover:text-white transition-colors"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Why Choose TechExpert?</h2>
              <div className="space-y-4">
                {serviceData.whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-lg text-slate-700">{reason}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-blue-100">Happy Clients</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-purple-100">Awards Won</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-green-100">Success Rate</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                <CardContent className="p-6 text-center">
                  <Star className="w-8 h-8 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">4.9</div>
                  <div className="text-orange-100">Client Rating</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. Contact us today for a free
              consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 rounded-full text-lg font-semibold">
                Start Your Project
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
