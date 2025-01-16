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
                    src={founder.image}
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
                <div className="flex h-[380px] select-none justify-center rounded-b-3xl bg-ly-dark-azure-600/5 px-6 py-12 text-ly-dark-azure-600 lg:h-[620px] lg:items-center lg:rounded-r-3xl lg:p-20">
                    <div className="flex flex-col gap-5 lg:gap-10">
                        <h3 className="text-2xl font-bold">
                            &quot;{quote}&quot;
                        </h3>
                        <p className="text-xl leading-relaxed lg:leading-loose">
                            {description}
                        </p>
                        <div className="flex flex-col gap-1">
                            <span className="text-lg font-semibold">
                                {name}
                            </span>

                            <span className="text-base">{role}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
