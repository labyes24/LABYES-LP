'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { buttonVariants } from './ui/button'
import { NavigationMenuLink } from './ui/navigation-menu'
import { SheetClose } from './ui/sheet'

interface NavigationLinkProps {
    href: string
    title: string
    className?: string
    type?: 'desktop' | 'mobile'
}

export function MenuNavigationLink({
    href,
    title,
    type = 'desktop',
    className,
}: NavigationLinkProps) {
    const pathname = usePathname()
    return (
        <>
            {type === 'desktop' ? (
                <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink
                        data-actual={href === pathname}
                        className={cn(
                            `inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors duration-300 hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[actual=true]:bg-accent/50`,
                            className
                        )}
                    >
                        {title}
                    </NavigationMenuLink>
                </Link>
            ) : (
                <SheetClose asChild>
                    <Link
                        data-actual={href! === pathname}
                        href={href!}
                        className={
                            className ||
                            cn(
                                'transition-all',
                                buttonVariants({ variant: 'ghost' }),
                                pathname === href && 'bg-muted hover:bg-muted',
                                'w-full justify-center rounded-none text-base font-medium text-foreground/95 data-[actual=true]:text-foreground/80'
                            )
                        }
                    >
                        {title}
                    </Link>
                </SheetClose>
            )}
        </>
    )
}
