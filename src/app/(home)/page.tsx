import Image from 'next/image'

export default function Home() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Home</h1>
            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={100}
                height={24}
            />
        </>
    )
}
