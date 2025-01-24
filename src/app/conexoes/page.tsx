import { Metadata } from 'next'

import { ConnectionsLastProduction } from '@/components/connections-last-productions'
import { PartnersSection } from '@/components/partners-section'
export const metadata: Metadata = {
    title: 'Conexões',
}

export default function ConnectionsPage() {
    return (
        <>
            <PartnersSection />
            <ConnectionsLastProduction />
        </>
    )
}
