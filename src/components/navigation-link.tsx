'use client'
import Link from 'next/link'
import { NavigationMenuLink } from './ui/navigation-menu'

interface NavigationLinkProps {
    href: string
    title: string
}

export function NavigationLink({ href, title }: NavigationLinkProps) {
    return (
        <Link href={href} legacyBehavior passHref>
            <NavigationMenuLink
                //className="flex h-9 w-fit items-center justify-center px-4 py-2 text-base font-medium text-ly-dark-azure-800 underline-offset-2 transition-all hover:underline focus:font-semibold disabled:pointer-events-none disabled:opacity-50"
                className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium text-ly-dark-azure-800 underline-offset-2 transition-colors hover:underline focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
                {title}
            </NavigationMenuLink>
        </Link>
    )
}
