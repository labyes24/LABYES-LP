import { HomeHero } from '@/components/home-hero'
import { SupportersSection } from '@/components/supporters-section'

export default function Home() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Home</h1>

            <SupportersSection />
            <HomeHero />
        </>
    )
}
