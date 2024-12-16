'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { buttonVariants } from './ui/button'
import { NavigationMenuLink } from './ui/navigation-menu'

interface NavigationLinkProps {
    href: string
    title: string
    type?: 'desktop' | 'mobile'
}

export function NavigationLink({
    href,
    title,
    type = 'desktop',
}: NavigationLinkProps) {
    const pathname = usePathname()
    return (
        <>
            {type === 'desktop' ? (
                <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink
                        //className="flex h-9 w-fit items-center justify-center px-4 py-2 text-base font-medium text-ly-dark-azure-800 underline-offset-2 transition-all hover:underline focus:font-semibold disabled:pointer-events-none disabled:opacity-50"
                        className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium text-ly-dark-azure-800 transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                        {title}
                    </NavigationMenuLink>
                </Link>
            ) : (
                <Link
                    data-actual={href! === pathname}
                    href={href!}
                    className={cn(
                        'transition-all',
                        buttonVariants({ variant: 'ghost' }),
                        pathname === href && 'bg-muted hover:bg-muted',
                        'w-full justify-center rounded-none text-base font-medium text-foreground/95 data-[actual=true]:text-foreground/80'
                    )}
                >
                    {title}
                </Link>
            )}
        </>
    )
}
