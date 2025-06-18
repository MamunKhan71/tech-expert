"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatePresence, motion } from "framer-motion"
import {
    Apple,
    ArrowRight,
    BarChart,
    Cloud,
    Code,
    Database,
    Globe,
    Headphones,
    Layers,
    Palette,
    Search,
    Shield,
    Smartphone,
    Sparkles,
    Zap,
} from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"

// Extended mock data with categories
const servicesData = [
    {
        id: "mobile-app-development",
        icon: "Smartphone",
        title: "Mobile App Development",
        description: "Leading Mobile Application Development Services Provider",
        slug: "mobile-app-development",
        category: "development",
        subcategories: [
            {
                id: "ios-development",
                icon: "Apple",
                title: "iOS Development",
                slug: "ios-development",
                color: "text-blue-500",
            },
            {
                id: "android-development",
                icon: "Smartphone",
                title: "Android Development",
                slug: "android-development",
                color: "text-green-500",
            },
            {
                id: "cross-platform",
                icon: "Layers",
                title: "Cross-Platform",
                slug: "cross-platform-apps",
                color: "text-purple-500",
            },
        ],
    },
    {
        id: "web-development",
        icon: "Code",
        title: "Web Development",
        description: "Full-Stack Web Development Solutions",
        slug: "web-development",
        category: "development",
        subcategories: [
            {
                id: "frontend-development",
                icon: "Palette",
                title: "Frontend Development",
                slug: "frontend-development",
                color: "text-orange-500",
            },
            {
                id: "backend-development",
                icon: "Database",
                title: "Backend Development",
                slug: "backend-development",
                color: "text-red-500",
            },
            {
                id: "fullstack-development",
                icon: "Zap",
                title: "Full-Stack Development",
                slug: "fullstack-development",
                color: "text-indigo-500",
            },
        ],
    },
    {
        id: "ui-ux-design",
        icon: "Palette",
        title: "UI/UX Design",
        description: "User-Centered Design Solutions",
        slug: "ui-ux-design",
        category: "design",
        subcategories: [
            {
                id: "web-design",
                icon: "Globe",
                title: "Web Design",
                slug: "web-design",
                color: "text-pink-500",
            },
            {
                id: "mobile-design",
                icon: "Smartphone",
                title: "Mobile Design",
                slug: "mobile-design",
                color: "text-cyan-500",
            },
            {
                id: "branding",
                icon: "Sparkles",
                title: "Branding",
                slug: "branding",
                color: "text-yellow-500",
            },
        ],
    },
    {
        id: "cloud-services",
        icon: "Cloud",
        title: "Cloud Services",
        description: "Scalable Cloud Infrastructure Solutions",
        slug: "cloud-services",
        category: "infrastructure",
        subcategories: [
            {
                id: "aws-services",
                icon: "Cloud",
                title: "AWS Services",
                slug: "aws-services",
                color: "text-orange-600",
            },
            {
                id: "azure-services",
                icon: "Cloud",
                title: "Azure Services",
                slug: "azure-services",
                color: "text-blue-600",
            },
            {
                id: "devops",
                icon: "Zap",
                title: "DevOps",
                slug: "devops",
                color: "text-green-600",
            },
        ],
    },
    {
        id: "cybersecurity",
        icon: "Shield",
        title: "Cybersecurity",
        description: "Comprehensive Security Solutions",
        slug: "cybersecurity",
        category: "security",
        subcategories: [
            {
                id: "security-audit",
                icon: "Shield",
                title: "Security Audit",
                slug: "security-audit",
                color: "text-red-600",
            },
            {
                id: "penetration-testing",
                icon: "Shield",
                title: "Penetration Testing",
                slug: "penetration-testing",
                color: "text-orange-600",
            },
            {
                id: "compliance",
                icon: "Shield",
                title: "Compliance",
                slug: "compliance",
                color: "text-blue-600",
            },
        ],
    },
    {
        id: "data-analytics",
        icon: "BarChart",
        title: "Data Analytics",
        description: "Business Intelligence & Analytics Solutions",
        slug: "data-analytics",
        category: "analytics",
        subcategories: [
            {
                id: "business-intelligence",
                icon: "BarChart",
                title: "Business Intelligence",
                slug: "business-intelligence",
                color: "text-purple-600",
            },
            {
                id: "data-visualization",
                icon: "BarChart",
                title: "Data Visualization",
                slug: "data-visualization",
                color: "text-green-600",
            },
            {
                id: "machine-learning",
                icon: "BarChart",
                title: "Machine Learning",
                slug: "machine-learning",
                color: "text-indigo-600",
            },
        ],
    },
]

const categories = [
    { id: "all", label: "All Services", icon: Sparkles },
    { id: "development", label: "Development", icon: Code },
    { id: "design", label: "Design", icon: Palette },
    { id: "infrastructure", label: "Infrastructure", icon: Cloud },
    { id: "security", label: "Security", icon: Shield },
    { id: "analytics", label: "Analytics", icon: BarChart },
]

