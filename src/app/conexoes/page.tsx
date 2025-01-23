import { Metadata } from 'next'

import { PartnersSection } from '@/components/partners-section'

export const metadata: Metadata = {
    title: 'Conexões',
}

export default function ConnectionsPage() {
    return (
        <>
            <PartnersSection />
        </>
    )
}
