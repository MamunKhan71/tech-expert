import { Button } from './ui/button'

const CTASection = () => {
    return (
        <div>
            <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Contact us today to learn more about our services and how we can help you achieve your business goals.
                    </p>
                    <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                        Get in Touch
                    </Button>
                </div>
            </section>
        </div>
    )
}

export default CTASection