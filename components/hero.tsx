"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight, Code, Sparkles, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            image: "/soft.jpg",
            title: "Comprehensive Software Solutions",
            subtitle: "AI-driven solutions",
            description:
                "We are a cutting-edge software company specializing in AI-driven solutions, web development, and mobile applications.",
            icon: <Code className="h-8 w-8" />,
            accent: "bg-blue-500",
            textGradient: "from-blue-400 to-cyan-300",
            bgGradient: "from-blue-500/10 via-blue-500/5 to-transparent",
        },
        {
            image: "/web.webp",
            title: "Responsive Website Development",
            subtitle: "Scalable web apps",
            description:
                "We build high-performance, scalable, and user-friendly web applications tailored to your business needs.",
            icon: <Code className="h-8 w-8" />,
            accent: "bg-cyan-600",
            textGradient: "from-cyan-400 to-blue-300",
            bgGradient: "from-cyan-500/10 via-cyan-500/5 to-transparent",
        },
        {
            image: "/app.jpg",
            title: "Mobile Application Solutions",
            subtitle: "iOS & Android apps",
            description:
                "We create innovative, high-performance mobile applications for iOS and Android, ensuring seamless user experiences.",
            icon: <Zap className="h-8 w-8" />,
            accent: "bg-emerald-500",
            textGradient: "from-emerald-400 to-teal-300",
            bgGradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
        },
        {
            image: "/cloud.jpg",
            title: "Business Cloud Service Solutions",
            subtitle: "Scalable & secure",
            description:
                "We offer scalable and secure cloud services, including migration, management, and optimization for AWS, Azure, and Google Cloud.",
            icon: <Sparkles className="h-8 w-8" />,
            accent: "bg-purple-500",
            textGradient: "from-purple-400 to-pink-300",
            bgGradient: "from-purple-500/10 via-purple-500/5 to-transparent",
        },
        {
            image: "/aibg.jpg",
            title: "Machine Learning & AI Services",
            subtitle: "AI-powered insights",
            description:
                "We develop advanced machine learning solutions to drive automation, data-driven decision-making, and AI-powered insights.",
            icon: <Sparkles className="h-8 w-8" />,
            accent: "bg-yellow-500",
            textGradient: "from-yellow-400 to-orange-300",
            bgGradient: "from-yellow-500/10 via-yellow-500/5 to-transparent",
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }, 6000)
        return () => clearInterval(interval)
    }, [slides.length])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    return (
        <section className="w-full py-6 md:py-8">
            <div className="container">
                <div className="relative overflow-hidden rounded-3xl backdrop-blur-sm p-12">
                    {/* Background Gradient */}
                    <motion.div
                        className={cn("absolute inset-0 bg-gradient-to-br opacity-30", slides[currentSlide].bgGradient)}
                        animate={{
                            opacity: [0.2, 0.3, 0.2],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />

                    <div className="grid lg:grid-cols-2 min-h-[600px] md:min-h-[450px]">
                        {/* Text Content */}
                        <div className="relative z-10 flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="mb-6 flex items-center gap-3">
                                        <motion.div
                                            className={cn(
                                                "flex h-14 w-14 items-center justify-center rounded-2xl text-white",
                                                slides[currentSlide].accent,
                                            )}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            {slides[currentSlide].icon}
                                        </motion.div>
                                        <div
                                            className={cn("rounded-full px-4 py-1 text-sm font-medium", "bg-background border border-border")}
                                        >
                                            {slides[currentSlide].subtitle}
                                        </div>
                                    </div>

                                    <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                        <span
                                            className={cn(
                                                "bg-gradient-to-r bg-clip-text text-transparent",
                                                slides[currentSlide].textGradient,
                                            )}
                                        >
                                            {slides[currentSlide].title}
                                        </span>
                                    </h1>
                                    <p className="mb-8 max-w-md text-lg text-muted-foreground">{slides[currentSlide].description}</p>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button
                                            size="lg"
                                            className={cn("group text-white", slides[currentSlide].accent, "border-0 hover:opacity-90")}
                                        >
                                            Get Started
                                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                        <Button variant="outline" size="lg">
                                            Learn More
                                        </Button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Slider Controls */}
                            <div className="mt-12 flex items-center gap-4">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-10 w-10 rounded-full border-border"
                                    onClick={prevSlide}
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                    <span className="sr-only">Previous slide</span>
                                </Button>

                                <div className="flex gap-2">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            className={cn(
                                                "h-2.5 rounded-full transition-all",
                                                currentSlide === index
                                                    ? cn("w-10", slides[currentSlide].accent)
                                                    : "w-2.5 bg-muted hover:bg-muted-foreground/50",
                                            )}
                                            onClick={() => setCurrentSlide(index)}
                                        />
                                    ))}
                                </div>

                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-10 w-10 rounded-full border-border"
                                    onClick={nextSlide}
                                >
                                    <ChevronRight className="h-5 w-5" />
                                    <span className="sr-only">Next slide</span>
                                </Button>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 left-0 h-32 w-32 rounded-br-[100px] bg-background z-10" />
                            <div className="absolute bottom-0 right-0 h-32 w-32 rounded-tl-[100px] bg-background z-10" />

                            {/* Image Container */}
                            <div className="relative h-full w-full overflow-hidden">
                                <AnimatePresence initial={false}>
                                    {slides.map(
                                        (slide, index) =>
                                            currentSlide === index && (
                                                <motion.div
                                                    key={index}
                                                    className="absolute inset-0 h-full w-full"
                                                    initial={{ opacity: 0, scale: 1.1 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.9 }}
                                                    transition={{ duration: 1 }}
                                                >
                                                    <div
                                                        className="h-full w-full bg-cover bg-center"
                                                        style={{ backgroundImage: `url(${slide.image})` }}
                                                    />
                                                    {/* Image Overlay */}
                                                    <div
                                                        className={cn(
                                                            "absolute inset-0 bg-gradient-to-br from-background/80 via-background/40 to-transparent",
                                                        )}
                                                    />
                                                </motion.div>
                                            ),
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
