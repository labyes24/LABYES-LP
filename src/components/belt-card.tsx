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

function BeltCardHeader({
    children,
    className,
    ...rest
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('flex items-center gap-2', className)} {...rest}>
            {children}
        </div>
    )
}

function BeltIconTitle({
    children,
    className,
    ...rest
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span className={cn('text-sm leading-[1.285]', className)} {...rest}>
            {children}
        </span>
    )
}

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

function BeltCardContent({
    children,
    className,
    ...rest
}: {
    children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn('flex flex-col items-center gap-2', className)}
            {...rest}
        >
            {children}
        </div>
    )
}

function BeltCardTitle({
    children,
    className,
    ...rest
}: {
    children: React.ReactNode
} & React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            className={cn(
                'w-full text-center text-base font-bold leading-tight',
                className
            )}
            {...rest}
        >
            {children}
        </h3>
    )
}

function BeltCardDescription({
    children,
    className,
    ...rest
}: {
    children: React.ReactNode
} & React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn(
                'w-full text-center text-xs leading-[1.166]',
                className
            )}
            {...rest}
        >
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
                'flex flex-col items-center gap-4 rounded-2xl border-2 border-ly-white bg-[#273443] p-6 sm:flex-grow sm:basis-[296px] xl:max-w-[240px] xl:flex-1 xl:flex-col xl:gap-2 xl:rounded-3xl xl:px-3.5 xl:py-4',
                className
            )}
            {...rest}
        >
            {children}
        </div>
    )
}

export {
    BeltCard,
    BeltCardContent,
    BeltCardDescription,
    BeltCardHeader,
    BeltCardTitle,
    BeltIcon,
    BeltIconTitle,
}
