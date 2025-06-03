"use client"
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Cloud, Code, Globe, Shield, Smartphone } from "lucide-react";

const FeaturesSection = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    const features = [
        {
            icon: Code,
            title: "Scalable Architecture",
            description:
                "Build robust, scalable systems with automation and seamless ERP/CRM integration to accelerate enterprise operations and agility.",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            icon: Globe,
            title: "Modernized Ecosystems",
            description:
                "Upgrade legacy systems with cloud migration and workflow optimization to streamline business processes and boost efficiency.",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            icon: Brain,
            title: "AI-Driven Insights",
            description:
                "Leverage machine learning, NLP, and computer vision to gain predictive insights and enable smarter, faster decision-making.",
            gradient: "from-green-500 to-emerald-500",
        },
        {
            icon: Shield,
            title: "End-to-End Security",
            description:
                "Protect systems with proactive threat detection, compliance controls, and industry-grade cybersecurity for business continuity.",
            gradient: "from-orange-500 to-red-500",
        },
        {
            icon: Cloud,
            title: "Cloud Optimization",
            description:
                "Implement cloud-native solutions with infrastructure as code, multi-cloud support, and performance-focused resource management.",
            gradient: "from-indigo-500 to-purple-500",
        },
        {
            icon: Smartphone,
            title: "Mobile Workforce",
            description:
                "Empower employees with secure mobile tools, MDM policies, and custom apps to support productivity from anywhere, anytime.",
            gradient: "from-teal-500 to-blue-500",
        },
    ];


    return (
        <section id="features" className="w-full py-20 md:py-32 relative">
            <div>
                <img src="/features-bg.jpg" alt="features-bg" className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-25" />
            </div>
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                >
                    <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                        Features
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything You Need to Succeed</h2>
                    <p className="max-w-[800px] text-muted-foreground md:text-lg">
                        Our comprehensive platform provides all the tools you need to streamline your workflow, boost
                        productivity, and achieve your goals.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {features.map((feature, i) => (
                        <motion.div key={i} variants={item}>
                            <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                                <CardContent className="p-6 flex flex-col h-full">
                                    <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                                        <feature.icon />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default FeaturesSection