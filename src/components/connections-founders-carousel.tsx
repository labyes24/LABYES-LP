'use client'

import AvatarBlue from '@/assets/avatar-blue.webp'
import AvatarOrange from '@/assets/avatar-orange.webp'
import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { StaticImageData } from 'next/image'
import { ConnectionsFoundersCard } from './connections-founders-card'

export interface Founder {
    image: StaticImageData
    quote: string
    description: string
    name: string
    role: string
}

export function ConnectionsFoundersCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    // Fundadores
    const founders: Founder[] = [
        {
            image: AvatarBlue,
            quote: 'An amazing service',
            description:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orci, netus nisl laoreet phasellus. Pellentesque non nunc placerat mi quis vitae cursus ornare.',
            name: 'John Carter',
            role: 'Designer at BRIX Templates',
        },
        {
            image: AvatarOrange,
            quote: 'Great experience',
            description:
                'Netus nisl laoreet phasellus pellentesque non nunc placerat mi quis vitae cursus ornare. Lorem ipsum dolor sit amet consectetur adipiscing elit.',
            name: 'Jane Doe',
            role: 'Developer at Tech Co.',
        },
    ]

    return (
        <div className="relative py-20">
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
                <div className="hidden w-5 text-ly-dark-azure-600 lg:absolute lg:-top-14 lg:right-12 lg:flex">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>

                <CarouselContent className="p-0">
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
