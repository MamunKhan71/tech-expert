import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Smartphone, TrendingUp, Code, Brain, Shield, CheckCircle, Star, Users, Award, Zap } from "lucide-react"

export default function WhatWeDo() {
    const services = [
        {
            icon: Globe,
            title: "Web Design and Development",
            description:
                "Create stunning websites that perform well, from simple brochure sites to complex e-commerce platforms.",
            features: ["Content Management Systems", "E-commerce Solutions", "SEO-Friendly Structure", "Responsive Design"],
        },
        {
            icon: Smartphone,
            title: "Mobile App Development",
            description: "Custom mobile apps for iOS and Android that engage your audience and drive business growth.",
            features: [
                "Native & Cross-Platform",
                "User-Friendly Interface",
                "App Store Optimization",
                "Analytics Integration",
            ],
        },
        {
            icon: TrendingUp,
            title: "Digital Marketing",
            description: "Comprehensive digital strategies including SEO, social media marketing, and paid advertising.",
            features: ["Search Engine Optimization", "Social Media Marketing", "Content Marketing", "PPC Advertising"],
        },
        {
            icon: Code,
            title: "Software Development",
            description: "Custom software solutions that streamline operations and drive growth for your business.",
            features: ["Custom Solutions", "System Integration", "Scalable Architecture", "Ongoing Support"],
        },
        {
            icon: Brain,
            title: "AI/ML Solutions",
            description:
                "Artificial intelligence and machine learning solutions for automation and enhanced decision-making.",
            features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Deep Learning Models"],
        },
        {
            icon: Shield,
            title: "Cybersecurity Solutions",
            description: "Robust cybersecurity services to protect your business from data breaches and cyberattacks.",
            features: ["Risk Assessment", "Penetration Testing", "Network Security", "Compliance Solutions"],
        },
    ]

    const whyChooseUs = [
        {
            icon: Award,
            title: "Experience",
            description: "Over a decade of experience with a proven track record across industries.",
        },
        {
            icon: Star,
            title: "Quality",
            description: "Industry best practices and latest technologies ensuring highest standards.",
        },
        {
            icon: Users,
            title: "Customer Satisfaction",
            description: "Close collaboration with clients, exceeding expectations with excellent support.",
        },
        {
            icon: Zap,
            title: "Innovation",
            description: "Cutting-edge technologies and constantly improving services for maximum value.",
        },
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
                    <img src="/about-bg.jpg" alt="" className='w-full h-full object-cover' />
                </div>

                <div className="relative max-w-7xl mx-auto text-center">
                    <Badge className="mb-4 bg-blue-100 text-white hover:bg-blue-200">About Us</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                        Transforming Ideas Into
                        <br />
                        Digital Excellence
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        At TechExpert, we identify, develop, and bring to market high-quality services with global acceptability at
                        affordable costs to facilitate our customers.
                    </p>
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                        Get Started Today
                    </Button>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="border-0  bg-white/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl text-blue-600">Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 leading-relaxed">
                                    To be a leading provider of high-quality services that meet global standards at affordable costs. We
                                    believe technology can transform businesses and we're passionate about helping clients leverage the
                                    power of technology to achieve their goals.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-0 bg-white/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl text-purple-600">Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 leading-relaxed">
                                    To be recognized as a trusted partner in the industry, known for our commitment to excellence,
                                    innovation, and customer satisfaction. We continuously strive to improve our capabilities to address
                                    the unmet needs of our clients.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose TechExpert?</h2>
                        <p className="text-xl text-gray-600">We deliver exceptional value through our commitment to excellence</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}
