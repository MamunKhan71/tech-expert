import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const reviews = [
    {
        id: 1,
        name: "Sarah Johnson",
        position: "CEO, TechStart Inc.",
        company: "TechStart Inc.",
        rating: 5,
        review:
            "Working with this team has been absolutely transformative for our business. Their expertise in AI and machine learning helped us automate our processes and increase efficiency by 300%. The level of professionalism and technical knowledge is unmatched.",
        image: "/placeholder.svg?height=80&width=80",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        id: 2,
        name: "Michael Chen",
        position: "CTO, InnovateLab",
        company: "InnovateLab",
        rating: 5,
        review:
            "The cloud migration project was executed flawlessly. They not only moved our entire infrastructure to the cloud but also optimized our costs by 40%. Their 24/7 support has been invaluable for our global operations.",
        image: "/placeholder.svg?height=80&width=80",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        position: "Founder, DigitalFlow",
        company: "DigitalFlow",
        rating: 5,
        review:
            "Their web development team created a stunning, high-performance website that perfectly represents our brand. The attention to detail and user experience design exceeded our expectations. Our conversion rates have increased by 250%.",
        image: "/placeholder.svg?height=80&width=80",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        id: 4,
        name: "David Thompson",
        position: "Director, SecureNet",
        company: "SecureNet",
        rating: 5,
        review:
            "The cybersecurity solutions they implemented have given us complete peace of mind. Their proactive monitoring and threat detection have prevented multiple potential breaches. Highly recommended for any business serious about security.",
        image: "/placeholder.svg?height=80&width=80",
        gradient: "from-orange-500 to-red-500",
    },
]

export default function ClientReviews() {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-blue-500/30">
                        <Star className="w-4 h-4" />
                        Client Reviews
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our satisfied clients have to say about our services.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {reviews.map((review, index) => (
                        <Card
                            key={review.id}
                            className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/10 backdrop-blur-lg hover:-translate-y-2"
                        >
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${review.gradient} p-0.5`}>
                                        <Image
                                            src={review.image || "/placeholder.svg"}
                                            alt={review.name}
                                            width={80}
                                            height={80}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">{review.name}</h4>
                                        <p className="text-blue-300 text-sm">{review.position}</p>
                                        <p className="text-gray-400 text-xs">{review.company}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                <div className="relative">
                                    <Quote className="w-8 h-8 text-blue-400 opacity-50 absolute -top-2 -left-2" />
                                    <p className="text-gray-300 leading-relaxed pl-6">{review.review}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-4">
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-white/20 text-white hover:bg-white/10 p-3 rounded-xl backdrop-blur-sm transition-all duration-300"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <div className="flex gap-2">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === 0 ? "bg-blue-500 w-8" : "bg-white/30"
                                    }`}
                            />
                        ))}
                    </div>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-white/20 text-white hover:bg-white/10 p-3 rounded-xl backdrop-blur-sm transition-all duration-300"
                    >
                        <ArrowRight className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
