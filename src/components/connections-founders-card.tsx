import Image from 'next/image'

import { Founder } from './connections-founders-carousel'
import { Card, CardContent } from './ui/card'

interface ConnectionsFoundersCardProps {
    founder: Founder
}

export function ConnectionsFoundersCard({
    founder,
}: ConnectionsFoundersCardProps) {
    const { image, description, name, quote, role } = founder
    return (
        <Card className="relative cursor-grab overflow-hidden rounded-3xl border-none bg-card text-card-foreground">
            <CardContent className="flex flex-col items-stretch justify-between p-0 lg:flex-row">
                <Image
                    src={image}
                    alt="Fundador imagem"
                    priority
                    width={550}
                    height={620}
                    className="h-[382px] w-full object-cover lg:flex lg:h-auto lg:w-[45%] lg:rounded-l-3xl"
                />

                <div className="flex select-none items-center justify-center bg-card px-6 py-12 text-center text-card-foreground lg:min-h-[620px] lg:rounded-r-3xl lg:p-20 lg:text-start">
                    <div className="flex min-h-60 flex-col gap-5 lg:gap-10">
                        <h3 className="text-lg font-bold lg:text-2xl">
                            {quote}
                        </h3>
                        <p className="text-sm italic leading-relaxed lg:text-xl lg:leading-loose">
                            &quot;{description}&quot;
                        </p>
                        <div className="flex flex-col gap-1">
                            <span className="text-base font-semibold lg:text-lg">
                                {name}
                            </span>

                            <span className="text-sm lg:text-base">{role}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
