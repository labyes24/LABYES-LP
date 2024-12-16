import { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = {
    title: 'Contatos',
}
export default function ContactsPage() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Contato</h1>
            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={100}
                height={24}
            />
        </>
    )
}
