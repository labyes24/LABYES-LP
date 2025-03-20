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
                        `mb-6 flex h-20 w-20 justify-center rounded-full border-4`,
                        `${colorSelected}`
                    )}
                >
                    {image ? (
                        <Image
                            className="rounded-full"
                            src={image}
                            alt={`Foto de ${author}`}
                        />
                    ) : (
                        <UserRound className={`h-14 w-14 text-background`} />
                    )}
                </div>
                <CardTitle className="font-bold">
                    <span>{quote}</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="leading-7 tracking-wide">
                <p>{description}</p>
            </CardContent>
            <CardFooter className="w-full">
                <div className="flex flex-col gap-1">
                    <a
                        href={authorLink}
                        target="_blank"
                        className="font-semibold hover:font-bold hover:text-popover-foreground"
                    >
                        {author}
                    </a>
                    <div>
                        <span>{role}</span>,{' '}
                        <a
                            target="_blank"
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
