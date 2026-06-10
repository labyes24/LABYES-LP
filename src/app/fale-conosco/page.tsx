import { Metadata } from 'next'

import { navigation } from '@/lib/navigation'
import { BlackBeltsSection } from './sections/contact-us-blackbelts'
import { ContactUsFormSection } from './sections/contact-us-form'
import { ContactUsHeroSection } from './sections/contact-us-hero'

export const metadata: Metadata = {
    title: navigation.CTA.title,
}

export default function ContactUsPage() {
    return (
        <>
            <ContactUsHeroSection />
            <BlackBeltsSection />
            <ContactUsFormSection />
        </>
    )
}
