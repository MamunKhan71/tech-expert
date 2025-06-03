import {
    ArrowRight,
    Monitor,
    Smartphone,
    Globe,
    Brain,
    Palette,
    CuboidIcon as Cube,
    Cloud,
    Settings,
    TrendingUp,
    Link,
    Mail,
    Shield,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
    {
        icon: Monitor,
        title: "Software Development",
        description:
            "We are a cutting-edge software company specializing in AI-driven solutions, web development, and mobile applications.",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Smartphone,
        title: "Mobile Application Development",
        description:
            "We create innovative, high-performance mobile applications for iOS and Android, ensuring seamless user experiences.",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: Globe,
        title: "Web Development",
        description:
            "We build high-performance, scalable, and user-friendly web applications tailored to your business needs.",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        icon: Brain,
        title: "Machine Learning/AI",
        description:
            "We develop advanced machine learning solutions to drive automation, data-driven decision-making, and AI-powered insights.",
        gradient: "from-orange-500 to-red-500",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description:
            "We craft intuitive and visually stunning UI/UX designs that enhance user engagement and satisfaction.",
        gradient: "from-indigo-500 to-purple-500",
    },
    {
        icon: Cube,
        title: "AR-VR Solution",
        description:
            "We deliver cutting-edge AR and VR solutions for immersive experiences in gaming, training, and business applications.",
        gradient: "from-teal-500 to-blue-500",
    },
    {
        icon: Cloud,
        title: "Cloud Services",
        description:
            "We offer scalable and secure cloud services, including migration, management, and optimization for AWS, Azure, and Google Cloud.",
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        icon: Settings,
        title: "IT Management",
        description:
            "We provide expert IT management services, ensuring seamless infrastructure, security, and scalability for your business.",
        gradient: "from-gray-500 to-slate-500",
    },
    {
        icon: TrendingUp,
        title: "Digital Marketing",
        description:
            "We provide data-driven digital marketing solutions, including SEO, PPC, social media, and content marketing, to enhance brand visibility and engagement.",
        gradient: "from-pink-500 to-rose-500",
    },
    {
        icon: Link,
        title: "Blockchain Development",
        description:
            "We offer secure and scalable blockchain development services, including smart contracts, applications and enterprise blockchain solutions.",
        gradient: "from-yellow-500 to-orange-500",
    },
    {
        icon: Mail,
        title: "Mail Service",
        description:
            "We provide reliable and secure email (Google & Microsoft 365 services, offering customized solutions for businesses to manage.",
        gradient: "from-blue-500 to-indigo-500",
    },
    {
        icon: Shield,
        title: "Cyber Security",
        description:
            "We provide expert IT management services, ensuring seamless infrastructure, security, and scalability for your business.",
        gradient: "from-red-500 to-pink-500",
    },
]

export default function ServicesGrid() {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Settings className="w-4 h-4" />
                        Our Services
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive IT Solutions</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Empowering businesses with cutting-edge technology solutions tailored to drive growth and innovation
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = service.icon
                        return (
                            <Card
                                key={index}
                                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
                            >
                                <CardContent className="p-6">
                                    <div
                                        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <IconComponent className="w-7 h-7 text-white" />
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>

                                    <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                                        Learn More
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
