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
        <Card className="relative rounded-3xl border-none">
            <CardContent className="flex flex-col items-stretch justify-between p-0 lg:flex-row">
                <Image
                    src={founder.image}
                    alt="Fundador imagem"
                    priority
                    width={550}
                    height={620}
                    className="hidden rounded-l-3xl object-cover lg:flex"
                />
                <div className="flex h-[620px] items-center justify-center rounded-r-3xl bg-ly-dark-azure-600/5 p-20 text-ly-dark-azure-600">
                    <div className="flex flex-col gap-10">
                        <h3 className="text-2xl font-bold">
                            &quot;{quote}&quot;
                        </h3>
                        <p className="text-xl leading-loose">{description}</p>
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
