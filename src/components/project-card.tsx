import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

import PlaceholderImage from '@/assets/project_card_placeholder.svg'
import Ribbon from '@/assets/project_card_ribbon.svg'
import Underline from '@/assets/project_card_underline.svg'

import { Button } from './ui/button'

interface ProjectCardProps {
    title: string
    description: string
    finished: boolean
    image?: string
    link: string
}

export function ProjectCard({
    title,
    description,
    finished,
    image,
    link,
}: ProjectCardProps) {
    const imageUrl = image ?? PlaceholderImage.src

    return (
        <Card className="relative mb-6 flex max-w-96 flex-col items-center p-3 text-section-light-foreground">
            {finished ? (
                <img
                    src={Ribbon.src}
                    alt=""
                    className="absolute right-0 top-0"
                />
            ) : null}

            <img src={imageUrl} alt={title} className="mt-8 size-['172px']" />

            <CardHeader>
                <CardTitle className="flex flex-col items-center text-2xl font-bold lg:text-[28px]/[38px]">
                    <span>{title}</span>
                    <img src={Underline.src} alt="" />
                </CardTitle>
            </CardHeader>
            <CardContent className="text-center leading-7 lg:text-lg">
                <p>{description}</p>
            </CardContent>
            <CardFooter className="w-full">
                <a href={link} className="w-full">
                    <Button className="h-16 w-full rounded-full bg-background text-lg font-semibold leading-5 text-foreground hover:bg-accent">
                        Saiba mais
                    </Button>
                </a>
            </CardFooter>
        </Card>
    )
}
