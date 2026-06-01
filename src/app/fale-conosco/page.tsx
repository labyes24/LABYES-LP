import { Metadata } from 'next'

import { navigation } from '@/lib/navigation'
import { ContactUsHeroSection } from './sections/contact-us-hero'

export const metadata: Metadata = {
    title: navigation.CTA.title,
}

export default function ContactUsPage() {
    return (
        <>
            <ContactUsHeroSection />
        </>
    )
}
