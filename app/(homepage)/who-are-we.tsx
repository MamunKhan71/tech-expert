import { ArrowRight, Database, Cloud, TrendingUp, Code, Smartphone, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
    {
        icon: Database,
        title: "Data Center",
        description:
            "There are many variations of passages of available but the majority have suffered alteration in some form.",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Cloud,
        title: "Cloud Services",
        description:
            "There are many variations of passages of available but the majority have suffered alteration in some form.",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: TrendingUp,
        title: "Web Development",
        description:
            "There are many variations of passages of available but the majority have suffered alteration in some form.",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        icon: Code,
        title: "IT Management",
        description:
            "There are many variations of passages of available but the majority have suffered alteration in some form.",
        gradient: "from-orange-500 to-red-500",
    },
    {
        icon: Smartphone,
        title: "Software Renew",
        description:
            "There are many variations of passages of available but the majority have suffered alteration in some form.",
        gradient: "from-indigo-500 to-purple-500",
    },
    {
        icon: Brain,
        title: "Machine Learning",
        description:
            "There are many variations of passages of available but the majority have suffered alteration in some form.",
        gradient: "from-teal-500 to-blue-500",
    },
]

export default function WhoAreWe() {
    return (
        <>
            <section className="py-20 px-4 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fillOpacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            WHO WE ARE
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
                            We deal with the aspects of professional{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                IT Services
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our comprehensive approach ensures that every aspect of your IT infrastructure is optimized for performance, security, and scalability.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {services.map((service, index) => {
                            const IconComponent = service.icon
                            return (
                                <Card
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
                                >
                                    <CardContent className="p-8">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                                        <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors cursor-pointer">
                                            Learn More
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>

                    <div className="text-center">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            View All Services
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
