import { HomeHero } from '@/components/home-hero'
import { HomeIntro } from '@/components/home-intro'
import { HomeTestimonials } from '@/components/home-testimonials'
import { SupportersSection } from '@/components/supporters-section'

export default function Home() {
    return (
        <>
            <HomeHero />
            <HomeIntro />
            <HomeTestimonials />
            <SupportersSection />
        </>
    )
}
