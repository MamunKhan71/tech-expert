import { Check, Users, Briefcase, Clock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const features = ["Custom shortcodes", "Data Analytics", "IT Consultancy", "Data security"]

const stats = [
    { number: "820+", label: "Active Clients", icon: Users },
    { number: "520+", label: "Projects Done", icon: Briefcase },
    { number: "100+", label: "Ready Projects", icon: Clock },
    { number: "90k", label: "Happy Clients", icon: Heart },
]

export default function Banner() {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
            </div>

            <div className="container mx-auto relative z-10 py-20">
                <div className="min-h-full">
                    {/* Content Side */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-500/30">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            IT Support For Business
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Preparing for your{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                success
                            </span>{" "}
                            trusted IT services.
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                            We've been a strategic thought leader for decades, bringing unrivaled expertise to help businesses achieve
                            success. Our commitment to innovation and excellence drives us to deliver impactful solutions that meet
                            the unique needs of our clients.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-gray-300 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 pt-12 border-t border-white/10">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => {
                                const IconComponent = stat.icon
                                return (
                                    <div key={index} className="text-center group">
                                        <div className="flex items-center justify-center mb-3">
                                            <IconComponent className="w-8 h-8 text-white/80 group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                                            {stat.number}
                                        </div>
                                        <div className="text-blue-100 font-medium text-lg">{stat.label}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
