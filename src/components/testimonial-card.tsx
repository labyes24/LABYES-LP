import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { UserRound } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

interface TestimonialCardProps {
    quote: string
    description: string
    author: string
    authorLink: string
    role: string
    company: string
    companyLink: string
    image?: string | StaticImageData
    positionCard: number
}

export function TestimonialCard({
    positionCard,
    quote,
    description,
    image,
    author,
    authorLink,
    company,
    companyLink,
    role,
}: TestimonialCardProps) {
    const borders = [
        'border-ly-green-500',
        'border-ly-red',
        'border-ly-orange-500',
    ]
    const colorsPlaceholder = [
        'bg-ly-green-500',
        'bg-ly-red',
        'bg-ly-orange-500',
    ]
    const colorSelected = image
        ? borders[positionCard % borders.length]
        : colorsPlaceholder[positionCard % colorsPlaceholder.length]

    return (
        <Card className="bg-card py-5 text-card-foreground lg:w-[416px]">
            <CardHeader>
                <div
                    className={cn(
                        `mb-6 flex size-20 justify-center overflow-hidden rounded-full border-4`,
                        `${colorSelected}`
                    )}
                >
                    {image ? (
                        <a
                            href={authorLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="rounded-full"
                                src={image}
                                alt={`Foto de ${author}`}
                            />
                        </a>
                    ) : (
                        <UserRound className={`size-14 text-background`} />
                    )}
                </div>
                <CardTitle className="font-bold">
                    <span>{quote}</span>
                </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 text-pretty italic leading-6 tracking-wide">
                <p>&quot;{description}&quot;</p>
            </CardContent>

            <CardFooter className="w-full">
                <div className="flex flex-col gap-1">
                    <a
                        href={authorLink}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="font-semibold hover:font-bold hover:text-popover-foreground"
                    >
                        {author}
                    </a>
                    <span className="text-sm">{role}</span>
                    <div>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={companyLink}
                            className="hover:font-bold hover:text-popover-foreground"
                        >
                            {company}
                        </a>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
