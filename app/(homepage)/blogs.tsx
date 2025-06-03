import { Calendar, Tag, User, ArrowRight, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const blogPosts = [
    {
        id: 1,
        title: "DeepSeek Faces Security Challenges Amid Popularity Surge",
        excerpt:
            "Security and Privacy Concerns Surrounding DeepSeek AI App DeepSeek, a new artificial intelligence application, has been gaining significant attention...",
        image: "/placeholder.svg?height=300&width=400",
        date: "February 10, 2025",
        category: "Uncategorized",
        author: "Techexpert",
        readTime: "5 min read",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        id: 2,
        title: "IT Solution: Do You Really Need It?",
        excerpt:
            "We've been a strategy thought leader for nearly five decades and we bring unrivaled expertise to help businesses achieve success...",
        image: "/placeholder.svg?height=300&width=400",
        date: "April 11, 2021",
        category: "Business",
        author: "Techexpert",
        readTime: "7 min read",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        id: 3,
        title: "How Business Technology Changed How We Think About Innovation",
        excerpt:
            "We've been a strategy thought leader for nearly five decades and we bring unrivaled expertise to help businesses achieve success...",
        image: "/placeholder.svg?height=300&width=400",
        date: "April 11, 2021",
        category: "Business",
        author: "Techexpert",
        readTime: "6 min read",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        id: 4,
        title: "The Future of Artificial Intelligence in Business",
        excerpt:
            "Exploring how AI is transforming industries and creating new opportunities for businesses to innovate and grow in the digital age...",
        image: "/placeholder.svg?height=300&width=400",
        date: "January 15, 2025",
        category: "Technology",
        author: "Techexpert",
        readTime: "8 min read",
        gradient: "from-orange-500 to-red-500",
    },
    {
        id: 5,
        title: "Cloud Migration Best Practices for Enterprises",
        excerpt:
            "A comprehensive guide to successfully migrating your enterprise infrastructure to the cloud while maintaining security and performance...",
        image: "/placeholder.svg?height=300&width=400",
        date: "January 8, 2025",
        category: "Cloud",
        author: "Techexpert",
        readTime: "10 min read",
        gradient: "from-indigo-500 to-purple-500",
    },
    {
        id: 6,
        title: "Cybersecurity Trends to Watch in 2025",
        excerpt:
            "Stay ahead of emerging threats and learn about the latest cybersecurity trends that will shape the digital landscape this year...",
        image: "/placeholder.svg?height=300&width=400",
        date: "December 28, 2024",
        category: "Security",
        author: "Techexpert",
        readTime: "9 min read",
        gradient: "from-teal-500 to-blue-500",
    },
]

export default function BlogComponent() {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Tag className="w-4 h-4" />
                        Our Blog
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Latest News from Us</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Stay updated with the latest insights, trends, and innovations in technology and business solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <Card
                            key={post.id}
                            className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-2 overflow-hidden"
                        >
                            <div className="relative overflow-hidden">
                                <Image
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div
                                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${post.gradient}`}
                                >
                                    {post.category}
                                </div>
                            </div>

                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                            <User className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">By {post.author}</span>
                                    </div>

                                    <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors cursor-pointer">
                                        Read More
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                        View All Articles
                    </button>
                </div>
            </div>
        </section>
    )
}
