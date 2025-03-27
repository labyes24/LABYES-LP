import { AboutManifest } from '@/components/about-manifest'
import { Metadata } from 'next'

import { AboutCulture } from '@/components/about-culture'
import { AboutHistory } from '@/components/about-history'
export const metadata: Metadata = {
    title: 'Quem somos',
}
export default function AboutUsPage() {
    return (
        <>
            <AboutHistory />
            <AboutCulture />
            <AboutManifest />
        </>
    )
}
