import { Metadata } from 'next'

import { ConnectionsSection } from '@/components/conections-section'
import { ConnectionsFounders } from '@/components/connections-founders'
import { ConnectionsLastProduction } from '@/components/connections-last-productions'
import { PartnersSection } from '@/components/partners-section'

export const metadata: Metadata = {
    title: 'Conexões',
}

export default function ConnectionsPage() {
    return (
        <>
            <ConnectionsFounders />
            <ConnectionsSection />
            <PartnersSection />
            <ConnectionsLastProduction />
        </>
    )
}
