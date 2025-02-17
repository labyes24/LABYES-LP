import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import './globals.css'

const dmSans = DM_Sans({
    variable: '--font-DM-sans',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: {
        template: '%s | Lab Yes! | Lapidando talentos',
        default: 'Lab Yes!',
    },
    description: 'Lapidando o Dev Jr para a primeira vaga',
    openGraph: {
        title: 'Lab Yes! | Lapidando talentos',
        description:
            'Conseguir a primeira vaga em tecnologia pode ser desafiador, mas com o apoio certo, esse processo pode ser muito mais tranquilo.',
        images: ['/opengraph-image.png'],
    },
}

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body
                className={`${dmSans.variable} mx-auto flex min-h-screen max-w-[1440px] flex-col bg-ly-white antialiased`}
            >
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
            {GOOGLE_ANALYTICS_ID && (
                <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
            )}
        </html>
    )
}
