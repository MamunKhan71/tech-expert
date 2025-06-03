import { ExternalLink, Github, Calendar, Tag, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform Redesign",
        description:
            "Complete redesign and development of a modern e-commerce platform with AI-powered recommendations and advanced analytics.",
        image: "/placeholder.svg?height=300&width=500",
        category: "Web Development",
        technologies: ["React", "Node.js", "MongoDB", "AI/ML"],
        completedDate: "December 2024",
        client: "RetailMax Corp",
        gradient: "from-blue-500 to-cyan-500",
        status: "Completed",
    },
    {
        id: 2,
        title: "Healthcare Management System",
        description:
            "Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.",
        image: "/placeholder.svg?height=300&width=500",
        category: "Healthcare",
        technologies: ["Vue.js", "Python", "PostgreSQL", "WebRTC"],
        completedDate: "November 2024",
        client: "MedCare Solutions",
        gradient: "from-green-500 to-emerald-500",
        status: "Completed",
    },
    {
        id: 3,
        title: "Financial Analytics Dashboard",
        description:
            "Real-time financial analytics dashboard with advanced data visualization and predictive modeling capabilities.",
        image: "/placeholder.svg?height=300&width=500",
        category: "FinTech",
        technologies: ["Angular", "Python", "TensorFlow", "D3.js"],
        completedDate: "January 2025",
        client: "FinanceFlow Inc",
        gradient: "from-purple-500 to-pink-500",
        status: "Completed",
    },
    {
        id: 4,
        title: "Smart City IoT Platform",
        description:
            "IoT platform for smart city management including traffic monitoring, energy optimization, and environmental sensors.",
        image: "/placeholder.svg?height=300&width=500",
        category: "IoT",
        technologies: ["React", "AWS IoT", "Time Series DB", "Machine Learning"],
        completedDate: "In Progress",
        client: "CityTech Municipal",
        gradient: "from-orange-500 to-red-500",
        status: "In Progress",
    },
    {
        id: 5,
        title: "Educational Learning Platform",
        description:
            "Interactive online learning platform with video streaming, progress tracking, and AI-powered personalized learning paths.",
        image: "/placeholder.svg?height=300&width=500",
        category: "Education",
        technologies: ["Next.js", "GraphQL", "AWS", "AI/ML"],
        completedDate: "October 2024",
        client: "EduTech Academy",
        gradient: "from-indigo-500 to-purple-500",
        status: "Completed",
    },
    {
        id: 6,
        title: "Supply Chain Optimization",
        description:
            "AI-powered supply chain optimization system with real-time tracking, demand forecasting, and inventory management.",
        image: "/placeholder.svg?height=300&width=500",
        category: "Logistics",
        technologies: ["React", "Python", "TensorFlow", "Blockchain"],
        completedDate: "September 2024",
        client: "LogiFlow Systems",
        gradient: "from-teal-500 to-blue-500",
        status: "Completed",
    },
]

export default function ProjectsComponent() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Tag className="w-4 h-4" />
                        Our Work
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our portfolio of successful projects that showcase our expertise in delivering innovative solutions
                        across various industries.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={project.id}
                            className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-2 overflow-hidden"
                        >
                            <div className="relative overflow-hidden">
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0`}>
                                        {project.category}
                                    </Badge>
                                    <Badge
                                        variant={project.status === "Completed" ? "default" : "secondary"}
                                        className={project.status === "Completed" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}
                                    >
                                        {project.status}
                                    </Badge>
                                </div>
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Button size="sm" variant="secondary" className="p-2 bg-white/90 hover:bg-white">
                                        <ExternalLink className="w-4 h-4" />
                                    </Button>
                                    <Button size="sm" variant="secondary" className="p-2 bg-white/90 hover:bg-white">
                                        <Github className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                    <Calendar className="w-4 h-4" />
                                    {project.completedDate}
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                                <div className="mb-4">
                                    <p className="text-xs font-medium text-gray-500 mb-2">Client:</p>
                                    <p className="text-sm font-semibold text-gray-700">{project.client}</p>
                                </div>

                                <div className="mb-4">
                                    <p className="text-xs font-medium text-gray-500 mb-2">Technologies:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {project.technologies.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="outline" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors cursor-pointer">
                                    View Details
                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    )
}
