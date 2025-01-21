import { AboutManifest } from '@/components/about-manifest'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Quem somos',
}
export default function WhoUsPage() {
    return (
        <>
            <AboutManifest />
        </>
    )
}
