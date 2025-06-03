import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
    {
        icon: Phone,
        title: "Phone Number",
        details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Mail,
        title: "Email Address",
        details: ["hello@techexpert.com", "support@techexpert.com"],
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: MapPin,
        title: "Office Location",
        details: ["123 Tech Street, Silicon Valley", "CA 94000, United States"],
        gradient: "from-green-500 to-emerald-500",
    },
    {
        icon: Clock,
        title: "Working Hours",
        details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
        gradient: "from-orange-500 to-red-500",
    },
]

export default function ContactUs() {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <MessageSquare className="w-4 h-4" />
                        Get In Touch
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ready to transform your business? Let's discuss your project and explore how we can help you achieve your
                        goals.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h3>
                            <p className="text-gray-600 mb-8">
                                We're here to help and answer any question you might have. We look forward to hearing from you.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {contactInfo.map((info, index) => {
                                const IconComponent = info.icon
                                return (
                                    <Card
                                        key={index}
                                        className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
                                    >
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                                                >
                                                    <IconComponent className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                                                    {info.details.map((detail, idx) => (
                                                        <p key={idx} className="text-gray-600 text-sm">
                                                            {detail}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl">
                        <CardContent className="p-8">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            Full Name
                                        </label>
                                        <Input
                                            placeholder="Enter your full name"
                                            className="border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                            <Mail className="w-4 h-4" />
                                            Email Address
                                        </label>
                                        <Input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <Tag className="w-4 h-4" />
                                        Subject
                                    </label>
                                    <Input
                                        placeholder="What's this about?"
                                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <MessageSquare className="w-4 h-4" />
                                        Message
                                    </label>
                                    <Textarea
                                        placeholder="Tell us about your project..."
                                        rows={6}
                                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Send className="w-5 h-5 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
