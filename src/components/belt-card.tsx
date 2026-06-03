import Image from 'next/image'

import Black from '@/assets/belt-black.svg'
import Blue from '@/assets/belt-blue.svg'
import Brown from '@/assets/belt-brown.svg'
import Pink from '@/assets/belt-pink.svg'
import White from '@/assets/belt-white.svg'
import { cn } from '@/lib/utils'

const BeltColorImage = {
    white: White,
    blue: Blue,
    pink: Pink,
    brown: Brown,
    black: Black,
}

type BeltIconProps = {
    color: keyof typeof BeltColorImage
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'>

function BeltIcon({ color, alt = '', className, ...rest }: BeltIconProps) {
    return (
        <Image
            className={cn('flex-start size-16 rounded-full', className)}
            src={BeltColorImage[color]}
            width={64}
            height={64}
            alt={alt}
            {...rest}
        />
    )
}

function BeltContent({
    children,
    className,
    ...rest
}: {
    children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('flex flex-col gap-1.5', className)} {...rest}>
            {children}
        </div>
    )
}

function BeltTitle({
    children,
    className,
    ...rest
}: {
    children: React.ReactNode
} & React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            className={cn('w-full text-base leading-tight', className)}
            {...rest}
        >
            {children}
        </h3>
    )
}

function BeltDescription({
    children,
    className,
    ...rest
}: {
    children: React.ReactNode
} & React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn('w-full text-xs leading-tight', className)} {...rest}>
            {children}
        </p>
    )
}

function BeltCard({
    children,
    className,
    ...rest
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'flex gap-4 rounded-lg bg-ly-dark-azure-850 p-6 sm:flex-grow sm:basis-[296px] sm:flex-row xl:max-w-[240px] xl:flex-1 xl:flex-col xl:gap-2 xl:p-4',
                className
            )}
            {...rest}
        >
            {children}
        </div>
    )
}

export { BeltCard, BeltContent, BeltDescription, BeltIcon, BeltTitle }
