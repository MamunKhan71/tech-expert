import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Briefcase,
    Calendar,
    Users,
    Code,
    Palette,
    PenTool,
    Headphones,
    Settings,
    Database,
    ArrowRight,
    CheckCircle,
} from "lucide-react"

export default function Career() {
    const jobListings = [
        {
            title: "WordPress Theme Developer",
            date: "Thursday July 21, 2022",
            icon: Code,
            type: "Full-time",
            location: "Remote",
        },
        {
            title: "WordPress Plugins Developer",
            date: "Saturday July 23, 2022",
            icon: Settings,
            type: "Full-time",
            location: "On-site",
        },
        {
            title: "UI/UX Designer",
            date: "Saturday July 23, 2022",
            icon: Palette,
            type: "Full-time",
            location: "Hybrid",
        },
        {
            title: "English Content Writer",
            date: "Saturday July 23, 2022",
            icon: PenTool,
            type: "Part-time",
            location: "Remote",
        },
        {
            title: "Support Engineer",
            date: "Saturday July 23, 2022",
            icon: Headphones,
            type: "Full-time",
            location: "On-site",
        },
        {
            title: "Project Manager",
            date: "Saturday July 23, 2022",
            icon: Users,
            type: "Full-time",
            location: "Hybrid",
        },
        {
            title: "PHP Laravel Developer",
            date: "Saturday July 23, 2022",
            icon: Database,
            type: "Full-time",
            location: "On-site",
        },
    ]

    const requirements = [
        {
            title: "PHP Programming",
            description: "Lorem ipsum dolor elit sed do eiusmod is adipisicing consectetur sed do",
            icon: Code,
        },
        {
            title: "WordPress Development",
            description: "Lorem ipsum dolor elit sed do eiusmod is adipisicing consectetur sed do",
            icon: Settings,
        },
        {
            title: "Basic SEO",
            description: "Lorem ipsum dolor elit sed do eiusmod is adipisicing consectetur sed do",
            icon: ArrowRight,
        },
    ]

    const benefits = [
        "Competitive salary packages",
        "Flexible working hours",
        "Professional development opportunities",
        "Health insurance coverage",
        "Annual performance bonuses",
        "Remote work options",
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
                <div className="relative max-w-7xl mx-auto text-center">
                    <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">Career Opportunities</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                        Become Part of Our
                        <br />
                        Massive Family
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Inspire and get galvanized by skilled experts. Join our team of passionate professionals and help us build
                        the future of technology.
                    </p>
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                        View All Positions
                    </Button>
                </div>
            </section>

            {/* Job Listings */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
                        <p className="text-xl text-gray-600">Explore exciting career opportunities with our growing team</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobListings.map((job, index) => (
                            <Card
                                key={index}
                                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group hover:-translate-y-1"
                            >
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <job.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex gap-2">
                                            <Badge variant="secondary" className="text-xs">
                                                {job.type}
                                            </Badge>
                                            <Badge variant="outline" className="text-xs">
                                                {job.location}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl text-gray-900 mb-2">{job.title}</CardTitle>
                                    <CardDescription className="flex items-center text-gray-600">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {job.date}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                                        Apply Now
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Requirements */}
            <section className="py-16 px-4 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Job Requirements</h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            A job responsibility is a description of your duties in a specific position. You can use it to point your
                            qualifications when applying for a new job. Job responsibility summaries include information concerning
                            roles, activities and tasks that relate to fulfilling job requirements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {requirements.map((req, index) => (
                            <Card
                                key={index}
                                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group hover:-translate-y-1 text-center"
                            >
                                <CardHeader>
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <req.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">{req.title}</CardTitle>
                                    <CardDescription className="text-gray-600 mb-4">{req.description}</CardDescription>
                                    <Button variant="outline" size="sm" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                                        Learn More
                                    </Button>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Join a company that values innovation, growth, and work-life balance. We offer competitive benefits and
                                a supportive environment for professional development.
                            </p>
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Briefcase className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-2xl">Ready to Join Our Team?</CardTitle>
                                <CardDescription className="text-purple-100 text-lg">
                                    Take the next step in your career and become part of our innovative team. We're always looking for
                                    talented individuals who share our passion for technology.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                                    Submit Your Resume
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have Questions About Our Openings?</h2>
                    <p className="text-xl text-purple-100 mb-8">
                        Get in touch with our HR team to learn more about career opportunities at TechExpert.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                            Contact HR Team
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                            Schedule Interview
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
