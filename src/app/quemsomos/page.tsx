import { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = {
    title: 'Quem somos',
}
export default function WhoUsPage() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Quem somos</h1>
            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={100}
                height={24}
            />
        </>
    )
}
