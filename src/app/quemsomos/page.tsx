import { AboutManifest } from '@/components/about-manifest'
import { Metadata } from 'next'

import { AboutCulture } from '@/components/about-culture'
export const metadata: Metadata = {
    title: 'Quem somos',
}
export default function AboutUsPage() {
    return (
        <>
            <AboutCulture />
            <AboutManifest />
        </>
    )
}
