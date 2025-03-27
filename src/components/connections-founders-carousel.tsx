'use client'

import Autoplay from 'embla-carousel-autoplay'
import { StaticImageData } from 'next/image'
import { useRef } from 'react'

import Adriano from '@/assets/adriano.webp'
import Grace from '@/assets/grace.webp'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { ConnectionsFoundersCard } from './connections-founders-card'

export interface Founder {
    image: StaticImageData
    quote: string
    description: string
    name: string
    role: string
}

const founders: Founder[] = [
    {
        image: Grace,
        quote: 'Conexão Entre Talentos e o Mercado',
        description:
            'A ideia do Lab Yes! surgiu a partir da observação do cenário em que o mercado exigia profissionais altamente capacitados, mas, ao mesmo tempo, os recém-formados enfrentavam dificuldades para se inserir. A discrepância entre as habilidades adquiridas e as exigidas era clara.',
        name: 'Grace Kelly O. Souza',
        role: 'Idealizadora do Lab Yes!',
    },
    {
        image: Adriano,
        quote: 'Inclusão para Talentos',
        description:
            'O Lab Yes! surgiu para apoiar jovens talentos no desenvolvimento profissional e conexão com o mercado. Com o tempo, tornou-se um espaço inclusivo para todas as idades, promovendo aprendizado contínuo, aprimoramento e novas oportunidades na carreira.',
        name: 'Adriano Souza',
        role: 'Dev Full Stack Sênior na ZPE Systems',
    },
]

export function ConnectionsFoundersCarousel() {
    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

    return (
        <div className="relative pb-32 pt-11 lg:pb-28">
            <Carousel
                // opts={{ loop: true }}
                plugins={[plugin.current]}
                className="mx-auto w-4/5"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <div className="absolute -bottom-14 right-1/2 w-5 translate-x-1/2 text-ly-dark-azure-600 lg:hidden">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
                <div className="hidden w-5 text-ly-dark-azure-600 lg:absolute lg:-top-16 lg:right-12 lg:flex">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>

                <CarouselContent>
                    {founders.map((founder, index) => (
                        <CarouselItem key={index}>
                            <ConnectionsFoundersCard founder={founder} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