const iconMap = {
    Smartphone,
    Apple,
    Layers,
    Code,
    Palette,
    Zap,
    Globe,
    Database,
    Shield,
    Cloud,
    BarChart,
    Headphones,
    Sparkles,
}

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState("all")
    const filteredServices = useMemo(() => {
        let filtered = servicesData

        // Filter by category
        if (activeTab !== "all") {
            filtered = filtered.filter((service) => service.category === activeTab)
        }

        return filtered
    }, [activeTab])

    return (
        <div className="min-h-screen relative">
            <img src="/bg-elements5.jpg" alt="bg-elements-5" className="absolute inset-0 -z-10 opacity-15" />
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-24">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <Badge className="mb-6 bg-blue-500/10 text-blue-300 border-blue-500/20">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Our Services
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Transforming Ideas Into
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                {" "}
                                Digital Solutions
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Discover our comprehensive range of technology services designed to accelerate your business growth and
                            digital transformation.
                        </p>
                    </motion.div>
                </div>

                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
                </div>
            </section>

            {/* Services Section with Tabs */}
            <section className="py-24">
                <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-center">
                    Services
                </h2>
                <h2 className="text-sm md:text-lg text-slate-600 mb-8 text-center">
                    We Offer Wide Range of Services
                </h2>

                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        {/* Tab Navigation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12 bg-white/80 backdrop-blur-sm rounded-2xl border gap-6 h-16">
                                {categories.map((category) => {
                                    const IconComponent = category.icon
                                    return (
                                        <TabsTrigger
                                            key={category.id}
                                            value={category.id}
                                            className="flex items-center gap-2 py-4 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300"
                                        >
                                            <IconComponent className="w-4 h-4" />
                                            <span className="hidden sm:inline">{category.label}</span>
                                        </TabsTrigger>
                                    )
                                })}
                            </TabsList>
                        </motion.div>

                        {/* Tab Content */}
                        {categories.map((category) => (
                            <TabsContent key={category.id} value={category.id} className="mt-0">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`${category.id}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="grid md:grid-cols-2 gap-8"
                                    >
                                        {filteredServices.length > 0 ? (
                                            filteredServices.map((service, index) => {
                                                const IconComponent = iconMap[service.icon as keyof typeof iconMap]

                                                return (
                                                    <motion.div
                                                        key={service.id}
                                                        initial={{ opacity: 0, y: 30 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                                    >
                                                        <Card className="group relative overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 h-full">
                                                            <CardContent className="p-8 h-full flex flex-col">
                                                                {/* Service Header */}
                                                                <div className="flex items-start gap-4 mb-6">
                                                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                                                        <IconComponent className="w-8 h-8 text-white" />
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <h3 className="text-2xl font-bold text-slate-900 mb-2 line-clamp-2">
                                                                            {service.title}
                                                                        </h3>
                                                                        <p className="text-slate-600 text-base line-clamp-2">{service.description}</p>
                                                                    </div>
                                                                </div>

                                                                {/* Subcategories */}
                                                                <div className="flex-1 mb-6">
                                                                    <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                                                                        Specialized Services
                                                                    </h4>
                                                                    <div className="grid gap-2">
                                                                        {service.subcategories.slice(0, 3).map((subcategory) => {
                                                                            const SubIconComponent = iconMap[subcategory.icon as keyof typeof iconMap]

                                                                            return (
                                                                                <div
                                                                                    key={subcategory.id}
                                                                                    className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                                                                                >
                                                                                    <div className="w-6 h-6 flex items-center justify-center">
                                                                                        <SubIconComponent className={`w-4 h-4 ${subcategory.color}`} />
                                                                                    </div>
                                                                                    <span className="text-sm font-medium text-slate-700 truncate">
                                                                                        {subcategory.title}
                                                                                    </span>
                                                                                </div>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                </div>

                                                                {/* CTA Button */}
                                                                <Link href={`/services/${service.slug}`} className="mt-auto">
                                                                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl group-hover:shadow-lg transition-all duration-300">
                                                                        Explore Service
                                                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                                                    </Button>
                                                                </Link>
                                                            </CardContent>
                                                        </Card>
                                                    </motion.div>
                                                )
                                            })
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="col-span-2 text-center py-16"
                                            >
                                                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <Search className="w-12 h-12 text-slate-400" />
                                                </div>
                                                <h3 className="text-2xl font-semibold text-slate-900 mb-2">No services found</h3>
                                                <p className="text-slate-600">Try adjusting your search or browse different categories.</p>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </TabsContent>
                        ))}
                    </Tabs>
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
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Contact us today to learn more about our services and how we can help you achieve your business goals.
                        </p>
                        <Button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 rounded-full text-lg font-semibold">
                            Get In Touch
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
