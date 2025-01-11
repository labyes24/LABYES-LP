import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

import PlaceholderImage from '@/assets/project_card_placeholder.svg'
import Underline from '@/assets/project_card_underline.svg'

interface TestimonialCardProps {
    quote: string
    description: string
    author: string
    role: string
    company: string
    image?: string
}

export function TestimonialCard({
    quote,
    description,
    image,
    author,
    company,
    role,
}: TestimonialCardProps) {
    const imageUrl = image ?? PlaceholderImage.src

    return (
        <Card>
            <CardHeader>
                <CardTitle className="">
                    <img src={Underline.src} alt="" />
                    <span>{quote}</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="text-center leading-7">
                <p>{description}</p>
            </CardContent>
            <CardFooter className="w-full">
                <div className="flex gap-3">
                    <span>{author}</span>
                    <div>
                        <span>{role}</span>, <span>{company}</span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
