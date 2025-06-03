import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, FileText, Code, Settings, Rocket, CheckCircle, Shield, Award, Users, Target } from "lucide-react"

export default function HowWeWork() {
    const processSteps = [
        {
            number: "01",
            title: "Inception",
            icon: Lightbulb,
            items: ["Finalize Requirements", "Vision & Scope", "Methodology", "Communication Plan"],
        },
        {
            number: "02",
            title: "Elaboration",
            icon: FileText,
            items: ["SRS", "Wireframes, UI, Prototypes", "Test Plan", "Project Schedule"],
        },
        {
            number: "03",
            title: "Implementation",
            icon: Code,
            items: ["Live Server Test", "Unit Tests", "Methodology", "Communication Plan"],
        },
        {
            number: "04",
            title: "Stabilization",
            icon: Settings,
            items: ["Finalize Requirements", "Vision & Scope", "Change Management", "Status Reporting"],
        },
        {
            number: "05",
            title: "Transition",
            icon: Rocket,
            items: ["Deployment", "Admin User Guide", "Training", "Software Quality Assurance"],
        },
    ]

    const qualityFeatures = [
        {
            icon: Shield,
            title: "Automated Testing",
            description: "Comprehensive automated testing for reliable software delivery",
        },
        {
            icon: Target,
            title: "Functional Testing",
            description: "Thorough functional testing to ensure all features work as expected",
        },
        {
            icon: Users,
            title: "Unit Testing",
            description: "Individual component testing for robust code quality",
        },
        {
            icon: Award,
            title: "Cybersecurity Audit",
            description: "Security testing and digital audit before release",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">


            {/* Process Steps */}
            <section className="py-16 px-4 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our 5-Step Development Process</h2>
                        <p className="text-xl text-gray-600">A systematic approach to deliver exceptional software solutions</p>
                    </div>

                    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8">
                        {processSteps.map((step, index) => (
                            <Card
                                key={index}
                                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group hover:-translate-y-1 relative"
                            >
                                <CardHeader className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">{step.number}</span>
                                    </div>
                                    <CardTitle className="text-xl text-gray-900 capitalize">{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {step.items.map((item, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-600">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Assurance */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Software Quality Assurance</h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            We have a senior expert team for Automated, Blackbox, Functional, and Unit testing. We also perform
                            cybersecurity and digital audit besides quality testing before we release any solution to the user.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {qualityFeatures.map((feature, index) => (
                            <Card
                                key={index}
                                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group hover:-translate-y-1 text-center"
                            >
                                <CardHeader>
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                                    <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
