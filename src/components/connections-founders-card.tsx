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
        <Card className="relative h-[760px] cursor-grab rounded-3xl border-none">
            <CardContent className="flex flex-col items-stretch justify-between p-0 lg:flex-row">
                <Image
                    src={image}
                    alt="Fundador imagem"
                    priority
                    width={550}
                    height={620}
                    className="hidden object-cover lg:flex lg:rounded-l-3xl"
                />
                <div className="relative h-[380px]">
                    <Image
                        src={founder.image}
                        alt="Fundador imagem"
                        priority
                        className="absolute h-full rounded-t-3xl object-cover lg:hidden lg:rounded-l-3xl"
                    />
                </div>
                <div className="flex h-[380px] select-none items-center justify-center rounded-b-3xl bg-ly-dark-azure-600/5 px-6 py-12 text-center text-ly-dark-azure-600 lg:h-[620px] lg:rounded-r-3xl lg:p-20 lg:text-start">
                    <div className="flex flex-col gap-5 lg:gap-10">
                        <h3 className="text-lg font-bold lg:text-2xl">
                            &quot;{quote}&quot;
                        </h3>
                        <p className="text-sm leading-relaxed lg:text-xl lg:leading-loose">
                            {description}
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
