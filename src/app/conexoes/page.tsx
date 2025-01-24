import { Metadata } from 'next'

import { ConnectionsSection } from '@/components/conections-section'
import { PartnersSection } from '@/components/partners-section'

export const metadata: Metadata = {
    title: 'Conexões',
}

export default function ConnectionsPage() {
    return (
        <>
            <ConnectionsSection />
            <PartnersSection />
        </>
    )
}
