import CTASection from '@/components/cta-section'
import HowWeWork from './_components/how-we-work'
import WhatWeDo from './_components/what-we-do'

const AboutUs = () => {
    return (
        <div className='w-full space-y-28'>
            <WhatWeDo />
            <HowWeWork />
            <CTASection />
        </div>
    )
}

export default AboutUs