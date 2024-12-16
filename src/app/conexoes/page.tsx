import { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = {
    title: 'Conexões',
}
export default function ConnectionsPage() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Conexões</h1>
            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={100}
                height={24}
            />
        </>
    )
}
